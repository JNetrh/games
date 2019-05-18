import { Module } from '@nestjs/common';
import { GameModule } from './modules/game/game.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsModule } from './modules/events/events.module';
import { AuthModule } from './modules/auth/auth.module';

// TODO: change <password> for a password
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://UPlusTest:<password>@upluscluster-rz1dt.mongodb.net/games?retryWrites=true', { useNewUrlParser: true }),
    GameModule,
    EventsModule,
    AuthModule,
],
  controllers: [],
  providers: [AuthModule],
})
export class AppModule {}
