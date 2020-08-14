import { Injectable, HttpService } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { Match } from '../../models/Match';
import { Team } from '../../models/Team';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3005/api/team/';
@Injectable()
export class MatchesService {
    
    private keyTeams: string[];
    private nameTeams: string[] = [];

    constructor(private http: HttpService, private firebaseService : FirebaseService){

    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async createMatches (idTournament) {
        let match;
        this.findTeam(`${URL}${idTournament}`)
        .subscribe(data => { 
            this.keyTeams = Object.keys(data.data);
            Object.values(data.data).map((team: Team) => {
                this.nameTeams.push(team.name);
            });
            // Generando partidos
            for(let i = 0 ; i < this.keyTeams.length; i++) {
                for(let j = i + 1; j < this.keyTeams.length; j++) {
                    match = new Match();
                    match.id_team1 = this.keyTeams[i];
                    match.id_team2 = this.keyTeams[j];
                    match.name_team1 = this.nameTeams[i];
                    match.name_team2 = this.nameTeams[j];
                    match.isPlayed = false;
                    match.goals_team1 = 0;
                    match.goals_team2 = 0;
                    this.createMatch(idTournament, match);
                }
            }
        });
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    findTeam(url): Observable<any> {
        return this.http.get(url);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async createMatch (idTournament, match) {
        return this.firebaseService.pushElement(match, `/json/${idTournament}/matches`).then(data => data)
        .then(data => data)
        .catch(error => console.log(error));
    }
}
