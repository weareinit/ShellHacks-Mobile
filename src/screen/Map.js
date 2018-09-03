import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Map extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Assets/PG6-map.png')} style={styles.imagestyle} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagestyle: {
        height: '100%',
        width: '100%'
    }

});