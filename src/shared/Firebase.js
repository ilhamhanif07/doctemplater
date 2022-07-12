// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const ConfigFirebase = {
  apiKey: "AIzaSyAQw21JarrfuOu1YK6fQspup8EpIuDtJH0",
  authDomain: "mostrans-storage.firebaseapp.com",
  databaseURL: "https://mostrans-storage.firebaseio.com",
  projectId: "mostrans-storage",
  storageBucket: "mostrans-storage.appspot.com",
  messagingSenderId: "108292050379",
  appId: "1:108292050379:web:581945489f5733cabcba4e",
};
// Initialize Firebase
const firebase = initializeApp(ConfigFirebase);
export default firebase;
