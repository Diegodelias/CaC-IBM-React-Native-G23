import React , { useState } from 'react';
import { StyleSheet, Text, View , TextInput  } from 'react-native';
import CustomMultiPicker from "react-native-multiple-select-list";
import MapView from 'react-native-maps';


export default function AddCity() {
    const [Ciudades, setCiudades] = useState({
      "1":"Santa Rosa  (La Pampa)",
      "2":"San Luis  (San Luis)",
      "3":"Villa Carlos Paz  (Córdoba)" ,
      "4":"La Plata (Buenos Aires)" 
    });
  
   

   

  return (
      
<View style={styles.screen }>
<CustomMultiPicker
  options={Ciudades}
  search={true} // should show search bar?
  multiple={false} //
  placeholder={"Ingresar ciudad"}
  placeholderTextColor={'#757575'}
  returnValue={"label"} // label or value
  callback={(res)=>{ console.log(res) }} // callback, array of selected items
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
/>

<View>
    <MapView
    style={{height:"80%"}}
  
    initialRegion={{
      latitude: -34.920345,
      longitude: -57.969559,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
</View>


</View>


  )
}

const styles = StyleSheet.create({
screen:{flex:1,
 


},
map: {
  flex:1
},

  
   
})
