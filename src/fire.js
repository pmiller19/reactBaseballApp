// Your web app's Firebase configuration
import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCfloakG9hhQWjP36A4Jp3Y-I0guiq2ln0",
    authDomain: "unlbaseballstats.firebaseapp.com",
    databaseURL: "https://unlbaseballstats.firebaseio.com",
    projectId: "unlbaseballstats",
    storageBucket: "unlbaseballstats.appspot.com",
    messagingSenderId: "1019400233086",
    appId: "1:1019400233086:web:4e8f1d24a96a20184ff82f",
    measurementId: "G-ECY1SJ8EXN"
};

var fire = firebase.initializeApp(firebaseConfig);
export default fire;