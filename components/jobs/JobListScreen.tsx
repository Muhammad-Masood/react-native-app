import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Card, Text, PaperProvider } from "react-native-paper";
import JobCard from "./JobCard";

export default function JobListScreen() {
  const jobs = [
    { id: 1, title: "Fix Broken Light", location: "Downtown", pay: "$50" },
    { id: 2, title: "Unclog Kitchen Sink", location: "Suburbs", pay: "$40" },
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
