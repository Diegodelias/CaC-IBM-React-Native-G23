import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

export default function CardHome(props) {
    const { title, text } = props;

    return (
        <Card>
            <Card.Title>{title}</Card.Title>
            <Text style={{marginBottom: 10}}>
                {text}
            </Text>
        </Card>
    )
}

const styles = StyleSheet.create({})
