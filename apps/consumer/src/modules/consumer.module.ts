import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConsumerController } from './consumer.controller';
import { QUEUES } from 'libs/common/constant';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TELEGRAM',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RMQ_URL || ''],
          queue: QUEUES.TELEGRAM,
          queueOptions: { durable: true },
        },
      },
    ]),
  ],
  controllers: [ConsumerController],
})
export class ConsumerModule {}
