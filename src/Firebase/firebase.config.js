// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd2I3JvX7OwpN7thaqVivkt31-BLbawfw",
  authDomain: "healthcare-940fb.firebaseapp.com",
  projectId: "healthcare-940fb",
  storageBucket: "healthcare-940fb.appspot.com",
  messagingSenderId: "58798111389",
  appId: "1:58798111389:web:553eaf80fca51838573274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app