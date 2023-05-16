import { Global, Module, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Global()
@Module({
  imports: [],
  providers: [ConfigService, Logger],
  exports: [ConfigService, Logger],
})
export default class GlobalModule {}
