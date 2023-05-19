import { SetMetadata } from '@nestjs/common';
export const jwtConfig = {
  secret: 'hello tom',
  expire: '1y',
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
