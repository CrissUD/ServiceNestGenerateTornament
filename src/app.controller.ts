import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { FirebaseService } from './services/firebase/firebase.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly firebaseService: FirebaseService) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Get()
  getHello() {
    return "hello World";
  }
}
