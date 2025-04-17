import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBlFSp21kdfOQukNqRDvYY21bPu-Ywuqrg",
  authDomain: "backend-fd453.firebaseapp.com",
  projectId: "backend-fd453",
  storageBucket: "backend-fd453.firebasestorage.app",
  messagingSenderId: "952774550822",
  appId: "1:952774550822:web:b0561b5dc50a12d7924de7",
  measurementId: "G-RQZ8GYW21J",
  databaseURL: "https://backend-fd453-default-rtdb.firebaseio.com/",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const database = getDatabase(app);
export const provider = new GoogleAuthProvider();
auth.languageCode = "en";
export { app };
