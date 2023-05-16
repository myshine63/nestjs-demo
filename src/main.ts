import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import HttpExceptionFilter from './filters/httpException.filter';
import createWinstonInstance from './utils/createWinstonInstance';
import { PrismaService } from './modules/prisma/prisma.service';

async function bootstrap() {
  // winston使用
  const app = await NestFactory.create(AppModule, {
    logger: createWinstonInstance(),
  });
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}

bootstrap();
