import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import UserService from './user.service';
import { CreateUserDto } from './user.dto';
import Public from '../../decorators/public.decorator';
import BaseGuard from '../../guards/base.guard';
@Controller('user')
// @UseGuards(JwtGuard)
export default class UserController {
  constructor(private readonly user: UserService) {}
  @Post()
  @UseGuards(BaseGuard)
  create(@Body() user: CreateUserDto) {
    return this.user.createUser(user);
  }
  @Public()
  @Get()
  findAll() {
    return this.user.findAll();
  }
}
