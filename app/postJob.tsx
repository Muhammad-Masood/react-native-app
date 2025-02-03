import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import {
  Appbar,
  Button,
  TextInput,
  Snackbar,
  PaperProvider,
} from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import getFirestore from "@react-native-firebase/firestore";
import { ThemedView } from "@/components/ThemedView";
import { useAuth } from "@/contexts/AuthContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { JobDetailsType } from "@/constants/Types";

export default function PostJobScreen() {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const jobData: JobDetailsType = {
        ...data,
        postedOn: new Date().toISOString(),
        postedBy: user!.uid,
      };
      console.log(jobData);
      const docRef = await addDoc(collection(db, "jobs"), jobData);
      setSnackbarVisible(true);
      navigation.goBack();
      // reset();
      // setTimeout(() => navigation.goBack(), 1500);
    } catch (error) {
      console.error("Error posting job:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PaperProvider>
      <ThemedView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          {/* <Appbar.Header>
            <Appbar.BackAction onPress={() => navigation.goBack()} />
            <Appbar.Content title="Post a Job" />
          </Appbar.Header> */}

          <View style={styles.form}>
            <Controller
              control={control}
              name="title"
              rules={{ required: "Job title is required" }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Job Title"
                  value={value}
                  onChangeText={onChange}
                  error={!!errors.title}
                  mode="outlined"
                />
              )}
            />

            <Controller
              control={control}
              name="location"
              rules={{ required: "Location is required" }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Location"
                  value={value}
                  onChangeText={onChange}
                  error={!!errors.location}
                  mode="outlined"
                />
              )}
            />

            <Controller
              control={control}
              name="budget"
              rules={{ required: "Budget is required" }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Budget"
                  value={value}
                  onChangeText={onChange}
                  keyboardType="numeric"
                  error={!!errors.budget}
                  mode="outlined"
                />
              )}
            />

            <Controller
              control={control}
              name="contact"
              rules={{ required: "Contact information is required" }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Contact"
                  value={value}
                  onChangeText={onChange}
                  keyboardType="phone-pad"
                  error={!!errors.contact}
                  mode="outlined"
                />
              )}
            />

            <Controller
              control={control}
              name="description"
              rules={{ required: "Description is required" }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Job Description"
                  value={value}
                  onChangeText={onChange}
                  multiline
                  numberOfLines={4}
                  error={!!errors.description}
                  mode="outlined"
                />
              )}
            />

            <Button
              mode="contained"
              onPress={handleSubmit(onSubmit)}
              loading={loading}
              disabled={loading}
              style={styles.submitButton}
            >
              {loading ? "Posting..." : "Post Job"}
            </Button>
          </View>

          {/* Snackbar for Success Message */}
          <Snackbar
            visible={snackbarVisible}
            onDismiss={() => setSnackbarVisible(false)}
          >
            Job posted successfully!
          </Snackbar>
        </KeyboardAvoidingView>
      </ThemedView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 20,
    gap: 10,
  },
  submitButton: {
    marginTop: 10,
  },
});
