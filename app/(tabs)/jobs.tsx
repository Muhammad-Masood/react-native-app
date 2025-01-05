import JobListScreen from "@/components/jobs/JobListScreen";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
import { Appbar, PaperProvider, Text } from "react-native-paper";

export default function JobsList() {
  return (
    <PaperProvider>
      <ThemedView style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Jobs" />
        </Appbar.Header>
      </ThemedView>
      <JobListScreen />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
