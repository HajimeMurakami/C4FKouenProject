// Config file
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA8RoG2t_5JTqPiB3qfNk7Z85IuSkwYeGM",
    databaseURL: "https://code4fukuokakouenapp.firebaseio.com",
    projectId: "code4fukuokakouenapp",
    storageBucket: "gs://code4fukuokakouenapp.appspot.com",
    appId: "1:634290705297:ios:673baf10794af79c290030"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();
