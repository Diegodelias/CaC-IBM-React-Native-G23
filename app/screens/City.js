import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from 'react-native-elements';
import MapView from "react-native-maps";
import useWeatherSimple from "../hooks/useWeatherSimple";

export default function City() {
  const { params } = useRoute();
  const { cityId, cityName, latitude, longitude } = params;

  const {
    response: cityData,
    isLoading,
    hasError,
    setLatitude,
    setLongitude,
  } = useWeatherSimple();

  console.log(cityData);

  useEffect(() => {
    setLatitude(latitude);
    setLongitude(longitude);
  }, [latitude, longitude]);

  const getIcon = (iconId) => {
    let route = ''
  
    route = getImage(iconId)

    return (<Image
      source={route}
      resizeMode="cover"
      style={{ width: 150, height: 150 }}
    />)
  }

  return (
    <View>
      <Text style={styles.title}>{cityName}</Text>

      {
        cityData && (<Card>
          <Card.Title style={{ fontSize:20 }}>Clima</Card.Title>
          <View style={{ flexDirection: "row" }}>
            {getIcon(cityData.weather[0].icon)}
            <View>
              <Text style={{ fontSize:20, marginBottom: 10 }}>{cityData.weather[0].description}</Text>
              <Text style={{ fontSize:18 }}>Temperatura Actual: </Text>
              <Text style={{ textAlign: "center", fontSize:20 }}>{cityData.main.temp} C°</Text>
              <Text style={{ fontSize:18 }}>Sensación Térmica: </Text> 
              <Text style={{ textAlign: "center", fontSize:20 }}>{cityData.main.feels_like} C°</Text>
            </View>
          </View>
        </Card>)
      }
      <MapView
        style={{ height: 400, width: "100%" }}
        region={{
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Text>{cityId}</Text>
      <Text>{latitude}</Text>
      <Text>{longitude}</Text>
      <Text>{JSON.stringify(cityData)}</Text>
    </View>
  );
}

function getImage(input) {

  switch (input) {
    case "01d":
      return require('../../assets/open-weather-icons/01d.png')
    case "01n":
      return require('../../assets/open-weather-icons/01n.png') 
    case "02d":
      return require('../../assets/open-weather-icons/02d.png')
    case "02n":
      return require('../../assets/open-weather-icons/02n.png')
    case "03d":
    case "03n":
      return require('../../assets/open-weather-icons/03d.png')  
    case "04d":
    case "04n": 
      return require('../../assets/open-weather-icons/04d.png')
    case "09d":
    case "09n":
      return require('../../assets/open-weather-icons/09d.png')
    case "10d":
      return require('../../assets/open-weather-icons/10d.png')
    case "10n":
      return require('../../assets/open-weather-icons/10n.png')
    case "11d":
    case "11n":
      return require('../../assets/open-weather-icons/11d.png')
    case "13d":
    case "13n": 
      return require('../../assets/open-weather-icons/13d.png')
    case "50d":
    case "50n":
      return require('../../assets/open-weather-icons/50d.png')  
    default:
      return require('../../assets/open-weather-icons/no-icon.png') 
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  },
});
