import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { QUEUES } from 'libs/common/constant';
import { AppModule } from './app.module';

async function bootstrap() {
  const rmqUrl = process.env.RMQ_URL;

  if (!rmqUrl) throw new Error('RMQ_URL is missing');

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [rmqUrl],
      queue: QUEUES.TELEGRAM,
      queueOptions: {
        durable: true,
      },
    },
  });

  await app.listen();
}
bootstrap();
