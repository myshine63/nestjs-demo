import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createLogger } from 'winston';
import { utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as process from 'process';
import 'winston-daily-rotate-file';

const createWinstonInstance = () => {
  if (process.env.NODE_ENV === 'development') {
    return createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            utilities.format.nestLike('MyApp', {
              colors: true,
              prettyPrint: true,
            }),
          ),
        }),
      ],
    });
  }
  return createLogger({
    transports: [
      new winston.transports.DailyRotateFile({
        dirname: 'logs/winston',
        filename: '%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
      }),
    ],
  });
};

async function bootstrap() {
  // winston使用
  const instance = createWinstonInstance();
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      instance,
    }),
  });
  await app.listen(3000);
}

bootstrap();
