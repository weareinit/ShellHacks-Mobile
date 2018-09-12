import React, { Component } from 'react';
import {
    StyleSheet, Image, View, Alert, TouchableOpacity, Linking
} from 'react-native';

const Img = (props) => {

    PressedButton = () => {
        Linking.openURL(props.url)
    }
    return (
        <View style={props.viewStyle}>
            <TouchableOpacity onPress={PressedButton} >
                <Image style={Styles.imagestyle} source={props.supporter} loadingIndicatorSource={require('../Assets/loadAnimation.gif')}/>
            </TouchableOpacity>
        </View>

    );
}
export default Img;

const Styles = StyleSheet.create({
    container: {
    },
    imagestyle: {
        height: '100%',
        width: '100%',
        //borderWidth: 8,
        resizeMode: 'contain',
        //borderColor: 'lightgrey'
    }
});
