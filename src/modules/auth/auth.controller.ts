import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import AuthService from './auth.service';
import LocalGuard from '../../guards/local.guard';

@Controller('auth')
export default class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
