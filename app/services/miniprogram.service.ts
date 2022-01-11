import { Service } from 'typedi'
import prisma from 'app/helpers/client'
import { Prisma } from '@prisma/client'

import redis from '../../redis/redisConnection'
import Message from '../helpers/message'
import Jwt from '../helpers/jwt'
@Service()
export class MiniprogramService {
  /**
   * Type 'Prisma.SessionCreateInput' is automatically generated.
   * Whenever you modify file 'prisma/schema.prisma' and then run command:
   *   prisma generate
   *   prisma migrate dev
   * The types is automatically updated.
   *
   * About CRUD: https://www.prisma.io/docs/concepts/components/prisma-client/crud
   */

  async delArtile(id) {
    await this.deleteById(Number(id))
    return Message.success('删除成功')
  }

  async getArticle() {
    let list = await this.findArticle()
    return list
  }
  async createArticle(content) {
    let { title, time, htmlStr, coverURL, subtitle,id} = content
    console.log(title, time, htmlStr, coverURL, subtitle,id);

    let res
    if(!id){
      res = await prisma.fg_article.create({
        data: {
          title,
          time: String(time),
          content: htmlStr,
          coverURL,
          subtitle
        },
      })
      console.log('====create===',res);
      
    } else {
      res = await prisma.fg_article.update({
        where:{
          id:Number(id)
        },
        data:{
          title,
          time: String(time),
          content: htmlStr,
          coverURL,
          subtitle
        }
      })
      console.log('====update===',res);
    }

    console.log('====aaaaa===',res);
    return res

  }
  async getDesigner() {
    let list = await prisma.fg_user.findMany({
      where: {
        isDesigner: 4,
      },
      select: this.findSelect()
    })

    return list
  }

  async create(session) {
    let { session_key, openid, unionid } = session
    let user = await this.findUser(openid)
    // let token = Jwt.getToken({ openid, session_key }, 10)
    let timestamp = new Date().getTime()
    let token = timestamp.toString(32) + Math.random().toString(16).slice(2)
    await redis.set(token, openid, 'EX', 24 * 60 * 60)
    let obj = Object.assign({}, user, { token })
    if (user) return obj
    await prisma.fg_user.create({
      data: {
        sessionKey: session_key,
        openid,
        unionid,
        token
      },
    })

    return obj
  }

  async getUserinfo(token) {
    let openid = await redis.get(token)
    if (!openid) {
      return Message.fail('登录已过期，请刷新页面')
    }

    let user = await this.findUser(openid)

    return Message.success(user)
  }

  async updateUser(userinfo) {
    let { username, phone, token, code } = userinfo


    let openid = await redis.get(token)
    if (!openid) {
      return Message.fail('验证码已过期，请重新发送')
    }

    const updateUsers = await prisma.fg_user.updateMany({
      where: {
        openid,
      },
      data: {
        username, phone
      },
    })

    return Message.success(updateUsers)
  }

  async applyDesigner(token, phone, username) {

    let openid = await redis.get(token)

    if (!openid) {
      return Message.fail('登录已过期，请刷新页面')
    }

    let user = await this.findUser(openid)
    if (!user) {
      return Message.fail('用户不存在')
    }
    let { isDesigner } = user
    if (isDesigner == 4) {
      return Message.fail('正在审核中，请耐心等待')
    }
    if (isDesigner == 5) {
      return Message.fail('您已经是设计师，不能重复申请')
    }
    const updateUsers = await prisma.fg_user.updateMany({
      where: {
        openid,
      },
      data: {
        isDesigner: 4,
        phone, username
      },
    })
    return Message.success('申请成功，请等待审核')
  }

  async adminDesigner(openid) {
    let user = await this.findUser(openid)
    if (!user) {
      return Message.fail('用户不存在')
    }
    let { isDesigner } = user
    if (isDesigner == 5) {
      return Message.fail('用户已经是设计师')
    }
    const updateUsers = await prisma.fg_user.updateMany({
      where: {
        openid,
      },
      data: {
        isDesigner: 5
      },
    })
    return Message.success('申请成功，请等待审核')
  }
  async findUser(openid) {
    let user = await prisma.fg_user.findUnique({
      where: {
        openid,
      },
      select: this.findSelect()
    })

    return user
  }
  async findUserList() {
    let user = await prisma.fg_user.findMany({
      where: {
        isDesigner: 4,
      },
      select: this.findSelect()
    })

    return user
  }

  findSelect() {
    let obj = {
      id: true,
      isDesigner: true,
      token: true,
      username: true,
      phone: true,
      isAdmin: true,
    }
    return obj
  }

 async deleteById(id) {
  let res = await  prisma.fg_article.delete({
      where: {
        id
      }
    })
    return res

  }

  async getOpenid(token) {
    let openid = redis.get(token)
    if (!openid) {
      return Message.fail('登录已过期，请刷页面')
    }
    return openid
  }

  async findArticle() {
    let list = await prisma.fg_article.findMany({
      skip: 1,
      take: 999,
    })

    return list
  }

}
