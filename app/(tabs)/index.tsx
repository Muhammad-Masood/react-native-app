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
import { JobDetailsType } from "@/constants/Types";

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  const recentJobs: JobDetailsType[] = [
    {
      id: 1,
      title: "Fix Broken Light",
      location: "Downtown",
      budget: "$50",
      contact: "123-456-7890",
      postedOn: "2023-08-01",
      postedBy: "John Doe",
      description: "Need to fix a broken light in my apartment.",
    },
    {
      id: 2,
      title: "Unclog Kitchen Sink",
      location: "Suburbs",
      budget: "$40",
      contact: "987-654-3210",
      postedOn: "2023-08-02",
      postedBy: "Jane Smith",
      description: "Need to unclog the kitchen sink in my home.",
    },
    {
      id: 3,
      title: "Assemble Bookshelf",
      location: "Uptown",
      budget: "$30",
      contact: "555-555-5555",
      postedOn: "2023-08-03",
      postedBy: "Tom Brown",
      description: "Need to assemble a bookshelf for my living room.",
    },
  ];

  const topWorkers = [
    {
      id: 1,
      name: "John Doe",
      skill: "Electrician",
      rating: 4.9,
      bio: "Experienced electrician with 5 years of experience.",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      contact: "123-456-7890",
      reviews: [{ id: 1, reviewer: "John Doe", comment: "Great job!" }],
    },
    {
      id: 2,
      name: "Jane Smith",
      skill: "Plumber",
      rating: 4.8,
      bio: "Skilled plumber with 3 years of experience.",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      contact: "987-654-3210",
      reviews: [{ id: 2, reviewer: "Jane Smith", comment: "Excellent work!" }],
    },
    {
      id: 3,
      name: "Tom Brown",
      skill: "Carpenter",
      rating: 4.7,
      bio: "Expert carpenter with 2 years of experience.",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
      contact: "555-555-5555",
      reviews: [
        { id: 3, reviewer: "Tom Brown", comment: "Top-notch craftsmanship!" },
      ],
    },
  ];

  return (
    <PaperProvider>
      <ThemedView style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Skilled Hands" />
          <Button
            icon="account-plus"
            mode="contained"
            onPress={() => navigation.navigate("profile")}
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
