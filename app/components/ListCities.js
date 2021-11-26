import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

export default function ListCities(props) {
  const { ciudades, borrarCiudad } = props;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.loaderCities}>
      {size(ciudades) > 0 ? (
        <FlatList
          style={{ padding: 10 }}
          showsVerticalScrollIndicator={false}
          data={ciudades}
          renderItem={(ciudad) => (
            <Ciudad
              ciudad={ciudad}
              borrarCiudad={borrarCiudad}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <View>
          <ActivityIndicator size="large" />
          <Text style={{ textAlign: "center" }}>No se han cargado ciudades...</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
//COMPONENTE CIUDAD
function Ciudad(props) {
  const { ciudad, navigation } = props;
  const { name, id, latitude, longitude } = ciudad.item;

  const irCiudad = () => {
    navigation.navigate("City", {
      cityId: id,
      cityName: name,
      latitude,
      longitude,
    });
  };

  return (
    <TouchableOpacity style={{ margin: 10 }} onPress={irCiudad}>
      <View style={styles.viewCiudad}>
        <View style={styles.wrapText}>
          <Text style={styles.nombreCiudad}>{name}</Text>
        </View>

        <TouchableOpacity
          style={[styles.borrar]}
          onPress={() => props.borrarCiudad(id)}
        >
          <Icon
            type="material-community"
            name="delete"
            color="white"
            size={20}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loaderCities: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewCiudad: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
    justifyContent: "space-between",
  },
  nombreCiudad: {
    fontWeight: "bold",
  },
  temperaturaCiudad: {
    paddingTop: 2,
    color: "grey",
  },
  wrapText: {
    marginLeft: 10,
    justifyContent: "center",
  },

  borrar: {
    height: 25,
    width: 25,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    borderRadius: 3,
  },
});
