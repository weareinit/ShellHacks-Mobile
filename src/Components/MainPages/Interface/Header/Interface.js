import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import {
    Container, Header, Content, Title, Body
} from 'native-base';

// import Announcements from '../ Interface_Contents / Announcements / Announcements.js';

export default class Interface extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Body>
                        <Text style={styles.title}>Announcements</Text>
                    </Body>
                </Header>
                <View>

                    <Image style={styles.image} source={require('../Assets/Miami_Beach_Pink.png')} />
                </View>

                
            </Container>
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
        width: '100%',
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: '#ff1f8c'

    },

    background: {

        backgroundColor: 'transparent'
    },

    background1: {
        position: 'absolute',
        height: 100,
        zIndex: 1,
    },

    title: {
        fontSize: 38,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 57,
        textAlign: 'center'
    },

    image: {
        flex: 1,
        position: 'absolute',

        resizeMode: "contain"
    },
});