import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProducerService } from './producer.service';
import { PayloadDto } from './dto/payload.dto';
import { PayloadPresenter } from './presenters/payload.presenter';

@ApiTags('gateway')
@Controller('events')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}
  @Post('/')
  @ApiOkResponse({
    type: PayloadPresenter,
  })
  create(@Body() body: PayloadDto) {
    return this.producerService.emitEvent(body);
  }
  @Get('/health')
  healthcheck() {
    return 'OK';
  }
}
