import React, { createContext, useContext, useState } from "react";
import { auth } from "@/firebaseConfig";
import firebase from "firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

type AuthContextType = {
  user: firebase.User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  const login = async (email: string, password: string) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    setUser(user);
  };

  const logout = async () => {
    await signOut(auth);
    // await auth.signOut();
    setUser(null);
  };

  const signUp = async (email: string, password: string) => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
