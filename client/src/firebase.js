// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdd7fFSqt83UyX6da6aXPjtgsSbgarVuQ",
  authDomain: "googth-auth-blog.firebaseapp.com",
  projectId: "googth-auth-blog",
  storageBucket: "googth-auth-blog.appspot.com",
  messagingSenderId: "532226312835",
  appId: "1:532226312835:web:cd24dea6cb90dfdee6e9b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);