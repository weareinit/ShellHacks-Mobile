import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import { Button, Text } from 'react-native'
import {
    StyleSheet,
    View,
} from 'react-native';

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});

export default class QRgenerator extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        text: 'invalid'
    };

    //displays popup 
    onPress = () => {
        this.popupDialog.show();
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container} >
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
        justifyContent: 'center',
        width: '100%',
    },
    QR: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,

    }
});