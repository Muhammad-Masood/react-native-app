import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Card, Text, PaperProvider } from "react-native-paper";
import WorkerCard from "./WorkerCard";

export default function WorkerListScreen() {
  const workers = [
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
