
import config from './config'
import axios from 'axios'
import {sha1} from './utils'

export const getTicket = async () => {

    let accessTokenUrl = ` https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${config.wx.AppID}&secret=${config.wx.AppSecret}`

    let { data } = await axios.get(accessTokenUrl)

    let { errmsg, access_token } = data
    if (errmsg) {
        return errmsg
    }

    let ticketUrl = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=jsapi`

    let ticket_data = await axios.get(ticketUrl)

    let ticket = ticket_data.data.ticket

    return ticket

}


function createNonceStr() {
    let str = Math.random().toString(36).substr(2, 15)
    return str
}

function createTimestamp() {

    let timestamp = new Date().getTime() / 1000 + ''

    return parseInt(timestamp)

}

function row(obj){
    let keys = Object.keys(obj)
    keys.sort()
    let newObj = {}
    keys.forEach(key=>{
        newObj[key] = obj[key]
    })

    let str = ''
    for(let k in newObj){
        str+= '&' + k + '=' + newObj[k]
    }
    str = str.substr(1)
    return str
}

export const sign = async (url) => {
    let jsapi_ticket = await getTicket()
    let obj = {
        noncestr: createNonceStr(), //随机字符串
        jsapi_ticket,
        timestamp: createTimestamp(),
        url, // 当前网页的URL，不包含#及其后面部分
    }
    // 签名生成规则如下：
    // 1)参与签名的字段包括noncestr（随机字符串）, 有效的jsapi_ticket, timestamp（时间戳）, url（当前网页的URL，不包含#及其后面部分） 。
    //2)对所有待签名参数按照字段名的ASCII 码从小到大排序（字典序）
    //3)使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串string1。这里需要注意的是所有参数名均为小写字符。
    //4)对string1作sha1加密，字段名和字段值都采用原始值，不进行URL 转义。即signature=sha1(string1)

    let str = row(obj)
    let signature = sha1(str)

    obj['signature'] = signature

    return obj
}