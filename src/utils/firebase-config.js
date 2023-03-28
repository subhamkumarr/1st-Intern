
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrpQk-t2vvUDl-o4aWWa399MCNZpf7gIY",
  authDomain: "intern-assignment-8497a.firebaseapp.com",
  projectId: "intern-assignment-8497a",
  storageBucket: "intern-assignment-8497a.appspot.com",
  messagingSenderId: "987083103116",
  appId: "1:987083103116:web:46631de8a079029696d4a9",
  measurementId: "G-JKRVK8MSKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);