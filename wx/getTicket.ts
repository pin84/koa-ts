import axios from 'axios'
import redis from '../redis/redisConnection'
import Message from '../app/helpers/message'
import getAccessToken from './getAccessToken'


export default async function () {
  let access_token = await getAccessToken()
  let ticket = await redis.get('ticket')
  if (!ticket) {
    let ticketUrl = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=jsapi`

    let ticket_data = await axios.get(ticketUrl)
    console.log('--ticket_data----',ticket_data);
    ticket = ticket_data.data.ticket
    redis.set('ticket', ticket, 'EX', 300)
    console.log('--ticket---', ticket);
  }
  return Message.success(ticket)
}