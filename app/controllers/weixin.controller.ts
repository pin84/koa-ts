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
import { AthenaService } from '../services'
import { Service } from 'typedi'

import Message from '../helpers/message'
import { sha1 } from 'configs/utils'
import { sign } from 'wx/wxSign'
import redis from '../../redis/redisConnection'


import getRawBody from 'raw-body'
import axios from 'axios'
import getAccessToken from 'wx/getAccessToken'
import { wx, setPath, baseURL } from '../../configs/config'
import { upload } from '../helpers/file'
// const uploadOpts = uploads.options;

// console.log(uploadOpts);



@Controller()
@Service()
export class WeixinController {
  constructor(private AthenaService: AthenaService) { }



  @Post('/wx/upload')
  async uploadImg(@UploadedFile('fileName', { options: upload }) file: any) {
    // async uploadImg(@UploadedFile('fileName') file: any) {
      let { filename } = file
      let url = baseURL + '/' + filename
      console.log('--upload---- file--', file);
    return Message.success(url)
  }

  @Get('/wx/setbuttom')
  async setButtom() {
    let access_token = await getAccessToken()
    let url = ` https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${access_token}`
    let res = await axios.post(url, wx.buttomobj)
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
