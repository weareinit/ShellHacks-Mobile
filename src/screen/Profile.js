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
            welcomeMessage: 'Hello',
            username: 'Hacker',
            DiscordLink: this.props.profileData.discord,
            LinkedinLink: this.props.profileData.linkedin,
            FacebookLink: this.props.profileData.facebook,
            InstagramLink: this.props.profileData.instagram,
            SnapchatLink: this.props.profileData.snapchat,
            SpecialDietsForm: this.props.profileData.specialDiets,
            closeModal: false,
        }
    }
    //updates the state if parent update
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.profileData) {
            this.setState(this.profileData);
        }
    }
    //updates the state if parent update
    componentDidUpdate(prevProps) {
        if (this.props.profileData !==prevProps.profileData) {
            this.setState(this.props.profileData);
        }
    }
    // //update state variables
    // componentDidMount(props) { this.setState(props) }

    //Disord button action 
    PressedButton = () => {
        Linking.openURL(this.state.DiscordLink)
    }


    render() {
        return (
            <View style={Styles.container}>
                <Image style={Styles.Shellimage} source={require('../Assets/profileShell.png')} />
                <Text style={Styles.hello_text}> {this.state.welcomeMessage}, {this.state.username} </Text> // hello message
                <Buttons buttonText='Special Diets' ButtonPressed={() => { this.setState({ closeModal: true }) }} ButtonImage={require('../Assets/qrcode-scan.png')} />
                <Modal animationType="slide"
                    transparent={false}
                    visible={this.state.closeModal == true}
                    style={Styles.modal}>
                    <SpecialDiets formLink={this.state.SpecialDietsForm} />
                    <TouchableOpacity onPress={() => { this.setState({ closeModal: false }) }}
                        style={{ position: 'absolute', alignSelf: 'center', height: '10%', width: '25%', alignContent: 'center' }}>
                        <Image source={require('../Assets/close-icon.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </Modal >
                <Buttons buttonText='Discord' ButtonPressed={this.PressedButton} ButtonImage={require('../Assets/Discord-logo.png')} />
                <View style={Styles.socialMediaContainer}>
                    <SocialMedia url={this.state.LinkedinLink} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('../Assets/logout-icon.png')} />
                    <SocialMedia url={this.state.FacebookLink} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('../Assets/facebook-logo.png')} />
                    <SocialMedia url={this.state.InstagramLink} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('../Assets/instagram-logo.png')} />
                    <SocialMedia url={this.state.SnapchatLink} socialMediaStyle={Styles.socialMedia} SocialMediaImage={require('../Assets/snapchat-logo.png')} />
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