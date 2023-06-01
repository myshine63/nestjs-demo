import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import HttpExceptionFilter from './filters/httpException.filter';
import createWinstonInstance from './utils/createWinstonInstance';
import { PrismaService } from './modules/prisma/prisma.service';
import { ValidationPipe } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
BigInt.prototype.toJSON = function () {
  return Number(this.toString());
};
async function bootstrap() {
  // winston使用
  const app = await NestFactory.create(AppModule, {
    logger: createWinstonInstance(),
  });
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

bootstrap();
