import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBcRuadd7cuL0DhfW4sHFAs1h_v_lblDEs",
  authDomain: "compass-sales-46574.firebaseapp.com",
  databaseURL: "https://compass-sales-46574-default-rtdb.firebaseio.com",
  projectId: "compass-sales-46574",
  storageBucket: "compass-sales-46574.appspot.com",
  messagingSenderId: "66630954290",
  appId: "1:66630954290:web:83276af1b7eee4a4fa3b2b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);