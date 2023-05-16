import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Logger,
} from '@nestjs/common';
import UserService from './user.service';
import { CreateUser } from './user.dto';
@Controller('user')
export default class UserController {
  constructor(
    private readonly user: UserService,
    private readonly logger: Logger,
  ) {
    this.logger.error('user controller init');
  }
  @Post()
  create(@Body() user: CreateUser) {
    return this.user.createUser(user);
  }
  @Get()
  findAll() {
    return this.user.findAll();
  }
}
