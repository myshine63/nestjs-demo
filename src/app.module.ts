import { Module } from '@nestjs/common';
import { ProfileModule } from './modules/profile/profile.module';
import { LogModule } from './modules/log/log.module';
import UserModule from './modules/user/user.module';
import PrismaModule from './modules/prisma/prisma.module';
import GlobalModule from './global.module';
import AuthModule from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import JwtGuard from './guards/jwt.guard';

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
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
})
export class AppModule {}
