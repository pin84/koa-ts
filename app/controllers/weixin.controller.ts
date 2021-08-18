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
import { getTicket, sign } from 'configs/wxSign'



import getRawBody from 'raw-body'


@Controller()
@Service()
export class WeixinController {
  constructor(private AthenaService: AthenaService) { }
  @Get('/wx/')
  tokenVerify(@QueryParam('signature') signature: String,
    @QueryParam('nonce') nonce: Number,
    @QueryParam('timestamp') timestamp: Number, @QueryParam('echostr') echostr: String) {
    let token = 'lzhstop'
    // ignature=53bf757b70fa880336fecda02853e2230a24ab45&echostr=7008426209769291259&timestamp=1628564699&nonce=1733177950
    let str = [token, timestamp, nonce].sort().join('');
    let sha = sha1(str);
    if (sha == signature) {
      console.log('===true===', echostr);
      return echostr;
    } else {
      debugger
      return 'wrong';
    }
  }



  @Post('/wx/')
  async test(@Ctx() Content: any) {
    let bb = await getRawBody(Content.req, {
      encoding: 'utf-8'
    })
    console.log('--ssdf--', bb);
    return 'hello world ! '
  }


  @Get('/wx/sign')
  async sign(@QueryParam('url') url:String) {
    let res = await sign(url)
    return res
  }



}
