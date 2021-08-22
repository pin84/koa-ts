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
export class Test {
  constructor(private AthenaService: AthenaService) { }
  @Get('/')
  test() {
    return '---test  api----'
  }
  @Get('/test/redis')
  async testRedis() {
    // let res =await redis.set('str2' , 'strwwww', 'EX', 10)
    let res1 =await redis.get('str2')
 

    console.log(res1);
    

    return 'redis'
  }




}
