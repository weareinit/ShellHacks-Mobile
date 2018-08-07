import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import {
    Container, Header, Content, Title, Body
} from 'native-base';

export default class Interface extends Component {

    render() {
        return (

            <ImageBackground source={require('../Assets/HeaderBackground.png')}
                style={styles.image} >
                <Text style={styles.title}>{this.props.PageTitle}</Text>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // the marginLeft and marginRight here would have prevented the width: '100%' for the header to work

    },

    header: {
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent'

    },

    title: {
        //backgroundColor:'grey',//for testing 
        lineHeight: 40,
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '5%',
        textAlign: 'left',
        marginBottom: '-2.66667%'// <text/> is adding an auto margin for some reasin, this is the only i could i found to fix it 

    },

    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
});