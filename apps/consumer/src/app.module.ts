import { Module } from '@nestjs/common';
import { ConsumerModule } from './modules/consumer.module';

@Module({
  imports: [ConsumerModule],
})
export class AppModule {}
