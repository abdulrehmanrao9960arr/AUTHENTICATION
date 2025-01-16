// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD69sX75mm-1wvWq1gN9YNm21KrSmfC2FE",
  authDomain: "first-e99e9.firebaseapp.com",
  projectId: "first-e99e9",
  storageBucket: "first-e99e9.firebasestorage.app",
  messagingSenderId: "767812875218",
  appId: "1:767812875218:web:a4c714606245b9412e4e0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);