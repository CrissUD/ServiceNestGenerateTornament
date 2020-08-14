import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { FirebaseService } from './services/firebase/firebase.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly firebaseService: FirebaseService) {}

  @Get()
  getHello() {
    return this.firebaseService.getInfo()
      .then(data => data)
      .catch(error => error);
  }
}
