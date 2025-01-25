import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChWTXZSTA7Dpu0UxzqSgPTCB_5h2kNk70",
  authDomain: "react-native-57703.firebaseapp.com",
  projectId: "react-native-57703",
  storageBucket: "react-native-57703.firebasestorage.app",
  messagingSenderId: "896519864461",
  appId: "1:896519864461:web:d90ad99afd448320dde2c4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);