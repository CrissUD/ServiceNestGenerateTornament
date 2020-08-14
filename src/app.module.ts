import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentController } from './controllers/tournament/tournament.controller';
import { TournamentService } from './services/tournament/tournament.service';
import { FirebaseService } from './services/firebase/firebase.service';
import { TeamController } from './controllers/team/team.controller';
import { TeamService } from './services/team/team.service';

@Module({
  imports: [],
  controllers: [AppController,TournamentController, TeamController],
  providers: [AppService, TournamentService, FirebaseService, TeamService],
})
export class AppModule {}
