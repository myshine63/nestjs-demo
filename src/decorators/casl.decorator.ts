import { SetMetadata } from '@nestjs/common';
import { PolicyHandler } from '../modules/casl/type';
import { Action } from '../modules/casl/action';
import { AnyMongoAbility, Subject } from '@casl/ability';

export enum CHECK_POLICY {
  HANDLER = 'HANDLER',
  CAN = 'CAN',
  CANNOT = 'CANNOT',
}
export const CheckPolicies = (...handlers: PolicyHandler[]) =>
  SetMetadata(CHECK_POLICY.HANDLER, handlers);
export const Can = (action: Action, subject: Subject, conditions?: any) =>
  SetMetadata(CHECK_POLICY.CAN, (ability: AnyMongoAbility) =>
    ability.can(action, subject, conditions),
  );
export const Cannot = (action: Action, subject: Subject, conditions?: any) =>
  SetMetadata(CHECK_POLICY.CANNOT, (ability: AnyMongoAbility) =>
    ability.cannot(action, subject, conditions),
  );
