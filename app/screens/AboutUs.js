import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CardAboutUs from '../components/AboutUs/CardAboutUs';
import Members from '../components/AboutUs/Members';


export default function AboutUs() {
  return (
    <ScrollView>
      <Members />
      <CardAboutUs title="¿Cómo desarrollamos la solución?" text="Acá te contamos que herramientas utilizamos para el desarrollo de la aplicación." />
      <CardAboutUs title="Link a la documentación" text="Acá dejamos los links a la documentación del proyecto." />
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({})
