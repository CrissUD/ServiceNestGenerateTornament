import { Controller, Post, Param } from '@nestjs/common';
import { MatchesService } from 'src/services/matches/matches.service';

@Controller('matches')
export class MatchesController {

    constructor(private readonly matchesService: MatchesService){

    }
    
    @Post('/:idTournament')
    createTeam(@Param('idTournament') idTournament) {
        return this.matchesService.createMatches(idTournament)
            .then(data => data)
            .catch(error => error);
    }
}
