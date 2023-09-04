import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCIvuwT_L5iFwXG8w4fnkm7c6P2wKUTzBI",
  authDomain: "sop-auth.firebaseapp.com",
  projectId: "sop-auth",
  storageBucket: "sop-auth.appspot.com",
  messagingSenderId: "746523592915",
  appId: "1:746523592915:web:d5f6d290c65e132f9bec26"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)





