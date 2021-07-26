import { Service } from 'typedi'
import prisma from 'app/helpers/client'
import { Prisma } from '@prisma/client'

import Message from '../helpers/message'
import Jwt from '../helpers/jwt'

@Service()
export class AthenaService {
  /**
   * Type 'Prisma.SessionCreateInput' is automatically generated.
   * Whenever you modify file 'prisma/schema.prisma' and then run command:
   *   prisma generate
   *   prisma migrate dev
   * The types is automatically updated.
   *
   * About CRUD: https://www.prisma.io/docs/concepts/components/prisma-client/crud
   */
  // async getMsg(session: Prisma.SessionCreateInput) {
  //   return prisma.session.create({
  //     data: session,
  //   })
  // }



  async getUserinfo(token) {
    let res = Jwt.verify(token)
    if (res.code == -1) {
      return Message.fail('token已过期')
    }

    let { name } = res

    let user = await prisma.user.findUnique({
      where: {
        name
      }
    })


    return Message.success(user)
  }



  async getMsg(size, pageIndex) {
    let list = await prisma.message.findMany({
      skip: size * pageIndex,
      take: size,
      orderBy: {
        id: 'desc',
      },
    })
    list.forEach(item=>{
      if(item.isSecret){
        item.content = '这是悄悄话。。。只有管理员才看到到～～'
      }
    })

    return list
  }

  async searchmsg(keyword) {

    let list = await prisma.message.findMany({
      where: {
        content: {
          contains: keyword
        }
      }
    })
    return Message.success(list)
  }

  async getMsgCount() {
    let list = await prisma.message.findMany()
    let len = list.length

    return len
  }
  async login(session) {
    let { name, pwd } = session
    let user = await prisma.user.findUnique({
      where: {
        name: name
      }
    })
    if (!user) {
      return Message.fail('用户不存在或密码错误')
    }
    if (pwd == user.pwd) {
      let token = Jwt.getToken(user)
      return Message.success({ user, token })
    } else {
      return Message.fail('用户不存在或密码错误')
    }
  }

  async creatUser(session) {
    let { name, pwd } = session

    let user = await prisma.user.findUnique({
      where: {
        name: name
      }
    })

    if (user) {
      return Message.fail('注册失败，用户名已存在')
    }

    try {
      let register = await prisma.user.create({
        data: {
          pwd,
          name,
        },
      })

      let token = Jwt.getToken({ register })
      return Message.success({ token, user: register })

    } catch (error) {
      return Message.fail('注册失败')
    }
  }

  async creatMsg(session) {
    let { token, isSecret, avatar, msg, title, username } = session
    let { id } = Jwt.verify(token)
    let res = await prisma.message.create({
      data: {
        userid: id,
        title,
        username,
        isSecret: isSecret ? 1 : 0,
        content: msg,
        avatar
      }
    })
    return Message.success(res)
  }

  testToken(token) {
    let res = Jwt.verify(token)
    console.log('--token-', token);


  }
}
