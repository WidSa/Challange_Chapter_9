// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMOpFEyAmmBi-qLI1lGV4wEJh7Ew0yoVU",
  authDomain: "the-game-fca98.firebaseapp.com",
  projectId: "the-game-fca98",
  storageBucket: "the-game-fca98.appspot.com",
  messagingSenderId: "1046866122853",
  appId: "1:1046866122853:web:063d28cba5a46fcad98e8c",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

export {googleProvider}
export {auth}
export default app
