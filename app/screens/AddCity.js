import React, { useState, useCallback, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, SearchBar } from "react-native-elements";
import RadioGroup from "react-native-radio-buttons-group";
import MapView from "react-native-maps";
import Toast from "react-native-root-toast";
import useGeocodingSimple from "../hooks/useGeocodingSimple";
import { useFocusEffect } from "@react-navigation/native";
import { database } from "../utils/database";

export default function AddCity({ navigation }) {
  const [textToSearch, setTextToSearch] = useState("");
  const [citiesForRadio, setCitiesForRadio] = useState([]);
  const {
    response: possibleCities,
    isLoading,
    hasError,
    setCityToSearch,
  } = useGeocodingSimple();
  const [citySelected, setCitySelected] = useState(null);
  const [regionToShow, setRegionToShow] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useFocusEffect(
    useCallback(() => {
      setTextToSearch("");
      setCitiesForRadio([]);
      setCityToSearch(null);
      setCitySelected(null);
    }, [])
  );

  useEffect(() => {
    if (possibleCities) {
      setCitiesForRadio(
        possibleCities.map((city, index) => ({
          id: index,
          label: city.name,
          value: index,
          size: 20,
          color: "#00a280",
          labelStyle: { fontSize: 18 },
        }))
      );
    }
  }, [possibleCities]);

  const searchCity = () => {
    if (textToSearch.length < 3) {
      console.log("Escriba al menos 3 caracteres");
      setCityToSearch(null);
    } else {
      setCitySelected(null);
      setCityToSearch(textToSearch);
    }
  };

  const onPressRadioButton = (radioButtonsArray) => {
    const radioCitySelected = radioButtonsArray.find((c) => c.selected);
    const possibleCitySelected = possibleCities[radioCitySelected.id];

    setCitySelected(possibleCitySelected);
    setCitiesForRadio(radioButtonsArray);
    setRegionToShow({
      ...regionToShow,
      latitude: possibleCitySelected.lat,
      longitude: possibleCitySelected.lon,
    });
  };

  const saveCity = () => {
    if (citySelected) {
      database.insertCity({
        cityName: citySelected.name,
        latitude: citySelected.lat,
        longitude: citySelected.lon,
      });
      navigation.navigate("cities");
    } else {
      Toast.show("Por favor seleccione una ciudad", {
        position: Toast.positions.CENTER,
        opacity: 0.8,
        shadow: true,
        backgroundColor: "#00a280",
        duration: 2000,
      });
    }
  };

  useFocusEffect(
    useCallback(() => {
      setTextToSearch("");
      setCityToSearch(null);
      setCitySelected(null);
    }, [])
  );
  return (
    <ScrollView style={styles.screen}>
      <SearchBar
        placeholder="Ciudad"
        value={textToSearch}
        onChangeText={(searchString) => {
          setTextToSearch(searchString);
        }}
        containerStyle={{ backgroundColor: "transparent", marginBottom: 20 }}
        inputContainerStyle={{ backgroundColor: "transparent" }}
        onSubmitEditing={searchCity}
        onBlur={searchCity}
        onClear={() => setTextToSearch("")}
      />
      {isLoading ? (
        <Text style={{ textAlign: "center" }}>Buscando ciudades...</Text>
      ) : hasError ? (
        <Text>Hubo un problema al buscar la ciudad</Text>
      ) : possibleCities && possibleCities.length > 0 ? (
        <View>
          <RadioGroup
            radioButtons={citiesForRadio}
            onPress={onPressRadioButton}
          />
          {/* {possibleCities.map((city, index) => (
            <View key={city.name + index}>
              <Text>{city.name}</Text>
            </View>
          ))} */}
        </View>
      ) : (
        <Text style={{ textAlign: "center" }}>
          No se encontró ninguna ciudad
        </Text>
      )}

      <View style={{ marginTop: 20 }}>
        {citySelected && (
          <MapView
            style={{ height: 300, width: "100%" }}
            region={regionToShow}
          />
        )}
      </View>
      {
        <View style={{ marginTop: 20 }}>
          <Button
            title="Guardar"
            buttonStyle={{
              marginLeft: 10,
              marginRight: 10,
              backgroundColor: "#00a280",
            }}
            onPress={saveCity}
          />
        </View>
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
});
