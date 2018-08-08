import React, { Component } from 'react';
import {
    StyleSheet, Dimensions, Modal, Image, View, Text, TouchableOpacity, Linking
} from 'react-native';
import Buttons from './Buttons.js';
import SocialMedia from './SocialMedia.js';
import QRgenerator from './QRgenerator.js';

var { screenHeight, screenWidth } = Dimensions.get('window'); //assign the values of the screen height and width of a device 

export default class Profile extends Component {
    //default values
    constructor(props) {
        super(props);
        this.state = {
            welcomeMessage: 'Hello',
            username: 'User',
            UserLastName: 'UserLastName',
            DiscordLink: 'https://discordapp.com/invite/upefiu',
            FacebookLink: 'https://www.facebook.com/upefiu/',
            InstagramLink: 'https://www.instagram.com/shellhacks/?hl=en',
            SnapchatLink: 'https://snapchat.com',
            QRtext: 'invalid',
            showQR: false
        }
    }

    //update state variables


    //Disord button action 
    PressedButton = () => {
        Linking.openURL(this.state.DiscordLink)
    }
    //opens QR in a popup
    onPress = () => {
    }

    render() {
        return (
            <View style={Styles.container}>
                <Image style={Styles.Shellimage} source={require('./assets/pinkRoundShell.png')} />
                <Text style={Styles.hello_text}> {this.state.welcomeMessage}, {this.state.username} </Text> // hello message
                <Buttons buttonText='QR Code' ButtonPressed={() => { this.setState({ showQR: true }) }} ButtonImage={require('./assets/qrcode-scan.png')} />
                <Modal animationType="slide"
                    transparent={false}
                    visible={this.state.showQR == true}
                    style={Styles.modal}>
                    <QRgenerator />
                    <TouchableOpacity onPress={() => { this.setState({ showQR: false }) }}
                        style={{ alignSelf: 'center', height: '15%', width: '25%', alignContent: 'center' }}>
                        <Image source={require('./assets/close-icon.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />                    </TouchableOpacity>
                </Modal >
                <Buttons buttonText='Discord' ButtonPressed={this.PressedButton} ButtonImage={require('./assets/Discord-logo.png')} />
                <View style={Styles.socialMediaContainer}>
                    <SocialMedia url={this.state.DiscordLink} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('./assets/logout-icon.png')} />
                    <SocialMedia url={this.state.FacebookLink} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('./assets/facebook-logo.png')} />
                    <SocialMedia url={this.state.InstagramLink} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('./assets/instagram-logo.png')} />
                    <SocialMedia url={this.state.SnapchatLink} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('./assets/snapchat-logo.png')} />
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
        marginTop: '5%',
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
        height: '78%',
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
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});