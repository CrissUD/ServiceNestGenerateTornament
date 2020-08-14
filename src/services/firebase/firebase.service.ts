import { Injectable } from '@nestjs/common';

import * as firebase from "firebase-admin";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require("../../../soccerCup.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://soccercup-b6117.firebaseio.com"
});

@Injectable()
export class FirebaseService {

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async pushElement (torneo, url) {
        return await firebase.database().ref(url).push(torneo);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async getElement(url){
        const snapshot = await firebase.database().ref(url).once('value');
        return snapshot.val(); 
    }
}
