import {
  BadRequestError,
  Post,
  JsonController,
  BodyParam,
  Get,
  Param,
  QueryParam,
  UploadedFile
} from 'routing-controllers'
import { AthenaService } from '../services'
import { Service } from 'typedi'

import Message from '../helpers/message'

import redis from '../../redis/redisConnection'


@JsonController()
@Service()
export class AthenaController {
  constructor(private AthenaService: AthenaService) { }

  @Get('/user/logout')
  userlogout(@QueryParam('token') token: string) {
    return 'this.AthenaService.userlogout(token)'
  }
  @Get('/user/userinfo')
  getUserinfo(@QueryParam('token') token: string) {
    return this.AthenaService.getUserinfo(token)
  }

  @Get('/msg/getmsg')
  async query(@QueryParam('size') size: number, @QueryParam('pageIndex') pageIndex: number,) {

    if (!size) {
      size = 2
    }

    let list = await this.AthenaService.getMsg(size, pageIndex - 1)
    return Message.success(list)
  }
  @Get('/msg/getmsgcount')
  async countmsg() {
    let count = await this.AthenaService.getMsgCount()
    return Message.success(count)
  }

  @Post('/user/login')
  async login(
    @BodyParam('name') name: string,
    @BodyParam('pwd') pwd: string,
  ) {
    if (!name) {
      throw new BadRequestError('username is required')
    }
    return await this.AthenaService.login({ name, pwd })
  }

  @Post('/user/register')
  async register(
    @BodyParam('name') name: string,
    @BodyParam('pwd') pwd: string,
    @BodyParam('repwd') repwd: string,
  ) {
    if (!name) {
      throw new BadRequestError('username is required')
    }
    return await this.AthenaService.creatUser({ name, pwd, repwd })
  }


  //----  msg ---------
  @Post('/msg/send')
  async sendmsg(
    @BodyParam('isSecret') isSecret: boolean,
    @BodyParam('msg') msg: string,
    @BodyParam('title') title: string,
    @BodyParam('token') token: string,
    @BodyParam('username') username: string,
    @BodyParam('avatar') avatar: string,

  ) {
    return await this.AthenaService.creatMsg({ token,avatar, isSecret, msg, title, username })
  }

  @Get('/msg/search')
  async searchmsg(@QueryParam('keyword') keyword: string) {
    let count = await this.AthenaService.searchmsg(keyword)
    return count
  }




  //---------file--------------
  @Post('/file/upload')
  async upload(@UploadedFile("abc") file: any) {

    console.log(file);
    

    return 'aabb'

    // return await this.AthenaService.creatMsg({ token, isSecret, msg, title, username })
  }


  @Get('/token/test')
  async testToken() {
    // let count = await this.AthenaService.testToken(token)
    return 'count'
  }

}
