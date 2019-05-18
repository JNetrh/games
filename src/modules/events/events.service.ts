import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IEvent } from './interfaces/event.interface';
import { CreateEventDTO } from './dto/create-event.dto';

@Injectable()
export class EventsService {
    constructor(@InjectModel('searchEvents') private readonly eventsModel: Model<IEvent>) { }
    /**
     * NOT IN USE
     * returns all event in the database
     */
    async getAllEvents(): Promise<IEvent[]> {
        const events = await this.eventsModel.find().exec();
        return events;
    }
    /**
     * Fetch all events, fiters them and returns all on Mondays
     */
    async getMondayEvents(): Promise<IEvent[]> {
        const allEvents = await this.eventsModel.find().exec();
        const events = allEvents.filter(e => {
            const date = new Date(e.created_at);
            return date.getDay() === 1;
        });
        return events;
    }
    /**
     * writes an event to the database
     * @param createEventDTO event to be written
     */
    async createEvent(createEventDTO: CreateEventDTO): Promise<IEvent> {
        const newEvent = new this.eventsModel(createEventDTO);
        return await newEvent.save();
    }
}
