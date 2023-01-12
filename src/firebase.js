// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAIqvrnnAw7W6mm0o0IZN3j7JEImx4R5Q",
  authDomain: "sug-ictuniversity.firebaseapp.com",
  projectId: "sug-ictuniversity",
  storageBucket: "sug-ictuniversity.appspot.com",
  messagingSenderId: "864843921245",
  appId: "1:864843921245:web:9486d9b5ebefd06a391ab4",
  measurementId: "G-67QB1WFWTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth= getAuth(app);
const provider = new GoogleAuthProvider();
//const storage = getStorage(app);

const signInWithGoogle = () => {
  signInWithPopup(auth,provider)
   .then((result) => {
    const name=result.user.displayName;
    const email= result.user.email;
    const pic = result.user.photoUrl;

    localStorage.setItem('@userName', name);
    localStorage.setItem('@userEmail', email);
    localStorage.setItem('@userPhoto', pic);
     alert("successfully signed in");
     console.log(result)
     window.location.href="/Profile";
})
  .catch((err)=>alert("Ooops!  an error occured, try again please... "));
}

export {signInWithGoogle};