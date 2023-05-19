import { Body, Controller, Get, Post } from '@nestjs/common';
import UserService from './user.service';
import { CreateUser } from './user.dto';
import Public from '../../decorators/public.decorator';
@Controller('user')
// @UseGuards(JwtGuard)
export default class UserController {
  constructor(private readonly user: UserService) {}
  @Post()
  create(@Body() user: CreateUser) {
    return this.user.createUser(user);
  }
  @Public()
  @Get()
  findAll() {
    return this.user.findAll();
  }
}
