import * as process from 'process';
import * as path from 'path';
import { LoggerModule } from 'nestjs-pino';
import { Global, Module } from '@nestjs/common';
const pinoConfig = () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    };
  }
  return {
    target: 'pino-roll',
    options: {
      file: path.join('logs', 'pino', 'log'),
      frequency: 'daily',
      mkdir: true,
      size: '5m',
    },
  };
};
@Global()
@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: pinoConfig(),
      },
    }),
  ],
})
export default class PinoModule {}
