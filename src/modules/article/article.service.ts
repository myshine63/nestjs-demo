import { Injectable } from '@nestjs/common';
import { Article, CreateArticleDto } from './article.dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createArticleDto: CreateArticleDto) {
    const createdAt = BigInt(Date.now());
    const data = {
      ...createArticleDto,
      createdAt,
    };
    const res = await this.prisma.article.create({
      data,
    });
    return res;
  }

  findAll() {
    return this.prisma.article.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: Article) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return this.prisma.article.delete({
      where: { id },
    });
  }
}
