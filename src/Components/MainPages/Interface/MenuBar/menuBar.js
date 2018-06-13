import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {
    Footer, FooterTab, Button
} from 'native-base';

export default class MenuBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Footer style={styles.footer}>
                    <FooterTab>
                        <Button full>
                            <Text> MenuBar</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
height: '10%'

    },
    footer: {
        width: '20%',
        flexDirection:'row'
    }
    /*imageStyle: {
    }*/
});