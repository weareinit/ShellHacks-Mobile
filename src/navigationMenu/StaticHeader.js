import React from 'react';
import { StyleSheet, Text, ImageBackground} from 'react-native';

const StaticHeader =(props)=>{
        return (
            <ImageBackground source={require('../Assets/HeaderBackground.png')}
                style={styles.image} >
                <Text style={styles.title}>{props.PageTitle}</Text>
            </ImageBackground>
        );
}
export default StaticHeader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // the marginLeft and marginRight here would have prevented the width: '100%' for the header to work
    },
    header: {
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent'
    },
    title: {
        //backgroundColor:'grey',//for testing 
        lineHeight: 40,
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '5%',
        textAlign: 'left',
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
});