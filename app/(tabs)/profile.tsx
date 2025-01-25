import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Appbar, PaperProvider } from "react-native-paper";
import LoginScreen from "@/components/auth/Login";
import { useAuth } from "@/contexts/AuthContext";
import Profile from "@/components/auth/Profile";

export default function ProfileScreen() {
  const { user } = useAuth();
  return (
    <PaperProvider>
      <ThemedView style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Profile" />
        </Appbar.Header>
      </ThemedView>
      {user ? <Profile user={user} /> : <LoginScreen />}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
