import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '../modules/prisma/prisma.service';
import { Roles } from '../constants/roles';
@Injectable()
export default class BaseGuard implements CanActivate {
  constructor(
    protected readonly reflector: Reflector,
    protected readonly prismaService: PrismaService,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    return req.user.role === Roles.admin;
  }
}
