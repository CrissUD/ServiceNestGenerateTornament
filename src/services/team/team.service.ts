import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class TeamService {

    constructor(private firebaseService : FirebaseService){ }
    
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async createTeam (team, idTournament) {
        return await this.firebaseService.pushElement(team, `/json/${idTournament}/teams`);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async getTeams (idTournament) {
        return await this.firebaseService.getElement(`/json/${idTournament}/teams`);
    }
}
