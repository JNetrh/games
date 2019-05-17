// import { Model } from 'mongoose';
// import { Injectable, Inject } from '@nestjs/common';

// import { IEvent } from './interfaces/event.interface';
// import { CreatePostDto } from './dto/create-post.dto';
// import { EVENT_MODEL_PROVIDER } from '../../constants';


import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IEvent } from './interfaces/event.interface';
import { CreateEventDTO } from './dto/create-event.dto';

@Injectable()
export class EventService {
    constructor(@InjectModel('searchEvents') private readonly eventModel: Model<IEvent>) { }
    // fetch all events
    async getAllEvents(): Promise<IEvent[]> {
        const events = await this.eventModel.find().exec();
        return events;
    }

    /*async create(createPostDto: CreatePostDto): Promise<IEvent> {
        const createdPost = new this.eventModel(createPostDto);
        return await createdPost.save();
    }
    */
    /* public async findAll(): Promise<IEvent[]> {
        const res = await this.eventModel.find().exec();
        console.log(this.eventModel);
        return res;
    } */
}