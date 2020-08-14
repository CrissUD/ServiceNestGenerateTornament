import { Controller, Get } from '@nestjs/common';
import { FirebaseService } from 'src/services/firebase/firebase.service';

@Controller('tournament')
export class TournamentController {

    constructor(private readonly firebaseService: FirebaseService){
        
    }

    @Get("api/test")
    getHello() {
        return this.firebaseService.getInfo()
        .then(data => data)
        .catch(error => error);
    }
}
