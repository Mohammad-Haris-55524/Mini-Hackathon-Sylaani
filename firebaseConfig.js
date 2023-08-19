// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCejs1ErrI4y2enq7OW_atsPpF39h5r5sk",
    authDomain: "hackathon-blog-website.firebaseapp.com",
    databaseURL: "https://hackathon-blog-website-default-rtdb.firebaseio.com",
    projectId: "hackathon-blog-website",
    storageBucket: "hackathon-blog-website.appspot.com",
    messagingSenderId: "680784961921",
    appId: "1:680784961921:web:a0a6247b18b6f712e40880"
  };

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize AUTH
const auth = getAuth();


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);


export {
    db,
    auth,
    storage
}