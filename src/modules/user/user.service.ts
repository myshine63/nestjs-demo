import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export default class UserService {
  constructor(private readonly prisma: PrismaService) {}
  createUser(user: CreateUserDto) {
    return this.prisma.user.create({
      data: user,
    });
  }
  findAll() {
    return this.prisma.user.findMany();
  }

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({ where: { username } });
  }
}
