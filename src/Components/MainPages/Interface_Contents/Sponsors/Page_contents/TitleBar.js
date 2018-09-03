import React from 'react';
import {
    StyleSheet, Image, View, Text
} from 'react-native';

const TitleBar = (props) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.Bar}>
                <View style={Styles.TitleBarContents}>
                    <Text style={Styles.Title_text}>
                        {props.category}
                    </Text>
                </View>
            </View>
            <Image style={Styles.imagestyle} source={props.ShellIcon} />
        </View>//Main view 
    );
};
export default TitleBar;

const Styles = StyleSheet.create({
    container: {//contains the whole view 
        flex: 1,
        flexDirection: 'row',
        height: 80,
        width: '100%',
        alignItems: 'flex-end',
        alignSelf: 'center'

    }, Bar: {
        height: '75%',
        width: '100%',
        backgroundColor: '#001E7F',
        justifyContent: 'center',
        marginLeft: '.41%'//because <card/> have borders, their width is smaller than 100%  (i think)
    },
    Title_text: {
        color: 'white',
        fontSize: 25,
        marginLeft: '25%'
    },
    imagestyle: {
        height: '100%',
        width: '16%',
        resizeMode: 'contain',
        margin: 10,
        position: 'absolute'
    }



});
