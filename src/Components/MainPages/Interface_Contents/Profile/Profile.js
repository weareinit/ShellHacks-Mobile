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
        this.state = {
            welcomeMessage: 'Good morning',
            username: 'Jenny'
        }
    }
    PressedButton = () => {
        Linking.openURL('https://discordapp.com/invite/upefiu')
    }



    render() {
        return (
            <View style={Styles.container}>//container

                <Image style={Styles.Shellimage} source={require('./assets/pinkRoundShell.png')} />

                <Text style={Styles.hello_text}> {this.state.welcomeMessage}, {this.state.username} </Text> // hello message
                <Buttons buttonText='QR Code' ButtonPressed={this.onPress} ButtonImage={require('./assets/qrcode-scan.png')} />
                <Buttons buttonText='Discord' ButtonPressed={this.PressedButton} ButtonImage={require('./assets/Discord-logo.png')} />
                <View style={Styles.socialMediaContainer}>
                    <SocialMedia url={'https://snapchat.com'} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('./assets/logout-icon.png')} />
                    <SocialMedia url={'https://www.facebook.com/upefiu/'} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('./assets/facebook-logo.png')} />
                    <SocialMedia url={'https://www.instagram.com/shellhacks/?hl=en'} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('./assets/instagram-logo.png')} />
                    <SocialMedia url={'https://snapchat.com'} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('./assets/snapchat-logo.png')} />
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
        marginTop: '5%'



    },
    Shell: {
        height: '35%',
        width: '100%',
        backgroundColor: 'blue',
    },
    Shellimage: {
        height: '35%',
        resizeMode: 'contain',
        position: 'relative',
    },
    hello_text: {
        justifyContent: 'center',
        fontSize: 32,
        marginTop: '3%',

    },
    socialMedia: {
        height: '100%',
        width: '22%',
        borderRadius: 50

        

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