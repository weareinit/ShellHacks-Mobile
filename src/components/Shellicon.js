import React, { Component } from 'react'
import {
    StyleSheet,
    View, Image
} from 'react-native';

export default class Shellicon extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Assets/pinkRoundShell.png')} style={[styles.icon,{opacity:80}]} />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        //any height and width here gets overwritten.... not sure why
    },
    icon: {
        resizeMode: 'contain'
    }
});