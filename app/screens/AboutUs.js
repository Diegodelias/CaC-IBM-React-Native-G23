import React from "react";
import { openURL } from "expo-linking";
import { StyleSheet, ScrollView } from "react-native";

import CardAboutUs from "../components/AboutUs/CardAboutUs";
import Members from "../components/AboutUs/Members";

export default function AboutUs() {
  return (
    <ScrollView>
      <Members />
      <CardAboutUs
        title="¿Cómo desarrollamos la solución?"
        text="Acá te contamos que herramientas utilizamos para el desarrollo de la aplicación."
        modalContent="Para el desarrollo del proyecto se utilizó Expo CLI "
        openModal={true}
      />
      <CardAboutUs
        title="Prototipado de pantallas"
        openModal={false}
        buttonAction={() =>
          openURL(
            "https://www.figma.com/file/Rqpj9aynTduQwb3LcmHtKQ/PantallasAppClima?node-id=0%3A1"
          )
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
