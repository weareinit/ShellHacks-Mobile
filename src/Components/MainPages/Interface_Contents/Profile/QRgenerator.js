import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import {
    StyleSheet,
    View, Text
} from 'react-native';

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
}); //popupDialogue's animation

export default class QRgenerator extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            text: '',
            shouldShow: true
        });//initial states
    }

    //updates states
    changeText(text) { this.setState(text) };
    changeShouldShow(shouldShow) { this.setState(shouldShow) };

    //triggers popupDialog
    showPopup = () => { this.popupDialog.show(); };

    //update shouldShow onDismiss
    onDismiss = (dismiss) = { if(dismiss) { this.setState(shouldShow = false) } }

    render() {
        let display = this.state.shouldShow ? this.popupDialog.show() : ''
        return (
            <View style={styles.container}
                changeShouldShow={this.changeShouldShow.bind(this)}
                changeText={this.changeText.bind(this)}
            >
                {display}
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