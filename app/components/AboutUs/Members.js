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
                    containerStyle={styles.avatar}
                    source={require("../../../assets/img/avatar-default.jpg")}       
                >
                </Avatar>
                <Text style={styles.textName}>Diego Delías</Text>
                <Text style={styles.textDescription}>Descripcion lorem ipsum</Text>
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
                <Text style={styles.textName}>Federico Pandullo</Text>
                <Text style={styles.textDescription}>Descripcion lorem ipsum</Text>
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
                <Text style={styles.textName}>Daniela Pappa</Text>
                <Text style={styles.textDescription}>Descripcion lorem ipsum</Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    avatar: {
        marginTop: 20,
        marginRight: 20,
    }, 
    divisor: {
        marginTop: 10,
    },
    textName: { 
        marginTop: 20,
        fontSize: 20,
    },
    textDescription: {
        marginTop: 60,
        marginLeft: -70,
    },
})
