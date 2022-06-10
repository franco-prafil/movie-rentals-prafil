// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzlX-PZYPRhLK3euPaUb6lLj5kR4eNqvI",
  authDomain: "movie-rentals-f5d22.firebaseapp.com",
  projectId: "movie-rentals-f5d22",
  storageBucket: "movie-rentals-f5d22.appspot.com",
  messagingSenderId: "552330012249",
  appId: "1:552330012249:web:ef9fe1ae5a5b42475c7348"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize FireStore
const db = getFirestore (app)

export default db
