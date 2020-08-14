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

    async pushElement (torneo, url) {
        return await firebase.database().ref(url).push(torneo);
    }

    async getElement(url){
        const snapshot = await firebase.database().ref(url).once('value');
        return snapshot.val(); 
    }
}
