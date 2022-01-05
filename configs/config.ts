

const wx = {
  token: 'lzhstop',
  AppID: 'wxce4a169091306766',
  AppSecret: 'ab5a13e12bed6d62ca644fe7bcc5d870',
  buttomobj: {
    "button": [
      // {
      //   "type": "view",
      //   "name": "汉水软件",
      //   "url": "http://wx.lzhs.top"
      // },

      {
        "type": "view",
        "name": "转成二维码",
        "url": "http://wx.lzhs.top/#/qrcode"
      },

      {
        "type": "view",
        "name": "赞一下我们",
        "url": "http://wx.lzhs.top/#/donate"
      },
      // {
      //   "name": "小工具",
      //   "sub_button": [
      //     {
      //       "type": "view",
      //       "name": "转成二维码",
      //       "url": "http://wx.lzhs.top/#/qrcode"
      //     },
      //     {
      //       "type": "click",
      //       "name": "赞一下我们",
      //       "key": "V1001_GOOD"
      //     }]
      // }
    ]
  }
}


const getRedisConfig = {
  port: 6379,
  host: '127.0.0.1',
  password: 'auth',
  family: 4, // 4 (IPv4) or 6 (IPv6)
  db: 0,
}

const setPath = () => {
  console.log('======ENV===', process.env.NODE_ENV);
  let path = ''
  let env = process.env.NODE_ENV
  if (env == 'development') {
    path = '/users/upload'
  } else {
    path = '/usr/myapp/upload'
  }
  return path
}
const miniprogramSetPath = () => {
  console.log('======ENV===', process.env.NODE_ENV);
  let path = ''
  let env = process.env.NODE_ENV
  if (env == 'development') {
    path = '/users/miniprogramUpload'
  } else {
    path = '/usr/myapp/miniprogramUpload'
  }
  return path
}


const miniprogramConfig = {
  appid: 'wxd32fdaef18b611d9',
  secret: '6cc4bf8f1ebf884c55154c29810b8a04',
}

const baseURL = 'http://static.lzhs.top/upload'

export {
  wx,
  getRedisConfig,
  setPath,
  miniprogramSetPath,
  baseURL,
  miniprogramConfig
}