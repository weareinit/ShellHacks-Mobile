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
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text> menuBar</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    /*imageStyle: {
    }*/
});