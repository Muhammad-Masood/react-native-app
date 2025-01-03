import { Image, StyleSheet, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Appbar } from "react-native-paper";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Skilled Hands" />
      </Appbar.Header>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
