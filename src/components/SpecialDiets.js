import React, { Component } from 'react'
import {
    StyleSheet,
    View, Text, WebView
} from 'react-native';

const SpecialDiets = (props) => {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: props.formLink }}
                style={styles.container}
            />
        </View>
    )
};
export default SpecialDiets;


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
});