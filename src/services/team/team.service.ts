import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { Team } from 'src/models/Team';

let teamObject: Team;
@Injectable()
export class TeamService {

    constructor(private firebaseService : FirebaseService){ }
    
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async createTeam (team, idTournament) {
        teamObject = team;
        teamObject.gamesPlayed = 0;
        teamObject.wonMatches = 0;
        teamObject.lostMatches = 0;
        teamObject.tiedMatches = 0;
        teamObject.totalPoints = 0;
        teamObject.goalsScored = 0;
        teamObject.goalsConceded = 0;
        teamObject.goalDifference = 0;
        return await this.firebaseService.pushElement(teamObject, `/json/${idTournament}/teams`);
    }
}
