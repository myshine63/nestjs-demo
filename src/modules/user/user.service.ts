import { Injectable } from '@nestjs/common';
import { CreateUser } from './user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export default class UserService {
  constructor(private readonly prisma: PrismaService) {}
  createUser(user: CreateUser) {
    return this.prisma.user.create({
      data: user,
    });
  }
  findAll() {
    return this.prisma.user.findMany();
  }
}
