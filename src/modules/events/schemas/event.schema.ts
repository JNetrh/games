import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
    created_at: {
        type: Date,
        default: Date.now,
    },
});