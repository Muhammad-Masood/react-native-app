import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Card, Text, PaperProvider } from "react-native-paper";
import JobCard from "./JobCard";
import { JobDetailsType } from "@/constants/Types";

export default function JobListScreen({ jobs }: { jobs: JobDetailsType[] }) {
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
