import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsnIyXIAxLtGY4djBITLaaMqemu9YfdjA",
  authDomain: "reactchat-a58e4.firebaseapp.com",
  projectId: "reactchat-a58e4",
  storageBucket: "reactchat-a58e4.appspot.com",
  messagingSenderId: "448798618084",
  appId: "1:448798618084:web:7dbcbc20db2a885ae417f1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()