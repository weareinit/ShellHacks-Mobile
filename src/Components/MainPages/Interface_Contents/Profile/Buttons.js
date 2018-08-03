import React, { Component } from 'react';
import {
    StyleSheet, Image, View, Alert, TouchableOpacity, Linking,Text
} from 'react-native';
export default class buttons extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={this.props.viewStyle}>
                <TouchableOpacity onPress={this.props.ButtonPressed.bind(this)} >
                    <View style={Styles.buttons}>
                        <View style={Styles.imageContainer}>
                            <Image style={Styles.imagestyle} source={this.props.ButtonImage} />
                        </View>
                        <Text style={Styles.text}> {this.props.buttonText}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}
const Styles = StyleSheet.create({
    container: {
    },
    imagestyle: {
        height: '100%',
        width: '100%',
        //borderWidth: 8,
        resizeMode: 'contain',
        //borderColor: 'lightgrey'
    },
    imageContainer: {
        height: '100%',
        width: '23%',
    },
    text: {
        fontSize: 30,
        color: 'white',
        marginLeft: 10
    },
    buttons: {
        height: 55,
        width: 260,
        backgroundColor: 'navy',
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:30

    },
});