import { Document } from 'mongoose';

export interface IEvent extends Document {
    readonly event_id: string;
    readonly created_at: Date;
}