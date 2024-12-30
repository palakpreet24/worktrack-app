import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const tasks = [
    { id: "1", title: "Meeting with Team" },
    { id: "2", title: "Complete Design Review" },
    { id: "3", title: "Submit Project Proposal" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <LinearGradient colors={["#6C63FF", "#9C63FF"]} style={styles.header}>
        <Text style={styles.headerTitle}>WorkTrack Dashboard</Text>
        <TouchableOpacity onPress={toggleSidebar}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Sidebar */}
      {isSidebarOpen && (
        <View style={styles.sidebar}>
          <Text style={styles.sidebarTitle}>Menu</Text>
          <TouchableOpacity style={styles.sidebarItem}>
            <Text style={styles.sidebarText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <Text style={styles.sidebarText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem}>
            <Text style={styles.sidebarText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome Back, User!</Text>
          <Text style={styles.subtitle}>Here’s an overview of your day:</Text>
        </View>

        {/* Quick Action Cards */}
        <View style={styles.cardsContainer}>
          {[
            "Notice",
            "Apply for Leave",
            "Attendance",
            "Holiday",
            "Employee Detail",
            "Calendar",
            "Claim",
            "Assigned",
          ].map((title, index) => (
            <TouchableOpacity style={styles.card} key={index}>
              <LinearGradient
                colors={["#FFFFFF", "#F0F0F5"]}
                style={styles.cardGradient}
              >
                <Text style={styles.cardTitle}>{title}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>

        {/* Task List */}
        <View style={styles.taskList}>
          <Text style={styles.sectionTitle}>Your Tasks</Text>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <View style={styles.taskItem}>
                <Text style={styles.taskTitle}>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  menuIcon: {
    fontSize: 24,
    color: "#fff",
  },
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 200,
    height: "100%",
    backgroundColor: "#6C63FF",
    padding: 20,
    zIndex: 10,
  },
  sidebarTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  sidebarItem: {
    paddingVertical: 10,
  },
  sidebarText: {
    fontSize: 16,
    color: "#fff",
  },
  content: {
    padding: 20,
  },
  welcomeSection: {
    marginBottom: 20,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    width: "45%",
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardGradient: {
    flex: 1,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  taskList: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  taskItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  taskTitle: {
    fontSize: 16,
    color: "#333",
  },
});

export default UserDashboard;