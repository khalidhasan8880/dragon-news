// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_APIKEY);
const firebaseConfig = {
  apiKey: "AIzaSyD74yf0Q1dy_B2GT414ysHnTdO_734FtYs",
  authDomain: "dragon-news-823d8.firebaseapp.com",
  projectId: "dragon-news-823d8",
  storageBucket: "dragon-news-823d8.appspot.com",
  messagingSenderId: "436544709332",
  appId: "1:436544709332:web:6ec5091c715819de89d141"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app