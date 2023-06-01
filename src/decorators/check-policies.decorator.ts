import { PolicyHandler } from '../modules/casl/type';
import { SetMetadata } from '@nestjs/common';
import { Action } from '../modules/casl/action';
import { ConditionsMatcher, SubjectType } from '@casl/ability';
export enum CheckPolicy {
  checkPolicyKey = 'CHECK_POLICY_KEY',
  can = 'CHECK_POLICY_CAN',
  cannot = 'check_policy_cannot',
}
export const CheckPolicies = (...handlers: PolicyHandler[]) =>
  SetMetadata(CheckPolicy.checkPolicyKey, handlers);

export const Can = (action: Action, subject: SubjectType, conditions?: any) => {
  // SetMetadata(CheckPolicy.can,ability:Prisma);
};
