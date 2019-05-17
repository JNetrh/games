import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// import { CreatePostDto } from './dto/create-post.dto';
import { EventService } from './event.service';
import { IEvent } from './interfaces/event.interface';

@Controller('event')
export class EventController {
    constructor(
        private readonly eventService: EventService,
    ) { }

   /*  @Post()
    async create(@Body() createPostDto: CreatePostDto) {
        this.eventService.create(createPostDto);
    } */

    @Get('/')
    async findAll(): Promise<IEvent[]> {
        return this.eventService.getAllEvents();
    }
}