import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import UserService from './user.service';
import { CreateUser } from './user.dto';
@Controller('user')
export default class UserController {
  constructor(
    private readonly user: UserService,
    private readonly logger: Logger,
  ) {
    this.logger.log('user controller init');
  }
  @Post()
  create(@Body() user: CreateUser) {
    return this.user.createUser(user);
  }
  @Get()
  findAll() {
    this.logger.log('start....');
    return this.user.findAll();
  }
}
