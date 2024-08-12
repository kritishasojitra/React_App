// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAempWL4-plIYcWZdRPFKvELF8RaiOXfTc",
  authDomain: "product-add-with-admin.firebaseapp.com",
  projectId: "product-add-with-admin",
  storageBucket: "product-add-with-admin.appspot.com",
  messagingSenderId: "273747799017",
  appId: "1:273747799017:web:4b49f53cb476b1630e3978"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)