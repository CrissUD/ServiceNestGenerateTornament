import { Controller, Post, Body, Param } from '@nestjs/common';
import { TeamService } from 'src/services/team/team.service';

@Controller('team')
export class TeamController {
    constructor(private teamService: TeamService){

    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Post('/:idTournament')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    createTeam(@Body() team, @Param('idTournament') idTournament) {
        return this.teamService.createTeam(team, idTournament)
            .then(data => data)
            .catch(error => error);
    }

}
