import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { WebView } from 'react-native';
export default class Map extends React.Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://goo.gl/maps/mKhCEtJzVsn' }}
                style={{ marginTop: 20 }}
            />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
    }
});
