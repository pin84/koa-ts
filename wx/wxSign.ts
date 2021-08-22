
import { sha1 } from '../configs/utils'
import Message from '../app/helpers/message'
import { wx } from '../configs/config'
import getTicket from './getTicket'

export const sign = async (url) => {
  if (!url) {
    return Message.fail('请传入URL参数')
  }
  let res = await getTicket()
  console.log('---jsapi_ticket--', res);
  let { code } = res
  if (code < 0) {
    return res
  }
  // 'invalid ip 113.13.154.209 ipv6 ::ffff:113.13.154.209, not in whitelist rid: 6118be01-5078d40f-1184ab91'

  let obj = {
    noncestr: createNonceStr(), //随机字符串
    jsapi_ticket: res.data,
    timestamp: createTimestamp(),
    url, // 当前网页的URL，不包含#及其后面部分
  }
  // 签名生成规则如下：
  // 1)参与签名的字段包括noncestr（随机字符串）, 有效的jsapi_ticket, timestamp（时间戳）, url（当前网页的URL，不包含#及其后面部分） 。
  //2)对所有待签名参数按照字段名的ASCII 码从小到大排序（字典序）
  //3)使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串string1。这里需要注意的是所有参数名均为小写字符。
  //4)对string1作sha1加密，字段名和字段值都采用原始值，不进行URL 转义。即signature=sha1(string1)
  console.log('--参与签名的obj--', obj);
  let str = row(obj)
  console.log('--参与签名的str--', str);
  let signature = sha1(str)
  console.log('--签名的结果signature--', signature);

  obj['signature'] = signature
  obj['appId'] = wx.AppID

  return Message.success(obj)
}

function createNonceStr() {
  let randomstr = Math.random().toString(36)
  let str = randomstr.substr(2, 17)
  return str
}

function createTimestamp() {
  let timestamp = new Date().getTime() / 1000 + ''
  return parseInt(timestamp)
}

function row(obj) {
  let keys = Object.keys(obj)
  keys.sort()
  let newObj = {}
  keys.forEach(key => {
    newObj[key] = obj[key]
  })

  let str = ''
  for (let k in newObj) {
    str += '&' + k + '=' + newObj[k]
  }
  str = str.substr(1)
  return str
}