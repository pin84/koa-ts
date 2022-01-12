import { KoaMiddlewareInterface, Middleware } from 'routing-controllers'
import { Service } from 'typedi'

@Middleware({ type: 'before' })
@Service()
export class HeaderMiddleware implements KoaMiddlewareInterface {


  async use(context: any, next: (err?: any) => any): Promise<any> {
    let origin = context.request.header.origin
    // console.log('--origin----', origin, context.request.req.method);
    let urlArr = [
      'http://fg.lzhs.top',
      'http://www.lzhs.top',
      'http://lzhs.top',
      'http://wx.lzhs.top',
      'http://of.lzhs.top',
      'http://data.lzhs.top',
      'http://4212225c65.oicp.vip',
      'http://localhost:8080', //上线后这个去掉
      'http://localhost:3030', //上线后这个去掉
    ]
    let index = urlArr.findIndex(url => url == origin)

    // console.log('=----cur  url---',urlArr[index]);
    
    context.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,HEAD,OPTIONS")
    // context.set('Access-Control-Allow-Origin', '*')
    // context.set('Access-Control-Allow-Origin', context.request.header.origin)
    context.set('Access-Control-Allow-Origin', `${urlArr[index]}`)
    // context.set('Access-Control-Allow-Headers', ['content-type'])
    context.set("Access-Control-Allow-Headers", "Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE")
    context.set('Access-Control-Allow-Credentials', 'true')
    context.set('Content-Type', 'application/json; charset=utf-8')
    // context.set("Access-Control-Expose-Headers", "Date") //设置可以向外暴露的响应头的参数。这里请求中可以拿到服务器的时间


      //前台请求时 credentials: 'include', 所以这一项的值不能这通配符 *
    return next()
  }
}
