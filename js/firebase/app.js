// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPVzCiH-p1Y_aGQJGE00i2jo4t7Xu6uXc",
    authDomain: "landing-page-stranger-things.firebaseapp.com",
    projectId: "landing-page-stranger-things",
    storageBucket: "landing-page-stranger-things.appspot.com",
    messagingSenderId: "72023776668",
    appId: "1:72023776668:web:090f6d483a333f06b5bc59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app