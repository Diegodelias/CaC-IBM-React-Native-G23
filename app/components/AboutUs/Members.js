import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Avatar } from 'react-native-elements';

export default function Members() {
    return (
        <Card>
            <Card.Title>¡Conócenos!</Card.Title>
            <Card.Divider/>
            <View style={{ flexDirection: "row"}}>
                <Avatar
                    rounded
                    size="large"
                    showEditButton
                    avatarStyle={styles.avatar}
                    source={require("../../../assets/img/avatar-default.jpg")}       
                >
                </Avatar>
                <View style={{marginLeft: 15, flex: 1}}>
                    <Text style={styles.textName}>Diego Delías</Text>
                    <Text style={{ flexShrink: 1, fontSize: 14 }}>Me inicié en el mundo de la programación  en el año 2017 como alumno de la primer "versión" de Codo a Codo.Entre 2018 a 2020 cursé la tecnicatura en análisis de sistemas en el IFTS N°16 y el año pasado participé en el curso FullStack - Desarrollo Web (JavaScript/Node.JS) de Codo a Codo</Text>
                </View>
            </View>
            <Card.Divider style={styles.divisor}/>
            <View style={{ flexDirection: "row"}}>
                <Avatar
                    rounded
                    size="large"
                    showEditButton
                    containerStyle={styles.avatar}
                    source={require("../../../assets/img/avatar-default.jpg")}       
                >
                </Avatar>
                <View style={{marginLeft: 15, flex: 1}}>
                    <Text style={styles.textName}>Federico Pandullo</Text>
                    <Text style={{ flexShrink: 1, fontSize: 14 }}>Descripcion lorem ipsum</Text>
                </View>
            </View>
            <Card.Divider style={styles.divisor}/>
            <Card.Divider/>
            <View style={{ flexDirection: "row"}}>
                <Avatar
                    rounded
                    size="large"
                    showEditButton
                    containerStyle={styles.avatar}
                    source={require("../../../assets/img/avatar-default.jpg")}       
                >
                </Avatar>
                <View style={{marginLeft: 15, flex: 1}}>
                    <Text style={styles.textName}>Daniela Pappa</Text>
                    <Text style={{ flexShrink: 1, fontSize: 14 }}>Soy Licenciada en Sistemas, trabajo como 
                            Analista Funcional hace 8 años. A comienzos de este año participe
                            del curso Desarrollo Fullstack Python de Codo a Codo. Me interesa
                            aprender sobre desarrollo web y mobile, y la utilización del lenguaje
                            Python en ciencia de datos.</Text>
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    avatar: {
        alignSelf: "center"
    }, 
    divisor: {
        marginTop: 10,
    },
    textName: { 
        marginTop: 20,
        fontSize: 20,
    },
})
