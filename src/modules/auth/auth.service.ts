import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export default class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(username: string, pass: string) {
    const user = await this.prismaService.user.findUnique({
      where: { username },
    });
    if (user && user.password === pass) {
      const { password, ...rest } = user;
      return rest;
    }
    return null;
  }
  async login(user) {
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
