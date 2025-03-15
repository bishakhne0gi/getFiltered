import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import {
  ProfileScreenNavigationProp,
  ProfileScreenRouteProp,
} from "../navigation/navigationTypes";
import Card from "../components/Card";
import Button from "../components/Button";
import { useAppState } from "../hooks";

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
  const { userId } = route.params;
  const [loading, setLoading] = useState(true);
  const appState = useAppState();

  useEffect(() => {
    // Simulate loading user data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Card title="User Profile">
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Text style={styles.label}>User ID:</Text>
            <Text style={styles.value}>{userId}</Text>
            <Text style={styles.label}>App State:</Text>
            <Text style={styles.value}>{appState}</Text>
          </>
        )}
      </Card>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
        buttonStyle={styles.backButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: "#FF5722",
    marginTop: 20,
  },
});

export default ProfileScreen;
