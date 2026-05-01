import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TelegramService } from './telegram.service';

@Controller()
export class TelegramController {
  constructor(private readonly tg: TelegramService) {}

  @MessagePattern('send.telegram')
  send(@Payload() data: { message: string }) {
    return this.tg.send(data.message);
  }
}
