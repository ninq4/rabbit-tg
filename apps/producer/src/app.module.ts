import { Module } from '@nestjs/common';
import { ProducerModule } from './modules/producer/producer.module';
@Module({
  imports: [ProducerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
