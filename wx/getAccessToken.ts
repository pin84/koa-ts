import axios from 'axios'
import redis from '../redis/redisConnection'
import Message from '../app/helpers/message'
import { wx } from '../configs/config'

export default async function () {
  let access_token = await redis.get('access_token')
  if (!access_token) {
    let accessTokenUrl = ` https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${wx.AppID}&secret=${wx.AppSecret}`
    let res = await axios.get(accessTokenUrl)
    let { errmsg } = res.data
    access_token = res.data.access_token
    redis.set('access_token', access_token, 'EX', 300)
    console.log('---access_token--', res);
    if (errmsg) {
      return Message.fail(errmsg)
    }
  }
  return access_token
}

