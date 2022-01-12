import {
  Controller,
  BadRequestError,
  Post,
  JsonController,
  BodyParam,
  Get,
  Param,
  QueryParam,
  UploadedFile,
  Req,
  Session,
  Body,
  QueryParams,
  Ctx
} from 'routing-controllers'
import { MiniprogramService } from '../services'
import { Service } from 'typedi'

import Message from '../helpers/message'
import { sha1 } from 'configs/utils'
import { sign } from 'wx/wxSign'
import redis from '../../redis/redisConnection'

import getRawBody from 'raw-body'
import axios from 'axios'
import getAccessToken from 'wx/getAccessToken'
import { wx, setPath, baseURL, baseURLMiniProgram } from '../../configs/config'
import { miniprogram } from '../helpers/miniprogram'
import { miniprogramConfig } from '../../configs/config'
// const uploadOpts = uploads.options;

// console.log(uploadOpts);



@Controller()
@Service()
export class miniprogramController {
  constructor(private MiniprogramService: MiniprogramService) { }
  @Get('/fg')
  teaa() {
    return 'aaaadfsdfds'
  }
  @Get('/fg/delArticle')
  async delArtile(@QueryParam('token') token?: String, @QueryParam('id') id?: String) {
    let res = await this.MiniprogramService.delArtile(id)
    return res
  }
  @Get('/fg/getArticle')
  async getArtile(@QueryParam('page') page: Number, @QueryParam('num') num?: Number, @QueryParam('token') token?: String) {
    console.log(num);
    if(!num){
      num = 20
    }
    let res = await this.MiniprogramService.getArticle(page, num)
    return Message.success(res)
  }

  @Post('/fg/uplod/article')
  async adminUploadArticle(@UploadedFile('fileName', { options: miniprogram }) file: any, @Body() content: any,) {
    console.log(content);
    // debugger
    let { filename } = file
    let url = baseURLMiniProgram + '/' + filename
    await this.MiniprogramService.createArticle(Object.assign({}, { coverURL: url }, content))
    return Message.success('上传成功')
  }

  @Get('/fg/getDesigner')
  async getDesigner() {
    return await this.MiniprogramService.getDesigner()
  }

  @Get('/fg/sms')
  async sendSms(@QueryParam('phone') phone: Number) {
    let code = Math.random().toString().slice(2, 6)
    console.log(code);
    await redis.set(phone, code, 'EX', 10 * 60)

    return Message.success(code)
  }


  @Post('/mini/upload') 
  async uploadImg(@UploadedFile('fileName', { options: miniprogram }) file: any) {
    let { filename } = file
    let url = baseURLMiniProgram + '/' + filename
    console.log('--upload---- file--', file);

    return Message.success(url)
  }

  @Post('/fg/uploadbanner') //banner
  async uploadbanner(@UploadedFile('fileName', { options: miniprogram }) file: any) {
    let { filename } = file
    let url = baseURLMiniProgram + '/' + filename
    console.log('--upload---- file--', file);

    return Message.success(url)
  }

  @Get('/mini/code2Session')
  async code2Session(@QueryParam('code') code: String) {
    let { appid, secret } = miniprogramConfig
    let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
    let res = await axios.get(url)
    let user = await this.MiniprogramService.create(res.data)
    return Message.success(user)
  }




  @Get('/fg/getuser')
  async getUserInfo(@QueryParam('token') token: String) {
    let user = await this.MiniprogramService.getUserinfo(token)
    return user
  }




  //上传手机号 名字等
  @Post('/fg/updateUser')
  async update(@Body() Content: any) {
    for (let [key, value] of Object.entries(Content)) {
      if (value == '') {
        return Message.fail('信息不完整')
        break
      }
    }

    let res = await this.MiniprogramService.updateUser(Content)
    console.log('--ssdf--', res);
    return res
  }




  //申请成为设计师
  @Post('/fg/apply/designer')
  async applyDesigner(@Body() Content: any) {
    let { phone, username, token } = Content
    return await this.MiniprogramService.applyDesigner(token, phone, username)
  }

  //后台审核设计师
  @Get('/fg/admin/designer')
  async adminDesigner(@QueryParam('openid') openid: String) {
    console.log(openid);
    return await this.MiniprogramService.adminDesigner(openid)
  }




}
