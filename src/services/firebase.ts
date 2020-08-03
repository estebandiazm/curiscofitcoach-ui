import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyANQGBCzl_aZG3tZPh091R_9uBK7iFbZAU",
    authDomain: "curiscofitcoach-b95d8.firebaseapp.com",
    databaseURL: "https://curiscofitcoach-b95d8.firebaseio.com",
    projectId: "curiscofitcoach-b95d8",
    storageBucket: "curiscofitcoach-b95d8.appspot.com",
    messagingSenderId: "689357614667",
    appId: "1:689357614667:web:604a15551f9c3f78c3e7ce",
    measurementId: "G-C0JVYV3F87"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const db = firebase.firestore();