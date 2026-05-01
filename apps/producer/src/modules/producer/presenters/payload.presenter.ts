import { BaseEvent } from 'libs/common/event';

export class PayloadPresenter {
  message: string;
  eventId: string;

  constructor(event: BaseEvent<{ message: string }>) {
    this.message = event.payload.message;
    this.eventId = event.id;
  }
}
