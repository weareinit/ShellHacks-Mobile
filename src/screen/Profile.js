import React, { Component } from 'react';
import {
    StyleSheet, Dimensions, Modal, Image, View, Text, TouchableOpacity, Linking
} from 'react-native';
import Buttons from '../components/Buttons.js';
import SocialMedia from '../components/SocialMedia.js';
import SpecialDiets from '../components/SpecialDiets.js';

var { screenHeight, screenWidth } = Dimensions.get('window'); //assign the values of the screen height and width of a device 

export default class Profile extends Component {
    //default values...curent in the database
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.profileData,
            closeModal: false,
        }
    }

    PressedButton = () => {
        Linking.openURL(this.state.data.discord)
    }


    render() {
        {console.log(this.state.data)}
        return (
            <View style={Styles.container}>
                <Image style={Styles.Shellimage} source={require('../Assets/profileShell.png')} />
                <Text style={Styles.hello_text}> {this.state.data.greetings}, {this.state.data.user} </Text> // hello message
                <Buttons buttonText='Special Diets' ButtonPressed={() => { this.setState({ closeModal: true }) }} ButtonImage={require('../Assets/qrcode-scan.png')} />
                <Modal animationType="slide"
                    transparent={false}
                    visible={this.state.closeModal == true}
                    style={Styles.modal}>
                    <SpecialDiets formLink={this.state.data.specialDietsForm} />
                    <TouchableOpacity onPress={() => { this.setState({ closeModal: false }) }}
                        style={{ position: 'absolute', alignSelf: 'center', height: '10%', width: '25%', alignContent: 'center' }}>
                        <Image source={require('../Assets/close-icon.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </Modal >
                <Buttons buttonText='Discord' ButtonPressed={this.PressedButton} ButtonImage={require('../Assets/Discord-logo.png')} />
                <View style={Styles.socialMediaContainer}>
                    <SocialMedia url={this.state.data.linkedin} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('../Assets/logout-icon.png')} />
                    <SocialMedia url={this.state.data.facebook} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('../Assets/facebook-logo.png')} />
                    <SocialMedia url={this.state.data.instagram} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('../Assets/instagram-logo.png')} />
                    <SocialMedia url={this.state.data.snapchat} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('../Assets/snapchat-logo.png')} />
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
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});