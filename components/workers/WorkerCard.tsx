import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card, Text, IconButton } from "react-native-paper";
import { WorkerDetailsType } from "@/constants/Types";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const WorkerCard = ({
  workerCardData,
}: {
  workerCardData: WorkerDetailsType;
}) => {
  const { id, name, skill, rating, profileImage } = workerCardData;
  const navigation = useNavigation<any>();

  return (
    <Card
      key={id}
      style={styles.card}
      onPress={() => navigation.navigate("workerDetails", workerCardData)}
    >
      <View style={styles.cardContent}>
        <Avatar.Image
          size={60}
          source={{ uri: profileImage }}
          style={styles.avatar}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.skill}>{skill}</Text>
          <Text style={styles.rating}>
            {rating === 0 ? "Recently joined" : `⭐ ${rating.toFixed(1)} / 5`}
          </Text>
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
