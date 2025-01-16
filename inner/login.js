const email = document.querySelector(".email")
const password = document.querySelector(".password")
const form = document.querySelector(".form")

form.addEventListener("submit",event =>{
    event.preventDefault();
    console.log(email.value);
    console.log(password.value);
    
})