import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  ActivityIndicator,
  Appbar,
  FAB,
  PaperProvider,
  Text,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useAuth } from "@/contexts/AuthContext";
import JobListScreen from "@/components/jobs/JobListScreen";
import { JobDetailsType } from "@/constants/Types";

export default function JobsList() {
  const { user } = useAuth();
  const navigation = useNavigation<any>();
  const [jobs, setJobs] = useState<JobDetailsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, "jobs"), orderBy("postedOn", "desc")); // Fetch jobs in descending order

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const fetchedJobs: JobDetailsType[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as JobDetailsType[];
        setJobs(fetchedJobs);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching jobs:", error);
        setError("Failed to fetch jobs. Please try again later.");
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Cleanup listener when component unmounts
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text>Loading Jobs...</Text>
      </View>
    );
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Jobs" />
        </Appbar.Header>

        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : jobs.length === 0 ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>No jobs available</Text>
          </View>
        ) : (
          <JobListScreen jobs={jobs} />
        )}

        <FAB
          icon="plus"
          label="Post Job"
          style={styles.fab}
          onPress={() => navigation.navigate(user ? "postJob" : "profile")}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 20,
  },
  errorText: {
    color: "#721c24",
    fontSize: 16,
    fontWeight: "bold",
  },
});
