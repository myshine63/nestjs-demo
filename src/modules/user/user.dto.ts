import { IsInt, IsString } from 'class-validator';

export class UserDto {
  id: number;
  username: string;
  age: number;
}

export class CreateUser {
  @IsString()
  username: string;
  @IsInt()
  age: number;
}
