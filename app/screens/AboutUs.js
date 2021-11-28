import React from "react";
import { openURL } from "expo-linking";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import CardAboutUs from "../components/AboutUs/CardAboutUs";
import Members from "../components/AboutUs/Members";

export default function AboutUs() {
  const modalContentSolucion = (
    <>
      <Text>
        Para el desarrollo del proyecto se utilizó Expo CLI junto con React
        Native Elements y React Native Maps.
      </Text>
      <Text>
        {"\n"}
        {"\n"}
        Se utilizó la API de OpenWeatherMap para obtener los datos de clima.
        Para la búsqueda de ciudades se utilizó el endpoint de Geocoding y para
        obtener los datos del clima de la ciudad seleccionada se utilizó el
        endpoint de Weather.
      </Text>
    </>
  );

  return (
    <ScrollView>
      <Members />
      <CardAboutUs
        title="¿Cómo desarrollamos la solución?"
        text="Acá te contamos que herramientas utilizamos para el desarrollo de la aplicación."
        modalContent={modalContentSolucion}
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
