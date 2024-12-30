import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";
import UserDashboard from "./pages/UserDashboard";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="UserDashboard"
          component={UserDashboard}
          options={{ headerShown: false }} // Hide header for Dashboard
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}