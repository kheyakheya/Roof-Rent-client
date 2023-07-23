// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrJNUS1vAf4xeHGPyOjkXEmGUsV9HwkNU",
  authDomain: "roof-rent-client.firebaseapp.com",
  projectId: "roof-rent-client",
  storageBucket: "roof-rent-client.appspot.com",
  messagingSenderId: "916424661298",
  appId: "1:916424661298:web:0ff7382cab792a75091f2b"
};
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId,
//   }

// Initialize Firebase
export const app = initializeApp(firebaseConfig);