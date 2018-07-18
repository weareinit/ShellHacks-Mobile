import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import {
    Container, Header, Content, Title, Body
} from 'native-base';

// import Announcements from '../ Interface_Contents / Announcements / Announcements.js';


export default class Interface extends Component {

    render() {
        return (
           
            <ImageBackground source={require('../Assets/Miami_Beach_Pink_Small.png')}
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
        height: 88,
        width: '110%',
        marginLeft: -10,
        backgroundColor: 'rgba(37, 30, 129, 1)'

    },

    title: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 57,
        marginLeft: 15,
        textAlign: 'left'
    },

    image: {
        width: '100%',
        height: '100%',
    },
});