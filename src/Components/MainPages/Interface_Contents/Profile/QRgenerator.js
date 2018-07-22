import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import { Button, Text } from 'react-native'

import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput
} from 'react-native';
const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});



export default class QRgenerator extends Component {
    state = {
        text: 'invalid',
    };


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.popUp}>
                    <Button
                        title="Show Dialog"
                        onPress={() => {
                            this.popupDialog.show();
                        }}
                    />
                    <PopupDialog style={styles.popUpc}
                        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                        dialogAnimation={slideAnimation}
                        width={300}
                        height={400}
                        overlayBackgroundColor={'#FF1D8E'}
                        overlayOpacity={100} >
                        <View style={styles.QR}>
                            <QRCode
                                value={this.state.text}
                                size={250}
                                bgColor='#FF1D8E'
                                fgColor='white'
                            />
                            <Text style={styles.QRtext}> Touch outside to close</Text>
                        </View>
                    </PopupDialog>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    },
    popUp: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    QR: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,

    },
    QRtext: {
        width: '100%',
        color: '#FF1D8E',
        margin: 40,
        paddingLeft: 25,
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',


    }
});