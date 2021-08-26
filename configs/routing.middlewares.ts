import { KoaMiddlewareInterface, Middleware } from 'routing-controllers'
import { Service } from 'typedi'

@Middleware({ type: 'before' })
@Service()
export class HeaderMiddleware implements KoaMiddlewareInterface {


  async use(context: any, next: (err?: any) => any): Promise<any> {
    let origin = context.request.header.origin
    console.log('--origin----', origin, context.request.req.method);
    let urlArr = [
      'http://lzhs.top',
      'http://wx.lzhs.top',
      'http://wx.lzhs.top/#',
      'http://www.lzhs.top',
      'http://data.lzhs.top',
      'http://4212225c65.oicp.vip',
      'http://localhost:8080', //上线后这个去掉
    ]
    let index = urlArr.findIndex(url => url == origin)
    // context.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS')
    context.set('Access-Control-Allow-Methods', '*')
    context.set('Access-Control-Allow-Origin', '*')
    // context.set('Access-Control-Allow-Origin', context.request.header.origin)
    // context.set('Access-Control-Allow-Origin', `${urlArr[index]}`)
    // context.set('Access-Control-Allow-Headers', ['content-type'])
    // context.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    context.set('Access-Control-Allow-Headers', '*')
    context.set('Access-Control-Allow-Credentials', 'true')
    context.set('Content-Type', 'application/json; charset=utf-8')
    return next()
  }
}
