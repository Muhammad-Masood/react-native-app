import { ThemedView } from "@/components/ThemedView";
import WorkerListScreen from "@/components/workers/WorkerListScreen";
import { db } from "@/firebaseConfig";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  ActivityIndicator,
  Appbar,
  FAB,
  PaperProvider,
  Text,
} from "react-native-paper";
import { WorkerDetailsType } from "@/constants/Types";

export default function WorkersList() {
  const { user } = useAuth();
  const navigation = useNavigation<any>();
  const [workers, setWorkers] = useState<WorkerDetailsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const workersRef = collection(db, "workers");

    // 🔥 Listen for real-time updates
    const unsubscribe = onSnapshot(
      workersRef,
      (snapshot) => {
        const fetchedWorkers: WorkerDetailsType[] = snapshot.docs.map(
          (doc) => ({ ...(doc.data() as WorkerDetailsType) })
        );

        console.log(fetchedWorkers);
        setWorkers(fetchedWorkers);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching workers:", error);
        setError("Failed to fetch workers. Please try again later.");
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text>Loading Workers...</Text>
      </View>
    );
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Workers" />
        </Appbar.Header>
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : workers.length === 0 ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>No workers available</Text>
          </View>
        ) : (
          <WorkerListScreen workers={workers} />
        )}

        <FAB
          icon="plus"
          label="Become Worker"
          style={styles.fab}
          onPress={() => navigation.navigate(user ? "addWorker" : "profile")}
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
