import React , { useState, useEffect} from 'react'
import { StyleSheet, Text, View , FlatList , Image  } from 'react-native';
import { SearchBar, ListItem , Icon } from 'react-native-elements';
import ListCities from '../components/ListCities';

export default function Cities(props) {
    const { navigation } = props;
 
    const [totalCiudades, setTotalCiudades] = useState(0);
    const [cargandoCiudades, setCargandoCiudades] = useState(false);
    // const [startCiudades, setStartCiudades] =(null); //para scroll infinito
    const [ciudades, setCiudades] = useState([  {  "id": "1", "city": "Buenos Aires", "temperature": "25" },
    { "id": "2" , "city": "Rosario", "temperature": "21" },
    { "id": "3" ,"city": "Mar del Plata.", "state": "27" },
    { "id": "4" ,"city": "	Posadas", "temperature": "29" },
    { "id": "5" ,"city": "Resistencia", "temperature": "28" },
    { "id": "6" ,"city": "Comodoro Rivadavia", "temperature": "12"},
    { "id": "7" ,"city": "Quilmes", "temperature": "25"},
    { "id": "8" ,"city": "Rio Cuarto", "temperature": "23" },
    { "id": "9" ,"city": "San Miguel de Tucumán", "temperature": "27"},
    { "id": "10" ,"city": "Viedma", "temperature": "12" }]);

    const [busqueda, setBusqueda] = useState(ciudades);

    const irAgregarCiudad = () =>{
      navigation.navigate("addCities")
   }


  const borrarCiudad = ciudadId => {

   const nuevasCiudades =  busqueda.filter(item => item.id != ciudadId )
   setBusqueda(nuevasCiudades)
    
  } 

  const FiltroBusqueda = (ciudadNombre) =>{
    setBusqueda( ciudades.filter(i => i.city.toLowerCase().includes(ciudadNombre.toLowerCase())))


  }

  return (
    <View style={styles.viewBody}>
       <SearchBar
       containerStyle={{backgroundColor: 'white', borderColor:'#fff' , borderTopWidth:0,
       borderBottomWidth:0}}
          inputStyle={{backgroundColor: 'white'}}
          inputContainerStyle={{backgroundColor: 'white'}}
          
      placeholder="Buscar ciudad..."
      onChangeText={(e)=> FiltroBusqueda(e)}
      value={busqueda}
      color="#007aff"
      containerStyle={StyleSheet.barraBusqueda}
      />
   

      <ListCities busqueda={busqueda} borrarCiudad={borrarCiudad}  /> 
      <Icon  reverse type="material-community"
      name="plus"
      color="#00a680"
      containerStyle={styles.btnContainer}  onPress={irAgregarCiudad}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  viewBody:{
    flex:1,
    backgroundColor:"#ffff"
  },
  btnContainer:{
    position:"absolute",
    bottom:10,
    right:10,
    shadowColor:"black",
    shadowOffset:{ width:2, height:2},
    shadowOpacity:0.5,


  }

})
