import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigation from "./app/navigations/Navigation";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  return (
    <RootSiblingParent>
      <StatusBar style="auto" backgroundColor="#00a680" />
      <Navigation />
    </RootSiblingParent>
  );
}
