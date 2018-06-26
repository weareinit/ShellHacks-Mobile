import React, { Component } from 'react';
import { Image, View, StyleSheet, view } from 'react-native';

export default class sponsors extends Component {
    render() {
        return (
            <View Styles={Styles.logoContainer}>
                <header>hey i'm a header :)</header>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    logoContainer: {
        height: '30%'
    },
})