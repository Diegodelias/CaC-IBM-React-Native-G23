import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cities from "../screens/Cities";
import AddCity from "../screens/AddCity";
import City from "../screens/City";
const Stack = createNativeStackNavigator();

export default function CitiesStack() {

  return (
    <Stack.Navigator>
          <Stack.Screen
        name="cities"
        component={Cities}
        options={{ title: "Ciudades" }}
      />

       <Stack.Screen
        name="addCities"
        component={AddCity}
        options={{ title: "Agregar Ciudad" }}
      />

      <Stack.Screen
        name="City"
        component={City}
        options={{ title: "Ciudad" }}

      />

    </Stack.Navigator>
  );
}