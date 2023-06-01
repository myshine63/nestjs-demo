import { PureAbility } from '@casl/ability/dist/types';
import { PrismaQuery, Subjects } from '@casl/prisma';
import { User, Article } from '@prisma/client';

interface IPolicyHandler {
  handle(ability: PureAbility): boolean;
}

type PolicyHandlerCallback = (ability: PureAbility) => boolean;

export type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;
export type ArticleAbility = PureAbility<
  [
    string,
    Subjects<{
      User: User;
      Article: Article;
    }>,
  ],
  PrismaQuery
>;
