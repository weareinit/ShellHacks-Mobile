import React from 'react';
import {
    StyleSheet, Image, View,  TouchableOpacity, Text
} from 'react-native';

const buttons = (props) => {
    return (
        <View style={props.viewStyle}>
            <TouchableOpacity onPress={props.ButtonPressed} >
                <View style={Styles.buttons}>
                    <View style={Styles.imageContainer}>
                        <Image style={Styles.imagestyle} source={props.ButtonImage} />
                    </View>
                    <Text style={Styles.text}> {props.buttonText}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default buttons;

const Styles = StyleSheet.create({
    container: {
    },
    imagestyle: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    imageContainer: {
        height: '100%',
        width: '23%',
    },
    text: {
        fontSize: 25,
        color: 'white',
        marginLeft: 10
    },
    buttons: {
        height: 55,
        width: 260,
        backgroundColor: '#001E7F',
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '5%'

    },
});