import React, { Component } from 'react';
import {
    StyleSheet, Image, View, Text
} from 'react-native';
export default class TitleBar extends Component {
    render() {
        return (
            <View style={Styles.container}>//Main view 

                <View style={Styles.Bar}>//Bar 
                    <View style={Styles.TitleBarContents}>//Title Bar view
                        <Text style={Styles.Title_text}>
                            {this.props.category}
                        </Text>
                    </View>
                </View> //Bar
                <Image style={Styles.imagestyle} source={require('./assets/blue-shell.png')} />

            </View>//Main view 
        );
    }
}

const Styles = StyleSheet.create({
    container: {//contains the whole view 
        flexDirection: 'row',
        height: 80,
        margin: 10,
        alignItems: 'flex-end'
    }, Bar: {
        height: 60,
        width: '100%',
        backgroundColor: 'navy',
        justifyContent: 'center',


    },
    Title_text: {
        color: 'white',
        fontSize: 30,
        marginLeft: 85
    },
    imagestyle: {
        height: 80,
        width: 60,
        resizeMode: 'contain',
        margin:10 ,
        position: 'absolute'
    }



});
