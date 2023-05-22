import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

export class UserDto {
  id: number;
  username: string;
  age: number;
}

enum Roles {
  admin = 'admin',
  user = 'user',
}

export class CreateUserDto {
  @IsString()
  username: string;
  @IsInt()
  age: number;
  @IsOptional()
  @IsEnum(Roles)
  role?: string;
}
