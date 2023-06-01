import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

export class User {
  id: number;
  username: string;
  role: string;
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
