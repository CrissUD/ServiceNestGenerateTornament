import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { TeamService } from '../team/team.service';

@Injectable()
export class MatchesService {
    
    constructor(private firebaseService : FirebaseService, private teamService : TeamService){}

    async createMatches (idTournament) {
        this.teamService.getTeams(idTournament)
        .then(data => console.log(data));
        // return await this.firebaseService.pushElement(team, `/json/${idTournament}/matches`);
    }
}
