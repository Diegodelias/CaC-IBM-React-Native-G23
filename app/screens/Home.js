import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import CardHome from '../components/Home/CardHome';

export default function Home() {
  return (
    <View>
      <Text style={styles.name}>Nombre de la App</Text>
      <CardHome title="Descripción" text="Esta App permite consultar el estado del clima en tiempo real, seleccionando ciudades de Argentina que se encuentren en la base de datos de OpenWeatherMap y consultando los datos climáticos de la misma." />
      <CardHome title="Uso de la App" text="Desde el menú Ciudades se puede añadir una ciudad " />
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
})
