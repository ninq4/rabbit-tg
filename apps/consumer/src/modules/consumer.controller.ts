import { Controller, Inject } from '@nestjs/common';
import { EventPattern, Payload, ClientProxy } from '@nestjs/microservices';
import { BaseEvent } from 'libs/common/event';

@Controller()
export class ConsumerController {
  constructor(@Inject('TELEGRAM') private telegramClient: ClientProxy) {}

  @EventPattern('event.created')
  async handle(@Payload() event: BaseEvent<{ message: string }>) {
    await Promise.resolve(
      this.telegramClient.emit('send.telegram', {
        message: event.payload.message,
      }),
    );
  }
}
