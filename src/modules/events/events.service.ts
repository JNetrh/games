import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IEvent } from './interfaces/event.interface';
import { CreateEventDTO } from './dto/create-event.dto';

@Injectable()
export class EventsService {
    constructor(@InjectModel('searchEvents') private readonly eventsModel: Model<IEvent>) { }
    // fetch all events
    async getAllEvents(): Promise<IEvent[]> {
        const events = await this.eventsModel.find().exec();
        return events;
    }
    async createEvent(createEventDTO: CreateEventDTO): Promise<IEvent> {
        const newEvent = new this.eventsModel(createEventDTO);
        return await newEvent.save();
    }
}
