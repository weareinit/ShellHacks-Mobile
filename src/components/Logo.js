import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
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
        height:'50%',
        width:'80%',
    alignSelf:'center'
    },
    imageStyle: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    }

});