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


import getRawBody from 'raw-body'
import axios from 'axios'
import getAccessToken from 'wx/getAccessToken'
import { wx, setPath, baseURL,baseURLMiniProgram } from '../../configs/config'
import { miniprogram } from '../helpers/miniprogram'
import {miniprogramConfig} from '../../configs/config'
// const uploadOpts = uploads.options;

// console.log(uploadOpts);



@Controller()
@Service()
export class miniprogramController {
  constructor(private MiniprogramService: MiniprogramService) { }


  @Post('/mini/upload')
  async uploadImg(@UploadedFile('fileName', { options: miniprogram }) file: any) {
      let { filename } = file
      let url = baseURLMiniProgram + '/' + filename
      console.log('--upload---- file--',file);
    return Message.success(url)
  }

  @Get('/mini/code2Session')
  async code2Session(@QueryParam('code') code: String) {
    let {appid,secret} = miniprogramConfig
    let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
    let res = await axios.get(url)
    console.log(res.data);
    
    this.MiniprogramService.create(res.data)
    
    return res.data
  }


  @Get('/wx/')
  tokenVerify(@QueryParam('signature') signature: String,
    @QueryParam('nonce') nonce: Number,
    @QueryParam('timestamp') timestamp: Number, @QueryParam('echostr') echostr: String) {
    let token = 'lzhstop'
    // ignature=53bf757b70fa880336fecda02853e2230a24ab45&echostr=7008426209769291259&timestamp=1628564699&nonce=1733177950
    let str = [token, timestamp, nonce].sort().join('');
    let sha = sha1(str);
    if (sha == signature) {
      // console.log('===true===', echostr);
      return echostr;
    } else {
      return 'wrong';
    }
  }



  @Post('/wx/')
  async test(@Ctx() Content: any) {
    let bb = await getRawBody(Content.req, {
      encoding: 'utf-8'
    })
    console.log('--ssdf--', bb);
    return 'success'
  }



  @Get('/wx/sign')
  async sign(@QueryParam('signUrl') signUrl: String) {
    let res = await sign(signUrl)
    // console.log('-wx sign --',res);
    return res
  }



}
