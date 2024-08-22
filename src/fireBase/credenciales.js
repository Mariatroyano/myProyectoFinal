import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB6mD3icq9fcQRzN7T6Ke5WftPJIz4PXnM",
  authDomain: "proyecto-final-8f2f4.firebaseapp.com",
  projectId: "proyecto-final-8f2f4",
  storageBucket: "proyecto-final-8f2f4.appspot.com",
  messagingSenderId: "318990388650",
  appId: "1:318990388650:web:42dc76ff395120edfbafd3",
  measurementId: "G-MCV2T3WHT0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const providerGogle = new GoogleAuthProvider();
export { auth, providerGogle, app };
