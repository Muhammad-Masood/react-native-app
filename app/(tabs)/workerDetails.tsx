import JobListScreen from "@/components/jobs/JobListScreen";
import { ThemedView } from "@/components/ThemedView";
import WorkerDetails from "@/components/workers/WorkerDetails";
import { StyleSheet } from "react-native";
import { Appbar, PaperProvider, Text } from "react-native-paper";

export default function workerDetailsScreen() {
  return (
    <PaperProvider>
      <ThemedView style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Worker Details" />
        </Appbar.Header>
      </ThemedView>
      <WorkerDetails  />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
