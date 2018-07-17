import React, { Component } from 'react';
import {
    StyleSheet, Image, View, Text, Button
} from 'react-native';
import Buttons from './Buttons.js';
export default class TitleBar extends Component {
    render() {
        return (
            <View style={Styles.container}>//container
                <View style={Styles.Shell}>//Shell icon
                    <Image style={Styles.Shellimage} source={require('./assets/pinkRoundShell.png')} />
                </View>
                <Text style={Styles.hello_text}> Hello, Johnny! </Text> // hello message
                <Buttons url = 'https://google.com' />
                <Buttons url = 'https://discordapp.com/invite/upefiu' buttonImage = {{uri:'https://discordapp.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png'}}/>

            </View>//Container 
        );
    }
}

const Styles = StyleSheet.create({
    container: {//contains the whole view 
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
    },
    Shell: {
        height: 200,
        width: '100%',

    },
    Shellimage: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    hello_text: {
        justifyContent: 'center',
        fontSize: 30,
        marginTop: 20,
        marginBottom: 10

    },
});