import {
  BadRequestError,
  Post,
  JsonController,
  BodyParam,
  Get,
  Param,
  QueryParam,
  UploadedFile,
  Body,
  BodyOptions
} from 'routing-controllers'
import { OfficialwebsiteService } from '../services'
import { Service } from 'typedi'

import Message from '../helpers/message'

import redis from '../../redis/redisConnection'

@JsonController()
@Service()
export class Afdsf {
  constructor(private OfficialwebsiteService: OfficialwebsiteService) { }

  @Post('/ow/contactus')
  async contactus(@Body() msg:any) {
    let res = this.OfficialwebsiteService.sendEmail(msg)
    return '发送成功'
  }


}