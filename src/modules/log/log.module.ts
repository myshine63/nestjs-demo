import { Global, Module } from '@nestjs/common';
import { utilities, WinstonModule } from 'nest-winston';
import { ConfigService } from '@nestjs/config';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

const devLog = new winston.transports.Console({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.ms(),
    utilities.format.nestLike('MyApp', {
      colors: true,
      prettyPrint: true,
    }),
  ),
});
const prodLog = new winston.transports.DailyRotateFile({
  dirname: 'logs/winston',
  filename: '%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});
@Global()
@Module({
  imports: [
    WinstonModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          transports: [devLog, prodLog],
        };
      },
    }),
  ],
})
export class LogModule {}
