import React, { Component } from 'react';
import {
    StyleSheet, Image, View, Text
} from 'react-native';
export default class TitleBar extends Component {
    render() {
        return (
            <View style={Styles.container}>

                <View style={Styles.Bar}>
                    <View style={Styles.TitleBarContents}>
                        <Text style={Styles.Title_text}>
                            {this.props.category}
                        </Text>
                    </View>
                </View> 
                <Image style={Styles.imagestyle} source={this.props.ShellIcon} />

            </View>//Main view 
        );
    }
}

const Styles = StyleSheet.create({
    container: {//contains the whole view 
        flexDirection: 'row',
        height: 80,
        alignItems: 'flex-end',
        alignSelf:'center'

    }, Bar: {
        height: 60,
        width: '99%',
        backgroundColor: '#001E7F',
        justifyContent: 'center',
        borderTopStartRadius:2,
        borderTopEndRadius:2


    },
    Title_text: {
        color: 'white',
        fontSize: 25,
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
