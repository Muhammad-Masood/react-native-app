import React from "react";
import { StyleSheet, View, ScrollView, Linking } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import { RouteProp, useRoute } from "@react-navigation/native";
import { JobDetailsType } from "@/constants/Types";

type JobDetailsParams = {
  JobDetailsData: JobDetailsType;
};

export default function JobDetails() {
  const route = useRoute<RouteProp<JobDetailsParams, "JobDetailsData">>();
  const {
    id,
    title,
    description,
    postedBy,
    location,
    postedOn,
    budget,
    contact,
  } = route.params;

  const handleContactPress = () => {
    if (contact) {
      Linking.openURL(`tel:${contact}`).catch((err) =>
        console.error("Error opening dialer:", err)
      );
    } else {
      console.warn("No contact number available");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title title={title} />
        <Card.Content>
          <Text style={styles.label}>Posted By:</Text>
          <Text style={styles.text}>{postedBy}</Text>

          <Text style={styles.label}>Location:</Text>
          <Text style={styles.text}>{location}</Text>

          <Text style={styles.label}>Posted On:</Text>
          <Text style={styles.text}>{postedOn}</Text>

          <Text style={styles.label}>Budget:</Text>
          <Text style={styles.text}>{budget}</Text>

          <Text style={styles.label}>Description:</Text>
          <Text style={styles.text}>{description}</Text>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={handleContactPress}
        style={styles.contactButton}
      >
        Contact Poster
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 20,
    borderRadius: 8,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    // color: "#333",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    // color: "#555",
  },
  contactButton: {
    marginTop: 10,
  },
});
