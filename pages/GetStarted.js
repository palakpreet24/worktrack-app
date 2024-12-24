import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Picture Section */}
      <Image
        source={require("../assets/worktrack image.jpg")}
        style={styles.squareImage}
      />

      {/* WorkTrack Title */}
      <Text style={styles.titleText}>
        <Text style={styles.work}>Work</Text>
        <Text style={styles.track}>Track</Text>
      </Text>

      {/* Welcome Text */}
      <Text style={styles.text}>Simplifying Field Work</Text>

      {/* Button Section */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  squareImage: {
    width: 400,
    height: 400,
    marginBottom: 20,
    resizeMode: "contain",
  },
  titleText: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  work: {
    color: "#6C6EF5", // Purple color for "Work"
  },
  track: {
    color: "#000", // Black color for "Track"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#6C6EF5",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default GetStarted;
