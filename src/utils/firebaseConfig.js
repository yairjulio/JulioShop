// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC38qjC4_3-AvGKt4CqEApVz1bTzqtgf4k",
    authDomain: "julioshop-76de1.firebaseapp.com",
    projectId: "julioshop-76de1",
    storageBucket: "julioshop-76de1.appspot.com",
    messagingSenderId: "245334591875",
    appId: "1:245334591875:web:b8c73d031d9f23ab5d0eb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;