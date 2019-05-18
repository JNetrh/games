import { Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';
import { EventsService } from '../events/events.service';

@Controller('games')
export class GameController {

  constructor(
    private readonly gameService: GameService,
    private readonly eventsService: EventsService,
  ) {}

  /**
   * calls a method that creates event in Database
   * return all games according to the IGame interface
   */
  @Get('/')
  async getGameInfo() {
    try {
      await this.eventsService.createEvent({created_at: new Date()});
      return await this.gameService.getDeals();
    } catch (e) {
      throw Error(e);
    }
  }
}
