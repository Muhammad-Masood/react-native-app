import { Image, StyleSheet, View, ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Appbar, Button, PaperProvider, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import WorkerCard from "@/components/workers/WorkerCard";
import JobCard from "@/components/jobs/JobCard";
import { JobDetailsType, WorkerDetailsType } from "@/constants/Types";
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const { user } = useAuth();

  const [recentJobs, setRecentJobs] = useState<JobDetailsType[]>([]);
  const [topWorkers, setTopWorkers] = useState<WorkerDetailsType[]>([]);

  useEffect(() => {
    const jobsRef = collection(db, "jobs");
    const workersRef = collection(db, "workers");

    // 🔥 Listen for real-time job updates
    const unsubscribeJobs = onSnapshot(jobsRef, (snapshot) => {
      const fetchedJobs = snapshot.docs.map((doc) => ({
        ...(doc.data() as JobDetailsType),
      }));
      setRecentJobs(fetchedJobs.slice(0, 3)); // Show only the 3 most recent jobs
    });

    // 🔥 Listen for real-time worker updates
    const unsubscribeWorkers = onSnapshot(workersRef, (snapshot) => {
      const fetchedWorkers = snapshot.docs.map((doc) => ({
        ...(doc.data() as WorkerDetailsType),
      }));
      setTopWorkers(fetchedWorkers.slice(0, 3)); // Show only the 3 top-rated workers
    });

    return () => {
      unsubscribeJobs();
      unsubscribeWorkers();
    }; // Cleanup listeners on unmount
  }, []);

  return (
    <PaperProvider>
      <ThemedView style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Skilled Hands" />
          {!user && (
            <Button
              icon="account-plus"
              mode="contained"
              onPress={() => navigation.navigate("profile")}
              style={styles.authButton}
            >
              Register
            </Button>
          )}
        </Appbar.Header>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <ThemedView style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Listed Jobs</Text>
            {recentJobs.map((job, index) => (
              <JobCard key={index} jobCardData={job} />
            ))}
            <Button mode="text" onPress={() => navigation.navigate("jobs")}>
              See More
            </Button>
          </ThemedView>

          {/* Top Rated Workers */}
          <ThemedView style={styles.section}>
            <Text style={styles.sectionTitle}>Top Rated Workers</Text>
            {topWorkers.map((worker, index) => (
              <WorkerCard key={index} workerCardData={worker} />
            ))}
            <Button mode="text" onPress={() => navigation.navigate("workers")}>
              See More
            </Button>
          </ThemedView>
        </ScrollView>
      </ThemedView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  authButton: {
    marginRight: 10,
  },
  scrollContent: {
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
