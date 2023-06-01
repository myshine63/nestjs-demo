import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ArticleAbility, PolicyHandler } from '../modules/casl/type';
import CaslService from '../modules/casl/casl.service';
import { CHECK_POLICY } from '../decorators/casl.decorator';

@Injectable()
export class PoliciesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityService: CaslService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const policyHandlers = this.reflector.get<PolicyHandler[]>(
      CHECK_POLICY.HANDLER,
      context.getClass(),
    );
    const canHandlers = this.reflector.get(
      CHECK_POLICY.CAN,
      context.getHandler(),
    );
    const cannotHandlers = this.reflector.get(
      CHECK_POLICY.CANNOT,
      context.getHandler(),
    );
    let flag = true;
    if (!policyHandlers && !canHandlers && !cannotHandlers) {
      return true;
    }
    const ability = this.caslAbilityService.forRoot();
    if (flag && policyHandlers) {
      flag = policyHandlers.every((handler) => {
        if (typeof handler === 'function') {
          return handler(ability);
        }
        return handler.handle(ability);
      });
    }
    if (flag && canHandlers) {
      flag = canHandlers(ability);
    }
    if (flag && cannotHandlers) {
      flag = !cannotHandlers(ability);
    }
    return flag;
  }

  private execPolicyHandler(handler: PolicyHandler, ability: any) {
    if (typeof handler === 'function') {
      return handler(ability);
    }
    return handler.handle(ability);
  }
}
