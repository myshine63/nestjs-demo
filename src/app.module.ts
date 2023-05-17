import { Module } from '@nestjs/common';
import { ProfileModule } from './modules/profile/profile.module';
import { LogModule } from './modules/log/log.module';
import UserModule from './modules/user/user.module';
import PrismaModule from './modules/prisma/prisma.module';
import GlobalModule from './global.module';
import AuthModule from './modules/auth/auth.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    GlobalModule,
    ProfileModule,
    LogModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
