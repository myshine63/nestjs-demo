import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { PrismaService } from '../prisma/prisma.service';
const userSelectOption = { username: true, age: true, role: true };
@Injectable()
export default class UserService {
  constructor(private readonly prisma: PrismaService) {}
  createUser(user: CreateUserDto) {
    return this.prisma.user.create({
      data: user,
      select: userSelectOption,
    });
  }
  findAll() {
    return this.prisma.user.findMany({
      select: userSelectOption,
    });
  }

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
      select: userSelectOption,
    });
  }
}
