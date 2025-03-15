import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DetailsScreenNavigationProp } from "../navigation/navigationTypes";
import Card from "../components/Card";
import Button from "../components/Button";

interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Card title="Details Information">
        <Text style={styles.text}>
          This is a TypeScript-powered React Native app with navigation and
          custom hooks!
        </Text>
        <Text style={styles.subtitle}>Features:</Text>
        <Text style={styles.listItem}>• TypeScript integration</Text>
        <Text style={styles.listItem}>• React Navigation</Text>
        <Text style={styles.listItem}>• Reanimated animations</Text>
        <Text style={styles.listItem}>• Custom hooks</Text>
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
  text: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 10,
  },
  backButton: {
    backgroundColor: "#FF5722",
    marginTop: 20,
  },
});

export default DetailsScreen;
