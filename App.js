import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigation from "./navigations/Navigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
