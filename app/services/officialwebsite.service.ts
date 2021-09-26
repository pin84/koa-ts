import { Service } from 'typedi'
import prisma from 'app/helpers/client'
import { Prisma } from '@prisma/client'

import sendMail from '../helpers/nodemailer'

@Service()
export class OfficialwebsiteService {
  /**
   * Type 'Prisma.SessionCreateInput' is automatically generated.
   * Whenever you modify file 'prisma/schema.prisma' and then run command:
   *   prisma generate
   *   prisma migrate dev
   * The types is automatically updated.
   *
   * About CRUD: https://www.prisma.io/docs/concepts/components/prisma-client/crud
   */

  async sendEmail(msg) {
    let { name,phone,email,content } = msg
    let str = `姓名：${name},手机：${phone},邮箱：${email},内容：${content}`
    let res = await sendMail(str)
    return res
  }


  test() {
    console.log(prisma);

  }
}
