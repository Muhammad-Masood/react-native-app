import { JobDetailsType } from "@/constants/Types";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

const JobCard = ({jobCardData}:{jobCardData:JobDetailsType}) => {
  const navigation = useNavigation<any>();
  return (
    <Card key={jobCardData.id} style={styles.card} onPress={() => navigation.navigate("jobDetails", jobCardData)}>
      <Card.Content>
        <Text style={styles.cardTitle}>{jobCardData.title}</Text>
        <Text>{jobCardData.location}</Text>
        <Text>{jobCardData.budget}</Text>
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
