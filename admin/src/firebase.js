import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADK6tMVc9PmKGBTwtxB7ROjMExfhGV9G4",
  authDomain: "glassential-2a936.firebaseapp.com",
  projectId: "glassential-2a936",
  storageBucket: "glassential-2a936.appspot.com",
  messagingSenderId: "859007414702",
  appId: "1:859007414702:web:81e751426ec5ca78c9583f",
  measurementId: "G-2684HPKKZ1"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
