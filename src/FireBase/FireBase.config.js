// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCVgwkiDAC0rLOFLm5IJxgF5hEOsfPT434",
    authDomain: "moha-milon-project-963e8.firebaseapp.com",
    projectId: "moha-milon-project-963e8",
    storageBucket: "moha-milon-project-963e8.firebasestorage.app",
    messagingSenderId: "669608015365",
    appId: "1:669608015365:web:aa3fa37d72be4f821e0e6c"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
