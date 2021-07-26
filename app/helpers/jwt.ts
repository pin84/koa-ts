import jwt from 'jsonwebtoken'

const SIGN_KEY = 'abc'

class Jwt {

  getToken(userData) {

    let str = jwt.sign(userData, SIGN_KEY, { expiresIn: 600 })

    return str
  }

  verify(token) {

    try {
      let res = jwt.verify(token,SIGN_KEY)
      return res
    } catch (error) {
      return {code:-1,message:'token已过期'}
    }
  }
}



export default new Jwt()