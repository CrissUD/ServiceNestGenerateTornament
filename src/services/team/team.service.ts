import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class TeamService {

    constructor(private firebaseService : FirebaseService){

    }
    
    async createTeam (team, idTournament) {
        return await this.firebaseService.pushElement(team, `/json/${idTournament}/teams`);
    }
}
