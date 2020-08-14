import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class TournamentService {

    constructor(private firebaseService : FirebaseService){

    }

    async createTournament (torneo) {
        return await this.firebaseService.pushElement(torneo, "/json");
    }
}
