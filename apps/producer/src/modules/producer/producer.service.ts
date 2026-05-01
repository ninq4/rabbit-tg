import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BaseEvent } from 'libs/common/event';
import { firstValueFrom, Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { PayloadDto } from './dto/payload.dto';

@Injectable()
export class ProducerService {
  private readonly logger = new Logger(ProducerService.name);

  constructor(@Inject('RMQ') private client: ClientProxy) {}

  async emitEvent(payload: PayloadDto) {
    const event: BaseEvent<PayloadDto> = {
      id: uuid(),
      type: 'event.created',
      timestamp: Date.now(),
      payload: payload,
    };

    await this.retry(() => this.client.emit(event.type, event));
  }

  private async retry<T>(fn: () => Observable<T>, retries = 3): Promise<T> {
    try {
      return await firstValueFrom(fn());
    } catch (e) {
      if (retries === 0) throw e;

      this.logger.warn(`Retrying... ${retries}`);
      await new Promise((r) => setTimeout(r, 1000));

      return this.retry(fn, retries - 1);
    }
  }
}
