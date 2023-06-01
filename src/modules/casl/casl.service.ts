import { Injectable } from '@nestjs/common';
import {
  AbilityBuilder,
  createMongoAbility,
  ExtractSubjectType,
} from '@casl/ability';
import { Subjects } from '@casl/prisma';
import { Action } from './action';
import { Article } from '../article/article.dto';

@Injectable()
export default class CaslService {
  forRoot() {
    const { can, cannot, build } = new AbilityBuilder(createMongoAbility);
    can(Action.Read, 'all');
    can(Action.Create, Article);
    cannot(Action.Delete, Article);
    const ability = build({
      // if you don't use permission specific types, you can cast return value to `SubjectType` type
      detectSubjectType: (object) =>
        object.constructor as ExtractSubjectType<Subjects<any>>,
    });
    return ability;
  }
}
