## koa-ts

使用 TypeScript 构建 Koa2 项目的最佳实践.

> v3.1 UPDATE: 我们使用 Prisma 代替了 typeorm，缩减运行时内存到原来的一半或是更低。

<br>

### 快速开始

**项目依赖: [NodeJS > 12.0](https://nodejs.org/cn)**

1. 在终端输入: `npm init koa-ts` 即可快速初始化。

2. 安装依赖: `yarn` 或 `npm i`。

3. 运行 `prisma migrate dev` 迁移数据库模型。

4. 挂起服务：`yarn dev` 或 `npm dev`，访问 http://127.0.0.1:3000/apis/sessions 示例。

&nbsp;&nbsp;**(可选)** 项目内置了 docker-compose 数据库，可以使用 `npm run compose` 自动挂起数据库 (如果您已有 docker / docker-compose)。

<br>

### 目录

```
├── app
│   ├── controllers         ---  控制器
│   ├── helpers             ---  帮助工具集 (拦截器、错误集、验证等)
│   ├── jobs                ---  任务 (定时任务、触发任务、邮件任务等)
│   ├── entities            ---  数据实体，数据库模型文件
│   └── services            ---  controller 与 model 的粘合层 (提拱一些实用方法...)
├── config
│   ├── environments        ---  环境配置
│   ├── koa.middlewares     ---  Koa 中间件配置
│   ├── routing.middlewares ---  Routing Controller 中间件配置
│   ├── routing.options     ---  Routing Controller 参数配置
│   ├── bootstrap           ---  启动声明周期
│   ├── interceptors        ---  全局的拦截器
│   └── utils               ---  纯函数的帮助方法
└── test                    ---  测试工具函数
├── variables.env           ---  环境变量文件，如果在此文件设置将会覆盖 'config/environments'
```

<br>

### 特性

- 业务逻辑与配置分离，一目了然。

- scheme model 等同于 interface，更符合 TS 的代码风格。

- 依赖注入在 Koa 项目中的最佳实践。

- 测试与 Lint 脚手架。

- 得益于 Prisma 的自动数据模型约束。

- TypeScript hotload, 开发便捷。

<br>

### 生命周期参考

1. 调用 `app.ts` -> 准备环境变量 `environments` -> 获取环境文件 `variables.env`

2. 准备完毕，调用 `bootstrap.before()`

3. 挂载 `routing-controllers` -> 挂载 Koa 中间件 -> 注册 `Container`

4. 启动 `Koa`。完毕调用 `bootstrap.after()`

<br>

### 数据库链接

项目默认使用 Prisma 作为智能化 ORM 工具，支持 `PostgreSQL` / `MySQL` / `SQLite`。

- 你可以在文件 `.env` 中修改数据库的链接配置。
- 每次编辑文件 `/prisma/schema.prisma` 修改模型后，建议运行 `prisma migrate dev` 来迁移数据库。
- 每次编辑文件 `/prisma/schema.prisma` 修改模型后，建议运行 `prisma generate` 生成类型文件。

<br>

### 关于环境变量

- **在开发环境中** (`NODE_ENV=development`)：自动从文件 `configs/environments/development.ts` 读取配置。

- **在生产环境中** (`NODE_ENV=production`): 自动从文件 `configs/environments/production.ts` 读取配置。

- **任何环境**: 如果 `.env` 文件内存在同名常量，会覆盖上述 2 个环境配置文件。优先级最高。

<br>

### 文档参考

- [routing-controllers](https://github.com/typestack/routing-controllers)
- [Prisma](https://www.prisma.io/docs/concepts)

<br>

### LICENSE

[MIT](./LICENSE)
