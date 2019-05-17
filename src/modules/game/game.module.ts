import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { EventsModule } from '../events/events.module';
import { EventsService } from '../events/events.service';

@Module({
  imports: [EventsModule],
  providers: [GameService, EventsService],
  controllers: [GameController],
})
export class GameModule {}
