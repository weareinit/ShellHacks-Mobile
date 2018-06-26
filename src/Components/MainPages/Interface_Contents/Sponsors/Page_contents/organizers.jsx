import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import { Header } from 'react-native-elements';
export default class Sponsors extends Component {
    render() {
        return (
            <View>//Main view 
                <view style={Styles.Title_bar}>//Title Bar view

                    <view style={Styles.TitleBarContents}>
                        <Image source={this.props.Logo} style={Styles.logo} /> //full size
                        <text >
                            Organizers
                        </text>
                    </view>
                </view>

                <view>//Orginizers view aka contents
                    <Image source={this.props.organizer} style={Styles.logo} /> //full size 
                </view>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexdirection: row,

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
