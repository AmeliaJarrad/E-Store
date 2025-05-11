// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyND0lQRWZ9vLcZJPBag5gXINl2-ikYdI",
  authDomain: "my-first-firebase-39476.firebaseapp.com",
  projectId: "my-first-firebase-39476",
  storageBucket: "my-first-firebase-39476.firebasestorage.app",
  messagingSenderId: "546866250314",
  appId: "1:546866250314:web:6584b79d993a06b43a1cb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)