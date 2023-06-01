import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article, CreateArticleDto } from './article.dto';
import { PoliciesGuard } from '../../guards/policy.guard';
import { Can, Cannot, CheckPolicies } from '../../decorators/casl.decorator';
import { Action } from '../casl/action';
@UseGuards(PoliciesGuard)
@CheckPolicies((ability) => ability.can(Action.Read, Article))
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Can(Action.Create, Article)
  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }
  @Can(Action.Read, Article)
  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: Article) {
    return this.articleService.update(+id, updateArticleDto);
  }
  @Cannot(Action.Delete, Article)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
}
