
import {getApp, getApps,initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig={
apiKey: "AIzaSyBzc6d7X16FQxR49vB6HhBIfwV8K2akuxY",
  authDomain: "ai-mock-interview-projec-52413.firebaseapp.com",
  projectId: "ai-mock-interview-projec-52413",
  storageBucket: "ai-mock-interview-projec-52413.firebasestorage.app",
  messagingSenderId: "987138488428",
  appId: "1:987138488428:web:3de886d03ca9a7738f0049",
  measurementId: "G-516D9ZMDH8"
};

const app=getApps.length>0?getApp():initializeApp(firebaseConfig);
const db=getFirestore(app);
export{db};