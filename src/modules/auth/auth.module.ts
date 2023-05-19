import { Module } from '@nestjs/common';
import AuthService from './auth.service';
import { PassportModule } from '@nestjs/passport';
import LocalStrategy from './local.strategy';
import UserModule from '../user/user.module';
import AuthController from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { jwtConfig } from '../../constants/jwt-config';

@Module({
  controllers: [AuthController],
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions: {
        expiresIn: jwtConfig.expire,
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export default class AuthModule {}
