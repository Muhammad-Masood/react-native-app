import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card, Text, IconButton } from "react-native-paper";
import { WorkerCardType } from "@/constants/Types";

const WorkerCard = ({ workerCardData }: { workerCardData: WorkerCardType }) => {
  const { id, name, skill, rating } = workerCardData;

  return (
    <Card key={id} style={styles.card}>
      <View style={styles.cardContent}>
        <Avatar.Image
          size={60}
          source={require('@/assets/images/user.jpg')}
          style={styles.avatar}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.skill}>{skill}</Text>
          <Text style={styles.rating}>⭐ {rating.toFixed(1)} / 5</Text>
        </View>
        <IconButton
          icon="chevron-right"
          size={24}
          onPress={() => console.log(`View details for ${name}`)}
          style={styles.icon}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
    overflow: "hidden",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  avatar: {
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    // color: "#333",
  },
  skill: {
    fontSize: 14,
    // color: "#555",
    marginTop: 4,
  },
  rating: {
    fontSize: 14,
    // color: "#777",
    marginTop: 4,
  },
  icon: {
    alignSelf: "center",
  },
});

export default WorkerCard;
