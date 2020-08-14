import { Controller, Post, Body } from '@nestjs/common';
import { TournamentService } from 'src/services/tournament/tournament.service';

@Controller('tournament')
export class TournamentController {

    constructor(private readonly tournamentService: TournamentService) {

    }
    @Post()
    createTournament(@Body() tournament) {
        return this.tournamentService.createTournament(tournament);
    }
}
