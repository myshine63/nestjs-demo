import { IsString } from 'class-validator';

export class LoginInfo {
  @IsString()
  username: string;
  @IsString()
  password: string;
}
