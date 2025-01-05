import { JobCardType } from "@/constants/Types";
import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

const JobCard = ({jobCardData}:{jobCardData:JobCardType}) => {
  return (
    <Card key={jobCardData.id} style={styles.card}>
      <Card.Content>
        <Text style={styles.cardTitle}>{jobCardData.title}</Text>
        <Text>{jobCardData.location}</Text>
        <Text>{jobCardData.pay}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
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
});

export default JobCard;
