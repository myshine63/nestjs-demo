import { Module } from '@nestjs/common';
import UserModule from './modules/user/user.module';
import PrismaModule from './modules/prisma/prisma.module';
import GlobalModule from './global.module';

@Module({
  imports: [UserModule, PrismaModule, GlobalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
