import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("./assets/worktrack image.jpg")} 
        />
      </View>

      {/* Title Section */}
      <Text style={styles.title}>
        <Text style={styles.work}>Work</Text>
        <Text style={styles.track}>Track</Text>
      </Text>
      <Text style={styles.subtitle}>Simplifying Field Work</Text>

      {/* Button Section */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: "cover",
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "white",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    lineHeight: 60,
  },
  work: {
    color: "#000", // Black color for "Work"
  },
  track: {
    color: "#6C6EF5", // Purple color for "Track"
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#555",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 28,
  },
  button: {
    backgroundColor: "#6C6EF5",
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
