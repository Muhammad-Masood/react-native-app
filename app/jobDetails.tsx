import JobDetails from "@/components/jobs/JobDetails";
import JobListScreen from "@/components/jobs/JobListScreen";
import { ThemedView } from "@/components/ThemedView";
import WorkerDetails from "@/components/workers/WorkerDetails";
import { StyleSheet } from "react-native";
import { Appbar, PaperProvider, Text } from "react-native-paper";

export default function JobDetailsScreen() {
  return (
    <PaperProvider>
      {/* <ThemedView style={styles.container}> */}
        <JobDetails />
      {/* </ThemedView> */}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
