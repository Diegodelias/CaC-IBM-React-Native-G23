import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import AboutUs from "../screens/AboutUs"
const Stack = createNativeStackNavigator();

export default function AboutUsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="about-us"
        component={AboutUs}
        options={{ title: "Sobre nosotros" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({})
