import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "react-native-elements";
import Cities from "../screens/Cities";
import AddCity from "../screens/AddCity";
import City from "../screens/City";
const Stack = createNativeStackNavigator();

export default function CitiesStack() {
  return (
    <Stack.Navigator
      defaultScreenOptions={{
        headerBackTitle: "Atrás",
      }}
      screenOptions={({ route, navigation }) => ({
        headerLeft: (props) =>
          props.canGoBack && (
            <Icon
              containerStyle={{ marginRight: 10 }}
              onPress={() => navigation.navigate("cities")}
              name="arrow-back"
              size={28}
              color="black"
            />
          ),
      })}
    >
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
        options={{
          title: "Ciudad",
        }}
      />
    </Stack.Navigator>
  );
}
