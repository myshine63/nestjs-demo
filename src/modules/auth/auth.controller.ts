import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import AuthService from './auth.service';
import LocalGuard from '../../guards/local.guard';
import Public from 'src/decorators/public.decorator';

@Controller('auth')
export default class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @UseGuards(LocalGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
