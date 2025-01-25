import SignUp from "@/components/auth/Signup";
import React from "react";
import { PaperProvider } from "react-native-paper";

export default function SignUpScreen() {
  return (
    <PaperProvider>
      {/* <ThemedView style={styles.container}> */}
      <SignUp />
      {/* </ThemedView> */}
    </PaperProvider>
  );
}
