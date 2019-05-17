import { Connection } from 'mongoose';

import { EventSchema } from './event.schema';
import { EVENT_MODEL_PROVIDER, DB_PROVIDER } from '../../constants';

export const eventProviders = [
    {
        provide: EVENT_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('searchEvents', EventSchema),
        inject: [DB_PROVIDER],
    },
];