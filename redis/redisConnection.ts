import ioredis from 'ioredis';
import { resolve } from 'path';
import { print } from '../configs/utils'
import { getRedisConfig } from '../configs/config';

let { port, host, db, family } = getRedisConfig

const config = {
  port, // Redis port
  host, // Redis host
  family,
  db,
}

let redis = new ioredis(config)

redis.on('connect', () => { //根据 connect 事件判断连接成功
  let ts = new Date().getTime()
  console.log(`at ${ts} ,redis connet success`)
})
redis.on('error', (err) => { //根据 error 事件判断连接失败
  print.danger('The Redis Can not Connect:')
})

// redis.set('access_token', access_token, 'EX', 300) //写入 生存时间单位：秒

export default redis