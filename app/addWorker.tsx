import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Button, Text, ActivityIndicator } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { db } from "@/firebaseConfig";
import { useAuth } from "@/contexts/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function AddWorkerScreen() {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [bio, setBio] = useState("");
  const [contact, setContact] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (imageUri: string) => {
    setUploading(true);
    try {
      let formData = new FormData();
      formData.append("file", {
        uri: imageUri,
        name: "worker_profile.jpg",
        type: "image/jpeg",
      } as any);
      formData.append("upload_preset", "worker_profile_preset"); // Replace with your Cloudinary preset

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dywbs88dh/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log(data.secure_url);
      setProfileImage(data.secure_url);
    } catch (error) {
      console.error("Image upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (!name || !skill || !bio || !contact || !profileImage) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    try {
      await addDoc(collection(db, "workers"), {
        name,
        skill,
        bio,
        contact,
        profileImage,
        rating: 0,
        reviews: [],
      });
      alert("Worker profile added successfully!");
      navigation.goBack();
    } catch (error) {
      console.error("Error adding worker:", error);
      alert("Error adding worker. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Worker Profile</Text>

      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <Text style={styles.imageText}>Upload Image</Text>
        )}
      </TouchableOpacity>

      {uploading && <ActivityIndicator animating={true} />}

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Skill (e.g., Plumber, Electrician)"
        value={skill}
        onChangeText={setSkill}
      />
      <TextInput
        style={styles.input}
        placeholder="Bio"
        multiline
        value={bio}
        onChangeText={setBio}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={contact}
        onChangeText={setContact}
        keyboardType="phone-pad"
      />

      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  imagePicker: {
    alignSelf: "center",
    width: 100,
    height: 100,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageText: {
    color: "#888",
    fontSize: 14,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
});
