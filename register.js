import { auth } from "./firebaseconfigfile.js";
import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector(".form");
const p = document.querySelector(".err");

form.addEventListener("submit" , event=>{
    event.preventDefault(); 
    p.innerHTML=``
console.log(email.value);
console.log(password.value);

createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
   p.innerhtml = errorMessage
  });
})