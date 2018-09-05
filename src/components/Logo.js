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
                <Image style={styles.imageStyle} source={require('../Assets/Shellhacks-White.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    marginBottom:'20%'
    },
    imageStyle: {
        resizeMode: 'contain',
        width: '90%',
        height: '55%',
    }

});