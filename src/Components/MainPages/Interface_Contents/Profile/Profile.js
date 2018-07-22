import React, { Component } from 'react';
import {
    StyleSheet, Image, View, Text, Button
} from 'react-native';
import Buttons from './Buttons.js';
import SocialMedia from './SocialMedia.js';
export default class TitleBar extends Component {
    render() {
        return (
            <View style={Styles.container}>//container
                <View style={Styles.Shell}>//Shell icon
                    <Image style={Styles.Shellimage} source={{uri:'https://img3.androidappsapk.co/300/0/3/3/com.wolfpackdev.qrcodereader.png'}} />
                </View>
                <Text style={Styles.hello_text}> Hello, Johnny! </Text> // hello message
                <Buttons buttonText='QR Code' url='https://google.com' ButtonImage={{ uri: 'https://img3.androidappsapk.co/300/0/3/3/com.wolfpackdev.qrcodereader.png' }} />
                <Buttons buttonText='Discord' url='https://discordapp.com/invite/upefiu' ButtonImage={{ uri: 'https://www.freeiconspng.com/uploads/silver-discord-token-icon-16.png' }} />
                <View style={Styles.socialMediaContainer}>
                    <SocialMedia url={'https://snapchat.com'} socialMediaStyle={Styles.socialMedia} SocialMediaImage={{ uri: 'https://cdn1.iconfinder.com/data/icons/mobile-device/512/settings-option-configurate-gear-blue-round-512.png' }} />
                    <SocialMedia url={'https://snapchat.com'} socialMediaStyle={Styles.socialMedia} SocialMediaImage={{ uri: 'https://cdn2.iconfinder.com/data/icons/the-circle-icons/513/Facebook.png' }} />
                    <SocialMedia url={'https://snapchat.com'} socialMediaStyle={Styles.socialMedia} SocialMediaImage={{ uri: 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/instagram_circle_color-512.png' }} />
                    <SocialMedia url={'https://snapchat.com'} socialMediaStyle={Styles.socialMedia} SocialMediaImage={{ uri: 'https://d1afx9quaogywf.cloudfront.net/sites/default/files/Logos/Snapchat_0.png' }} />
                </View>
            </View>//Container 
        );
    }
}

const Styles = StyleSheet.create({
    container: {//contains the whole view 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    Shell: {
        height: '35%',
        width: '100%',
        backgroundColor: 'transparent'

    },
    Shellimage: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    hello_text: {
        justifyContent: 'center',
        fontSize: 38,
        marginTop: 10,

    },
    socialMedia: {
        height: 80,
        width: '22%',

    },
    socialMediaContainer: {
        flexDirection: 'row',
        marginTop: '4%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-around',
        //backgroundColor: 'grey',

    }
});