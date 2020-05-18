import Rebase from 're-base';
import firebase from 'firebase';

const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBnKFgo50SGYgYe2UqhLhqpc2rTfITeOz8",
    authDomain: "my-recipe-3bac2.firebaseapp.com",
    databaseURL: "https://my-recipe-3bac2.firebaseio.com"
    // projectId: "my-recipe-3bac2",
    // storageBucket: "my-recipe-3bac2.appspot.com",
    // messagingSenderId: "1022528667393",
    // appId: "1:1022528667393:web:5790a1b13d094b0376a500"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }
export default base;