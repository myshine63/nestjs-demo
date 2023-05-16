import * as process from 'process';
import * as winston from 'winston';
import { utilities, WinstonModule } from 'nest-winston';
import 'winston-daily-rotate-file';
export default function createWinstonInstance() {
  if (process.env.NODE_ENV === 'development') {
    return WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            utilities.format.nestLike('', {
              colors: true,
              prettyPrint: true,
            }),
          ),
        }),
      ],
    });
  }
  return WinstonModule.createLogger({
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
}
