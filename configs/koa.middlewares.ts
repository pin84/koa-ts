import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import Environment from './environments'
import path from 'path'

import koaStatic from 'koa-static'


export const useMiddlewares = <T extends Koa>(app: T): T => {
  Environment.identity !== 'test' && app.use(logger())

  app.use(bodyParser())

  app.use(koaStatic(path.join(__dirname, '..', 'assets')))

  return app
}
