import React, { Component } from 'react';
import {
    StyleSheet, Image, View, Alert, TouchableOpacity, Linking
} from 'react-native';
export default class SocialMedia extends React.Component {

    constructor(props) {
        super(props);
    }
    PressedButton = () => {
        Linking.openURL(this.props.url)
    }
    render() {
        return (
            <View style={this.props.socialMediaStyle}>
                <TouchableOpacity onPress={this.PressedButton} >
                    <Image style={Styles.imagestyle} source={this.props.SocialMediaImage} />
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
        borderRadius: 10
    }
});