
import { Controller, Get, UseGuards} from '@nestjs/common';
import { AuthGuard} from '@nestjs/passport';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) { }

    // Retrieve events list
    @Get('/')
    @UseGuards(AuthGuard('bearer'))
    async getAllEvents() {
        try {
            const events = await this.eventsService.getMondayEvents();
            return events;
        } catch (e) {
          throw Error(e);
        }
    }
}
