import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Navigation from "./app/navigations/Navigation";
import { RootSiblingParent } from "react-native-root-siblings";
import * as SplashScreen from "expo-splash-screen";
import { database } from "./app/utils/database";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Mantengo el Splashscreen visible hasta que se haya inicializado la base de datos
        await SplashScreen.preventAutoHideAsync();
        await database.setupDatabaseAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  } else {
    return (
      <RootSiblingParent>
        <StatusBar style="auto" backgroundColor="#00a680" />
        <Navigation />
      </RootSiblingParent>
    );
  }
}
