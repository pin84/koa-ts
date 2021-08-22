// import redisConnect from './redisConnection'
// import ioredis from 'ioredis'
// import { getRedisConfig } from '../configs/config';
// import { print } from '../configs/utils'



// export interface redisTool {
//   setString(key: string, value: any): Promise<string | void>
//   getString(key: any): Promise<string>
//   delString(key: string): Promise<number | null>
//   getDbSize(): Promise<number>
//   connToRedis(): Promise<unknown>
// }

// interface redisConfig {
//   port: number,
//   host: string,
//   password?: string
//   db?: number
//   family?: number
// }


// let redisConfig: redisConfig = {
//   port:getRedisConfig.port,
//   host: getRedisConfig.host
// }

// class RedisTool   {
//   redis: ioredis.Redis
//   config: redisConfig
//   constructor(opt?: any) {
//     this.redis = null;
//     if (opt) {
//       this.config = Object.assign(redisConfig, opt)
//     } else {
//       this.config = redisConfig
//     }
//     // this.connToRedis()
//     this.connToRedis().then(res => {
//       if (res) {
//         let ts = new Date().getTime()
//         console.log(`at ${ts} ,redis connet success`)
//       }
//     }).catch(e => {
//       print.danger('The Redis Can not Connect:' + e)
//     })
//   }

//   /**连接redis */
//   connToRedis() {
//     return new Promise((resolve, reject) => {
//       if (this.redis) {
//         resolve(true) //已创建
//       } else {
//         redisConnect(this.config).then((resp: ioredis.Redis) => {
//           this.redis = resp
//           resolve(true)
//         }
//         ).catch(err => { reject(err) })
//       }
//     })
//   }


// }



// const myRedis = new RedisTool();


// // export myRedis

// /*
// 需要用到多少个数据库，就定义多少个实例常量，这样的好处是:
// 每次个模块调用redis的时候，始终是取第一次生成的实例，避免了多次连接redis的尴尬
// */
// // export const redis_db1 = new RedisTool({ db: 1 })
// // export const redis_db2 = new RedisTool({db:2})
// // export const redis_db3 = new RedisTool({db:3})
// // export const redis_db4 = new RedisTool({db:4})

// export default myRedis
