import { Module } from '@nestjs/common';
import { GameModule } from './modules/game/game.module';
import { EventModule } from './modules/event/event.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsModule } from './modules/events/events.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://UPlusTest:UT_abuk800@upluscluster-rz1dt.mongodb.net/games?retryWrites=true', { useNewUrlParser: true }),
    GameModule,
    EventsModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
