import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentController } from './controllers/tournament/tournament.controller';
import { TournamentService } from './services/tournament/tournament.service';
import { FirebaseService } from './services/firebase/firebase.service';

@Module({
  imports: [],
  controllers: [AppController,TournamentController],
  providers: [AppService, TournamentService, FirebaseService],
})
export class AppModule {}
