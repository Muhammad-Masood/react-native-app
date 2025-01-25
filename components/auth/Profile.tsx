import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { useAuth } from "@/contexts/AuthContext";
import firebase from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function Profile({ user }: { user: firebase.User }) {
  const { logout } = useAuth();
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user.displayName}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Button
        mode="contained"
        onPress={async () => {
          await logout();
          console.log("logged out successfully!");
          navigation.navigate("profile");
        }}
        style={styles.button}
      >
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});
