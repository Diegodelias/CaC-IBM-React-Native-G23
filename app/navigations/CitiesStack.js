import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Cities from "../screens/Cities";
const Stack = createNativeStackNavigator();
import Toast from "react-native-root-toast";
export default function CitiesStack() {
  setTimeout(() => {
    Toast.show("Cargando ciudades...");
  }, 1000);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cities"
        component={Cities}
        options={{ title: "Ciudades" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
