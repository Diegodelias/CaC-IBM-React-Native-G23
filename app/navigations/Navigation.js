import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import HomeStack from "./HomeStack";
import CitiesStack from "./CitiesStack";
import AboutUsStack from "./AboutUsStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home-screen"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          headerShown: false,
          tabBarInactiveTintColor: "#646464",
          tabBarActiveTintColor: "#13b5f1",
        })}
      >
        <Tab.Screen
          name="home-screen"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="cities-screen"
          component={CitiesStack}
          options={{ title: "Ciudades" }}
        />
        <Tab.Screen
          name="about-us-screen"
          component={AboutUsStack}
          options={{ title: "¿Quienes somos?" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "home-screen":
      iconName = "home-outline";
      break;
    case "cities-screen":
      iconName = "city-variant-outline";
      break;
    case "about-us-screen":
      iconName = "account-group-outline";
      break;

    default:
      break;
  }

  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
