import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Avatar, Text, Button, Card } from "react-native-paper";
import { RouteProp, useRoute } from "@react-navigation/native";
import { WorkerDetailsType } from "@/constants/Types";

type WorkerDetailsParams = {
  WorkerDetailsData: WorkerDetailsType;
};

export default function WorkerDetails() {
  const route = useRoute<RouteProp<WorkerDetailsParams, "WorkerDetailsData">>();
  console.log("worker details route data: ", route);
  const { id, name, skill, rating, bio, profileImage, contact, reviews } =
    route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar.Image
          size={100}
          source={{ uri: profileImage }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.skill}>{skill}</Text>
        <Text style={styles.rating}>⭐ {rating.toFixed(1)} / 5</Text>
        <Button
          mode="contained"
          onPress={() => console.log(`Contacting ${contact}`)}
          style={styles.contactButton}
        >
          Contact
        </Button>
      </View>

      <Card style={styles.card}>
        <Card.Title title="About" />
        <Card.Content>
          <Text style={styles.bio}>{bio}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Reviews" />
        <Card.Content>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <View key={review.id} style={styles.review}>
                <Text style={styles.reviewer}>{review.reviewer}</Text>
                <Text>{review.comment}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noReviews}>No reviews available.</Text>
          )}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    // color: "#333",
  },
  skill: {
    fontSize: 16,
    // color: "#555",
    marginTop: 4,
  },
  rating: {
    fontSize: 16,
    // color: "#777",
    marginTop: 4,
  },
  contactButton: {
    marginTop: 10,
  },
  card: {
    marginBottom: 20,
    borderRadius: 8,
    elevation: 2,
  },
  bio: {
    fontSize: 14,
    // color: "#555",
  },
  review: {
    rowGap: 4,
    marginBottom: 10,
  },
  reviewer: {
    fontSize: 14,
    fontWeight: "bold",
    // color: "#333",
  },
  noReviews: {
    fontSize: 14,
    // color: "#777",
  },
});
