import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "react-native-57703.firebaseapp.com",
  projectId: "react-native-57703",
  storageBucket: "react-native-57703.firebasestorage.app",
  messagingSenderId: "896519864461",
  appId: "1:896519864461:web:d90ad99afd448320dde2c4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const storage = getStorage(app);
