import {
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { db, auth } from "./firebaseConfig.js";

const signupBtn = document.querySelector("#signupBtn");
signupBtn.addEventListener("click", signUp);

async function signUp(e) {
  try {
    e.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!fullName || !phoneNumber || !email || !password) {
      alert("required field are missing");
      return;
    }
    
    const userAuth = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userAuth.user.uid);
    const uid = userAuth.user.uid;
    const userObj = {
      fullName,
      phoneNumber,
      email,
      accountActivate: true,
      uid,
    };
    const userRef = doc(db, "users", uid);
    const userDB = await setDoc(userRef, userObj);
    console.log({ userDB });

    location.replace("login.html")
    // OR 
    // window.location.href = "http://127.0.0.1:5500/login.html";
  } catch (error) {
    console.log("error", error.message);
    alert(error.message);
  }
}
