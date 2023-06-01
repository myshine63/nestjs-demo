import { Module } from '@nestjs/common';
import { ProfileModule } from './modules/profile/profile.module';
import { LogModule } from './modules/log/log.module';
import UserModule from './modules/user/user.module';
import PrismaModule from './modules/prisma/prisma.module';
import GlobalModule from './global.module';
import AuthModule from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { ArticleModule } from './modules/article/article.module';
import JwtGuard from './guards/jwt.guard';
import CaslModule from './modules/casl/casl.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    GlobalModule,
    ProfileModule,
    LogModule,
    AuthModule,
    ArticleModule,
    CaslModule,
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
