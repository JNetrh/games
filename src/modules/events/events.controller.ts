
import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDTO } from './dto/create-event.dto';

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) { }

    // Retrieve events list
    @Get('/')
    async getAllEvents() {
        const events = await this.eventsService.getAllEvents();
        return events;
    }
}

