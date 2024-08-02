
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa3VIZXO_CBgEnsxc8F9l1YjuodKERwSw",
  authDomain: "proyecto-final-907bf.firebaseapp.com",
  projectId: "proyecto-final-907bf",
  storageBucket: "proyecto-final-907bf.appspot.com",
  messagingSenderId: "818792491014",
  appId: "1:818792491014:web:71d62304bf4a71bd36bb87",
  measurementId: "G-8XTRBZ1Y6J"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const providerGogle = new GoogleAuthProvider();
export {auth,providerGogle,app} 