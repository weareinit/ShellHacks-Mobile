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
                    <Image style={Styles.Shellimage} source={require('./assets/pinkRoundShell.png')} />
                </View>
                <Text style={Styles.hello_text}> Hello, Johnny! </Text> // hello message
                <Buttons buttonText='QR Code' url='https://google.com' ButtonImage={{ uri: 'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/qr-code-circle-blue-512.png' }} />
                <Buttons buttonText='Discord' url='https://discordapp.com/invite/upefiu' ButtonImage={{ uri: 'https://www.freeiconspng.com/uploads/silver-discord-token-icon-16.png' }} />
                <View style={Styles.socialMediaContainer}>
                    <SocialMedia url={'https://snapchat.com'} socialMediaStyle={Styles.socialMedia} SocialMediaImage={{ uri: 'http://cdn.onlinewebfonts.com/svg/img_568657.png' }} />
                    <SocialMedia url={'https://snapchat.com'} socialMediaStyle={Styles.socialMedia} SocialMediaImage={{ uri: 'https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png' }} />
                    <SocialMedia url={'https://snapchat.com'} socialMediaStyle={Styles.socialMedia} SocialMediaImage={{ uri: 'https://vignette.wikia.nocookie.net/instaglobal/images/2/28/Instagram_logo.png/revision/latest/scale-to-width-down/481?cb=20160521102112' }} />
                    <SocialMedia url={'https://snapchat.com'} socialMediaStyle={Styles.socialMedia} SocialMediaImage={{ uri: 'https://banner2.kisspng.com/20180427/rgw/kisspng-snapchat-social-media-logo-5ae38ed0e423a7.1079081915248626729345.jpg' }} />
                </View>
            </View>//Container 
        );
    }
}

const Styles = StyleSheet.create({
    container: {//contains the whole view 
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Shell: {
        height: 160,
        width: '100%',

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
        marginTop: 30,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'space-between',
        //backgroundColor: 'grey',

    }
});