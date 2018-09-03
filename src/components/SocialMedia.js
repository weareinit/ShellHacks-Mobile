import React from 'react';
import {
    StyleSheet, Image, View, TouchableOpacity, Linking
} from 'react-native';

const SocialMedia = (props) => {

    //Button's action
    PressedButton = () => {
        Linking.openURL(props.url)
    }

    return (
        <View style={props.socialMediaStyle}>
            <TouchableOpacity onPress={PressedButton} >
                <Image style={Styles.imagestyle} source={props.SocialMediaImage} />
            </TouchableOpacity>
        </View>

    );
}
export default SocialMedia;

const Styles = StyleSheet.create({
    imagestyle: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 15
    }
});