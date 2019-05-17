import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
    event_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});