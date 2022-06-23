// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPERtJoeOjIitsSjfLImtX0-mz2Rj2zJU",
  authDomain: "fir-auth-760ee.firebaseapp.com",
  projectId: "fir-auth-760ee",
  storageBucket: "fir-auth-760ee.appspot.com",
  messagingSenderId: "538397498848",
  appId: "1:538397498848:web:423993ccdaa6365326df85"
};

// Initialize Firebase

    let app;

    if(firebase.app.length == 0){

        app = firebase.initializeApp(firebaseConfig);


    }else{

        app = firebase.app()


    }

const auth = firebase.auth()

export {auth}