import React, { Component } from 'react';
import {
    StyleSheet,Image,View,Text
} from 'react-native';
export default class Organizers extends Component {
    render() {
        return (
            <View>//Main view 
                <View style={Styles.Title_bar}>//Title Bar view

                    <View style={Styles.TitleBarContents}>
                        <Image source={this.props.Logo} style={Styles.logo} /> //full size
                        <Text >
                            Organizers
                        </Text>
                    </View>
                </View>

                <View>//Orginizers view aka contents
                    <Image source={this.props.organizer} style={Styles.logo} /> //full size 
                </View>

            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',

    },
    /*icon: {
height: '100%',
width: '100%'
    },*/
   
    Title_bar: {
        height: 50,

    }, TitleBarContents: {
        backgroundColor: '#16d0cd',
        paddingLeft: 10,
        height: '85%',
        width: '100%'
    }, logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        //backgroundColor: '#00207e'//for testing 
    }
});
