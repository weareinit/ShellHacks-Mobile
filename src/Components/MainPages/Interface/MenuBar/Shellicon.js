import React, { Component } from 'react'
import {
    StyleSheet,
    View, Image, TouchableWithoutFeedback
} from 'react-native';

export default class Shellicon extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./assets/pinkRoundShell.png')} />
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
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    }
});