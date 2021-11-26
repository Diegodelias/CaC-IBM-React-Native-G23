import React, { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { SearchBar, Icon } from "react-native-elements";
import ListCities from "../components/ListCities";
import { database } from "../utils/database";

export default function Cities(props) {
  const { navigation } = props;

  const [ciudades, setCiudades] = useState([]);
  const [ciudadesFiltradas, setCiudadesFiltradas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const irAgregarCiudad = () => {
    navigation.navigate("addCities");
  };

  const getDatabaseCities = () => {
    database
      .getCities()
      .then((cities) => {
        setCiudades(cities);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const borrarCiudad = async (ciudadId) => {
    await database.deleteCity(ciudadId);
    getDatabaseCities();
  };

  // cada vez que se hace foco en la pantalla, voy a buscar las ciudades
  useFocusEffect(
    useCallback(() => {
      setCiudades([]);
      getDatabaseCities();
    }, [])
  );

  useEffect(() => {
    // filtro las ciudades según el texto ingresado en el searchbar
    setCiudadesFiltradas(
      ciudades.filter((city) => {
        return (
          busqueda === "" ||
          city.name.toLowerCase().includes(busqueda.toLowerCase())
        );
      })
    );
  }, [busqueda, ciudades]);

  return (
    <View style={styles.viewBody}>
      <SearchBar
        containerStyle={{
          backgroundColor: "white",
          borderColor: "white",
          borderTopWidth: 0,
          borderBottomWidth: 0,
        }}
        inputStyle={{ backgroundColor: "white" }}
        inputContainerStyle={{ backgroundColor: "white" }}
        placeholder="Buscar ciudad..."
        onChangeText={(e) => setBusqueda(e)}
        value={busqueda}
        color="#007aff"
      />

      <ListCities ciudades={ciudadesFiltradas} borrarCiudad={borrarCiudad} />
      <Icon
        reverse
        type="material-community"
        name="plus"
        color="#13b5f1"
        containerStyle={styles.btnContainer}
        onPress={irAgregarCiudad}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: "white",
  },
  btnContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
});
