import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyAYY_UHlpbMFg5jw7ZHw1H_6JK-hJR09fI',
    authDomain: 'restaurant-app-1207.firebaseapp.com',
    databaseURL: 'https://restaurant-app-1207.firebaseio.com',
    projectId: 'restaurant-app-1207',
    storageBucket: 'restaurant-app-1207.appspot.com',
    messagingSenderId: '169375181033',
    appId: '1:169375181033:web:a1f818692e525cfc57a878',
});

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth, provider };
