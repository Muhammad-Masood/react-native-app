import { Image, StyleSheet, Platform, View, ScrollView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Appbar, Button, Card, PaperProvider, Text } from "react-native-paper";
import { Navigator } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import WorkerCard from "@/components/workers/WorkerCard";
import JobCard from "@/components/jobs/JobCard";

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  const recentJobs = [
    { id: 1, title: "Fix Broken Light", location: "Downtown", pay: "$50" },
    { id: 2, title: "Unclog Kitchen Sink", location: "Suburbs", pay: "$40" },
    { id: 3, title: "Assemble Bookshelf", location: "Uptown", pay: "$30" },
  ];

  const topWorkers = [
    { id: 1, name: "John Doe", skill: "Electrician", rating: 4.9 },
    { id: 2, name: "Jane Smith", skill: "Plumber", rating: 4.8 },
    { id: 3, name: "Tom Brown", skill: "Carpenter", rating: 4.7 },
  ];

  return (
    <PaperProvider>
      <ThemedView style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Skilled Hands" />
          <Button
            icon="account-plus"
            mode="contained"
            onPress={() => console.log("Register or Login")}
            style={styles.authButton}
          >
            Register
          </Button>
        </Appbar.Header>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <ThemedView style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Listed Jobs</Text>
            {recentJobs.map((job) => (
              <JobCard key={job.id} jobCardData={job} />
            ))}
            <Button mode="text" onPress={() => navigation.navigate("jobs")}>
              See More
            </Button>
          </ThemedView>

          {/* Top Rated Workers */}
          <ThemedView style={styles.section}>
            <Text style={styles.sectionTitle}>Top Rated Workers</Text>
            {topWorkers.map((worker) => (
              <WorkerCard key={worker.id} workerCardData={worker} />
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
    // backgroundColor: "transparent",
  },
  cardContainer: {
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
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
