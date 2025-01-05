import { ThemedView } from "@/components/ThemedView";
import WorkerListScreen from "@/components/workers/WorkerListScreen";
import { StyleSheet } from "react-native";
import { Appbar, PaperProvider, Text } from "react-native-paper";

export default function WorkersList() {
  return (
    <PaperProvider>
      <ThemedView style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Workers" />
        </Appbar.Header>
      </ThemedView>
      <WorkerListScreen />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
