import { auth } from "./firebaseconfigfile.js";
import {signInWithEmailAndPassword ,  GoogleAuthProvider , signInWithPopup  } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

const email = document.querySelector(".email")
const password = document.querySelector(".password")
const form = document.querySelector(".form")
const google = document.querySelector(".google")

form.addEventListener("submit",event =>{
    event.preventDefault();
    console.log(email.value); 
    console.log(password.value);

signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
window.location ="./home.html"
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);    
  });


    
})
google.addEventListener("click" , ()=>{

    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);   
  }).catch((error) => {
    const errorMessage = error.message;
console.log(errorMessage);

});
})
