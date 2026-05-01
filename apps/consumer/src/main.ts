import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { QUEUES } from 'libs/common/constant';

async function bootstrap() {
  const rmqUrl = process.env.RMQ_URL;

  if (!rmqUrl) throw new Error('RMQ_URL is missing');
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [rmqUrl],
      queue: QUEUES.EVENTS,
      queueOptions: {
        durable: true,
      },
      noAck: false,
    },
  });

  await app.listen();
}
bootstrap();
