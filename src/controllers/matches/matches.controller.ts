import { Controller, Post, Param } from '@nestjs/common';
import { MatchesService } from 'src/services/matches/matches.service';

@Controller('matches')
export class MatchesController {

    constructor(private readonly matchesService: MatchesService){

    }
    
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Post('/:idTournament')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    createTeam(@Param('idTournament') idTournament) {
        return this.matchesService.createMatches(idTournament)
            .then(data => data)
            .catch(error => error);
    }
}
