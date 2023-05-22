import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '../modules/prisma/prisma.service';
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
    console.log(req.user);
    return req.user.role === 'admin';
  }
}
