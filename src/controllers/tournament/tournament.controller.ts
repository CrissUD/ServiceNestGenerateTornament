import { Controller, Post, Body } from '@nestjs/common';
import { TournamentService } from 'src/services/tournament/tournament.service';

@Controller('tournament')
export class TournamentController {

    constructor(private readonly tournamentService: TournamentService) {

    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Post()
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    createTournament(@Body() tournament) {
        return this.tournamentService.createTournament(tournament)
            .then(data => data)
            .catch(error => error);
    }
}
