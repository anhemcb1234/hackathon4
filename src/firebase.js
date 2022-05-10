// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnF9Ll1v1cmLt_ihHydugPtVm-TsOIMHM",
    authDomain: "doan-9970c.firebaseapp.com",
    projectId: "doan-9970c",
    storageBucket: "doan-9970c.appspot.com",
    messagingSenderId: "158237160949",
    appId: "1:158237160949:web:08e13007f041d3fd379cbc"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firestore database //lưu trữ CSDL
const db = getFirestore(app);
const auth = getAuth(app);
export {db, auth};
