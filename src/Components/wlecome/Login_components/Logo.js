import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }} />
                <Image style={styles.imageStyle} source={require('../images/Shellhacks-White.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    imageStyle: {
        paddingBottom: 100,
        flex: 2,
        resizeMode: 'contain',
        width: 250,
        height: 250,
    }

});