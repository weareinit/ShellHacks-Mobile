import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
import {
    StyleSheet,
    View, Text
} from 'react-native';

export default class QRgenerator extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            text: '',
            shouldShow: true
        });
    }

    render() {
        return (
            <View style={styles.QR}>
                <View style={{
                    height: '20%', justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10%',
                    marginBottom: '10%',
                }}>
                    <View style={{ backgroundColor: 'white', height: '18%', width: 100, borderRadius: 20, marginBottom: '5%' }}>
                    </View>
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', marginTop: '2%', marginBottom: '0%' }}>Shell-ID</Text>
                    <Text style={{ color: 'white', fontSize: 20, }}>FirstName Lastname</Text>
                </View>
                <View style={{ height: '65%', width: '85%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10, }}>
                    <QRCode
                        value={this.props.text}
                        size={250}
                        bgColor='#FF1D8E'
                        fgColor='white'
                    />
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    QR: {
        marginTop: '10%',
        height: '80%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        backgroundColor: '#FF1D8E'




    }
});