import { Body, Controller, Get, Post } from '@nestjs/common';
import UserService from './user.service';
import { CreateUser } from './user.dto';
@Controller('user')
export default class UserController {
  constructor(private readonly user: UserService) {}
  @Post()
  create(@Body() user: CreateUser) {
    return this.user.createUser(user);
  }
  @Get()
  findAll() {
    return this.user.findAll();
  }
}
