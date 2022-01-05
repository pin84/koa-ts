import { Service } from 'typedi'
import prisma from 'app/helpers/client'
import { Prisma } from '@prisma/client'

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

  async create(session) {
    let {session_key,openid,unionid} = session

    let user =await this.findUser(openid)
    if(user) return
    return prisma.fg_user.create({
      data: {
        sessionKey:session_key,
        openid,
        unionid
      },
    })
  }


async findUser(openid){
  let user =await prisma.fg_user.findUnique({
    where: {
      openid,
    }
  })
  return user
}
  
}
