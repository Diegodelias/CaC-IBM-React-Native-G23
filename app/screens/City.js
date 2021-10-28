import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
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

  return (
    <View>
      <Text>{cityId}</Text>
      <Text>{cityName}</Text>
      <Text>{latitude}</Text>
      <Text>{longitude}</Text>
      <Text>{JSON.stringify(cityData)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
