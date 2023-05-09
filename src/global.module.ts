import { Global, Module } from '@nestjs/common';
import { Logger } from '@nestjs/common';
@Global()
@Module({
  providers: [Logger],
  exports: [Logger],
})
export default class GlobalModule {}
