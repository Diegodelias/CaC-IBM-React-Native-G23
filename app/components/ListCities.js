import React from 'react'
import { StyleSheet, Text, View , FlatList, ActivityIndicator, TouchableOpacity, SafeAreaView} from 'react-native';
import { size } from "lodash";
import { useNavigation} from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function ListCities(props) {
    const {busqueda , borrarCiudad ,} = props;
    const navigation = useNavigation();
  
    // const { cities, temperature} = props;

   

    return (
        <SafeAreaView  style={styles.loaderCities}>
          { size(busqueda) > 0 ? ( 
            <FlatList style = {{padding:10 }}
                showsVerticalScrollIndicator={false}
                data={busqueda}
                
                
                renderItem ={(busqueda)=> < Ciudad  busqueda = {busqueda} borrarCiudad= { borrarCiudad }      navigation={navigation} />}
                // keyExtractor={(item, index) => index.toString}
                keyExtractor={(item) => item.id}
            />

          ): (
              <View>
                  <ActivityIndicator size="large" />
                  <Text>Cargando Ciudades uuu</Text>
            
                </View>
          )}
        </SafeAreaView>
    )
}
//COMPONENTE CIUDAD
function Ciudad(props){
    const {busqueda, navigation} = props;
     const { city ,   temperature , id } = busqueda.item
 
    const irCiudad = () =>{
       navigation.navigate("City")
    }

 

    return (
        <TouchableOpacity style = {{margin:10  }}  onPress={irCiudad}>
            <View style={styles.viewCiudad}>
         
         

                <View style={styles.wrapText}>
                        <Text style={styles.nombreCiudad}>{city}</Text>
                       

                </View>
        
          <TouchableOpacity style={[styles.borrar]} onPress={() => props.borrarCiudad(id)}>
          <FontAwesome5 name="trash" size={15} color="white" />
          </TouchableOpacity>


               
                      
                    

            </View>

         </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    loaderCities:{
        // marginTop:10,
        // marginBottom:10,
        // alignItems:'center',

        // justifyContent:'center',
        flex:1,
        backgroundColor: Colors.WHITE
        
     

    },
    viewCiudad:{
        flex:1,
        padding: 20,
        backgroundColor: Colors.white ,
        flexDirection: 'row',
        elevation:12,
        borderRadius: 7,
        marginVertical: 10,
        justifyContent: 'space-between',
     
     
     
    },
    nombreCiudad:{
        fontWeight:"bold",

    },
    temperaturaCiudad:{
        paddingTop:2,
        color:"grey"
    },
    wrapText:{
      
        marginLeft: 10,
        justifyContent:'center'
    },

    borrar:{
        height: 25,
        width: 25,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 5,
        borderRadius:3,

    }

  
  

})
