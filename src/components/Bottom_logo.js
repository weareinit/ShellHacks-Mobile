import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default class Bottom_logo extends Component {
    render() {
        return (
            <View style={Styles.logoContainer}>
                <Image source={this.props.Logo} style={Styles.logo} />
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    logoContainer: {
        width: '80%',
        height: '30%',
        alignSelf: 'center'    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }

})