import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Card, Text, PaperProvider } from "react-native-paper";
import JobCard from "./JobCard";
import { JobDetailsType } from "@/constants/Types";

export default function JobListScreen() {
  const jobs: JobDetailsType[] = [
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

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {jobs.map((job) => (
          <JobCard key={job.id} jobCardData={job} />
        ))}
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
});
