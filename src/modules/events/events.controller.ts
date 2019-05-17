
import { Controller, Get} from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) { }

    // Retrieve events list
    @Get('/')
    async getAllEvents() {
        try {
            const events = await this.eventsService.getAllEvents();
            return events;
        } catch (e) {
          throw Error(e);
        }
    }
}
