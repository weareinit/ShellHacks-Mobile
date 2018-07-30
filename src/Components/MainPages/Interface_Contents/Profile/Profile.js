import React, { Component } from 'react';
import {
    StyleSheet, Dimensions, Image, View, Text, Button, Linking
} from 'react-native';
import Buttons from './Buttons.js';
import SocialMedia from './SocialMedia.js';
import QRgenerator from './QRgenerator.js';

var { screenHeight, screenWidth } = Dimensions.get('window'); //assign the values of the screen height and width of a device 

console.log(Dimensions);
export default class TitleBar extends Component {
    constructor(props) {
        super(props);
        this.state
    }
    PressedButton = () => {
        Linking.openURL('https://discordapp.com/invite/upefiu')
    }



    render() {
        return (
            <View style={Styles.container}>//container

                <Image style={Styles.Shellimage} source={require('./assets/pinkRoundShell.png')} />

                <Text style={Styles.hello_text}> Hello, Johnny! </Text> // hello message
                <Buttons buttonText='QR Code' ButtonPressed={this.onPress} ButtonImage={{ uri: 'https://img3.androidappsapk.co/300/0/3/3/com.wolfpackdev.qrcodereader.png' }} />
                <Buttons buttonText='Discord' ButtonPressed={this.PressedButton} ButtonImage={{ uri: 'https://www.freeiconspng.com/uploads/silver-discord-token-icon-16.png' }} />
                <QRgenerator />
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
        justifyContent: 'center',
        marginTop:'5%'



    },
    Shell: {
        height: '35%',
        width: '100%',
        backgroundColor: 'blue',

    },
    Shellimage: {
        height: '35%',
        width: 500,//'100%' doesnt work :( nor does screenWidth from Dimensions :() :()
        resizeMode: 'contain',
        position: 'relative',
    },
    hello_text: {
        justifyContent: 'center',
        fontSize: 38,
        marginTop: '3%',

    },
    socialMedia: {
        height: '100%',
        width: '22%',

    },
    socialMediaContainer: {
        height: '20%',
        flexDirection: 'row',
        marginTop: '3%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-around',
        //backgroundColor: 'grey',

    }
});