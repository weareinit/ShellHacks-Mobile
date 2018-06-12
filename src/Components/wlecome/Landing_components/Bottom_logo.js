import React, { Component } from 'react';
import { Image, View, StyleSheet, view } from 'react-native';

export default class Bottom_logo extends Component {
    render() {
        return (
            <View style={Styles.logoContainer}>
                <Image source={this.props.Logo} style={Styles.logo} /> //full size 
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    logoContainer: {
        width: '25%',
        height: '50%',
       // backgroundColor: '#00207e'//for testing 
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        //backgroundColor: '#00207e'//for testing 
    }

})