import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAfU5PqjkIvGGvmcbG9dPmeTSsGNHrgtNM",
  authDomain: "setek-e1efb.firebaseapp.com",
  projectId: "setek-e1efb",
  storageBucket: "setek-e1efb.appspot.com",
  messagingSenderId: "934703602702",
  appId: "1:934703602702:web:a6c62959b9207e68ba705f",
  measurementId: "G-NXNXPJMJPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
