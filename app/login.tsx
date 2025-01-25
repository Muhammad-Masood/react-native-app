import Login from "@/components/auth/Login";
import SignUp from "@/components/auth/Signup";
import React from "react";
import { PaperProvider } from "react-native-paper";

export default function LoginScreen() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}
