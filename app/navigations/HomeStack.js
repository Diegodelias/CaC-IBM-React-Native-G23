import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Home from '../screens/Home';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({})
