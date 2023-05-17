import { Injectable } from '@nestjs/common';
import UserService from '../user/user.service';

@Injectable()
export default class AuthService {
  constructor(private readonly userService: UserService) {}
  async validateUser(username: string, pass: string) {
    const user = await this.userService.findByUsername(username);
    console.log(user);
    if (user && user.password === pass) {
      const { password, ...rest } = user;
      return rest;
    }
    return null;
  }
}
