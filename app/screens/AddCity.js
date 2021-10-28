import React, { useState, useCallback } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import Picker from "@react-native-picker/picker";
import { Icon, Input, Button } from "react-native-elements";
import useGeocodingSimple from "../hooks/useGeocodingSimple";
import RadioGroup from "react-native-radio-buttons-group";
import { useFocusEffect } from "@react-navigation/native";

export default function AddCity() {
  // const [Ciudades, setCiudades] = useState({
  //   1: "Santa Rosa  (La Pampa)",
  //   2: "San Luis  (San Luis)",
  //   3: "Villa Carlos Paz  (Córdoba)",
  //   4: "La Plata (Buenos Aires)",
  // });

  const [textToSearch, setTextToSearch] = useState("");

  const {
    response: possibleCities,
    isLoading,
    hasError,
    setCityToSearch,
  } = useGeocodingSimple();

  const [citySelected, setCitySelected] = useState(null);

  const searchCity = () => {
    console.log("click lupa");
    console.log({ textToSearch });
    if (textToSearch.length < 3) {
      console.log("Escriba al menos 3 caracteres");
      setCityToSearch(null);
    } else {
      setCityToSearch(textToSearch);
    }
  };

  const onPressRadioButton = (radioButtonsArray) => {
    const radioCitySelected = radioButtonsArray.find((c) => c.selected);
    console.log({ radioCitySelected });
    const possibleCitySelected = possibleCities[radioCitySelected.id];
    console.log({ possibleCitySelected });

    setCitySelected(possibleCitySelected);
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
      <Input
        value={textToSearch}
        onChangeText={(searchString) => {
          setTextToSearch(searchString);
        }}
        placeholder="Ciudad"
        keyboardType="web-search"
        rightIcon={
          <Icon type="material-community" name="magnify" onPress={searchCity} />
        }
      />
      {isLoading ? (
        <Text style={{ textAlign: "center" }}>Buscando ciudades...</Text>
      ) : possibleCities && textToSearch !== "" && possibleCities.length > 0 ? (
        <View>
          <RadioGroup
            radioButtons={possibleCities.map((city, index) => ({
              id: index,
              label: city.name,
              value: index,
              size: 20,
              color: "#00a280",
              labelStyle: { fontSize: 18 },
            }))}
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
      {/* <CustomMultiPicker
        options={Ciudades}
        search={true} // should show search bar?
        multiple={false} //
        placeholder={"Ingresar ciudad"}
        placeholderTextColor={"#757575"}
        returnValue={"label"} // label or value
        callback={(res) => {
          console.log(res);
        }} // callback, array of selected items
        rowBackgroundColor={"#eee"}
        rowHeight={40}
        rowRadius={5}
        searchIconName="ios-checkmark"
        searchIconColor="red"
        searchIconSize={30}
        iconColor={"#00a680"}
        iconSize={30}
        selectedIconName={"ios-checkmark-circle-outline"}
        unselectedIconName={"ios-radio-button-off-outline"}
        scrollViewHeight={200}
        // selected={["Tom", "Christin"]} // list of options which are selected by default
      /> */}

      <View style={{ marginTop: 20 }}>
        {citySelected && (
          <MapView
            style={{ height: 300, width: "100%" }}
            initialRegion={{
              latitude: citySelected.lat,
              longitude: citySelected.lon,
              latitudeDelta: 0.04,
              longitudeDelta: 0.05,
            }}
          />
        )}
      </View>
      <View style={{marginTop: 20}}>
        <Button title="Agregar" buttonStyle={{ width: "90%" }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  map: {
    flex: 1,
  },
});
