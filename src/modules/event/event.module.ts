import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { eventProviders } from './event.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  controllers: [EventController],
  providers: [EventService, ...eventProviders],
})
export class EventModule {}
