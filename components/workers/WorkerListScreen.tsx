import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Card, Text, PaperProvider } from "react-native-paper";
import WorkerCard from "./WorkerCard";

export default function WorkerListScreen() {
  const workers = [
    { id: 1, name: "John Doe", skill: "Electrician", rating: 4.9 },
    { id: 2, name: "Jane Smith", skill: "Plumber", rating: 4.8 },
    // Add more worker data
  ];

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {workers.map((worker) => (
          <WorkerCard key={worker.id} workerCardData={worker} />
        ))}
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
});
