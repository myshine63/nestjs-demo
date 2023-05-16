# nestjs-demo

## desc
练习nestjs时写的demo

## nestjs框架地址
[Nest中文官网](https://docs.nestjs.cn/9/introduction)
[Nest英文官网](https://docs.nestjs.com/)

## 安装依赖

```bash
$ pnpm install
```

## 配置prisma
1. 在根目录下创建.env文件
2. 配置数据库地址 DATABASE_URL=mysql://[user]:[password]@[hostname]:[port]/[database-name]

## 日志模块
### nestjs-pino + pino-pretty + pino-roll
1. 很简单，不需要太多的配置，默认可以就可以打印日志
2. pino-pretty:用于开发环境
3. pino-roll:用于生产环境

### winston + nest-winston + winston-daily-rotate-file
1. 不能自动打印日志
2. 打印结果全面
## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```


