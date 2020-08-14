import { Controller, Post, Body, Param } from '@nestjs/common';
import { TeamService } from 'src/services/team/team.service';
import { get } from 'http';

@Controller('team')
export class TeamController {
    constructor(private teamService: TeamService){

    }

    @Post('/:idTournament')
    createTeam(@Body() team, @Param('idTournament') idTournament) {
        return this.teamService.createTeam(team, idTournament)
            .then(data => data)
            .catch(error => error);
    }

}
