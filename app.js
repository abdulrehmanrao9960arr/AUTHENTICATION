import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./firebaseconfigfile.js";
const logout = document.querySelector(".logout")

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
window.location ="./login.html"
    }
  });

  logout.addEventListener("click", ()=>{
signOut(auth).then(() => {
window.location ="./login.html"
}).catch((error) => {
alert(error)
});
  })
