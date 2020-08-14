import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { TeamService } from '../team/team.service';
import { Match } from '../../models/Match';
import { match } from 'assert';

@Injectable()
export class MatchesService {
    
    private matches: Match[] = [];
    private keyTeams: string[];
    constructor(private firebaseService : FirebaseService, private teamService : TeamService){

    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async createMatches (idTournament) {
        let match;
        this.teamService.getTeams(idTournament)
        .then(data => { 
            this.keyTeams = Object.keys(data);
            for(let i = 0 ; i < this.keyTeams.length; i++) {
                for(let j = i + 1; j < this.keyTeams.length; j++) {
                    match = new Match();
                    match.id_team1 = this.keyTeams[i];
                    match.id_team2 = this.keyTeams[j];
                    match.isPlayed = false;
                    match.goals_team1 = 0;
                    match.goals_team2 = 0;
                    console.log(match.id_team1, match.id_team2);
                    this.matches.push(match);
                }
            }
            console.log(this.matches);
            return this.firebaseService.pushElement(this.matches, `/json/${idTournament}/matches`).then(data => data);
        })
        .then(data => data)
        .catch(error => console.log(error));
        
    }
}
