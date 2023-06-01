import { IsInt, IsString } from 'class-validator';
export class Article {
  id: number;
  title: string;
  content: string;
  createdAt: number;
  userId: number;
}
export class CreateArticleDto {
  @IsString()
  title: string;
  @IsString()
  content: string;
  @IsInt()
  userId: number;
}
