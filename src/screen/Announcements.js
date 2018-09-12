import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native';
import {
    Card,
    CardItem,
    Body,
} from 'native-base';
import Timestamp from 'react-timestamp';
import TitleBar from '../components/TitleBar.js'
var { screenHeight, screenWidth } = Dimensions.get('window'); //assign the values of the screen height and width of a device 
import Bottom_logo from '../components/Bottom_logo.js';
export default class Announcements extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.homeData
        }
    }
    componentDidUpdate() {

    }
    // dateDiff = (date1) => { date1 - date2 }
    // chooseShell = (date) => {
    //     if (this.dateDiff(date) < 60) { "../Assets/pink-shell.png" }
    //     else { "../Assets/blue-shell.png" }
    // }

    render() {

        return (

            <ScrollView style={styles.container}
                showsVerticalScrollIndicator={false}>
                <FlatList style={{ backgroundColor: 'transparent' }}
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}>
                            <TitleBar ShellIcon={require('../Assets/pink-shell.png')} category={item.title} />
                            <Card style={styles.card}>
                                <CardItem style={styles.cardItem}>
                                    {
                                        <Body>
                                            <Timestamp style={styles.textContent2} autoUpdate={60} time={item.date.seconds} component={Text} />
                                            <Text style={styles.smallText} >{item.location}</Text>
                                            <Text style={styles.bodyText} >{item.body}</Text>
                                        </Body>
                                    }
                                </CardItem>
                            </Card>
                        </View>


                    )}
                    keyExtractor={item => item.id.toString()} //assign id to each item
                >
                </FlatList>

                {/*Bottom Logos*/}
                <View style={{
                    alignItems: 'center',
                    height: 300,//need to improve to pixel ratio aka dynamic
                    width: '100%',
                    marginTop: 60,//need to improve to pixel ratio aka dynamic
                    alignSelf: 'center'

                }}>
                    <View style={styles.ShellHacks_letterContainer}>
                        <Image style={styles.ShellHacks_letter} source={require('../Assets/ShellHacks-letter.png')} />
                    </View>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: "5%",
        paddingRight: "5%",
        width: '100%',

    },

    card: {
        width: '100%',
        alignItems: 'center',
        marginTop: 0,
        borderBottomEndRadius: 20,//needed for card borders to wrap cardItem
        borderBottomStartRadius: 20,//needed for card borders to wrap cardItem
        backgroundColor: '#F4F4F4',
    },

    cardItem: {// in front the card component 
        //  borderRadius: 10
        backgroundColor: '#F4F4F4',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },

    smallText: {
        fontSize: 12,
        color: 'black',
        flex: 1,
        flexDirection: 'row'

    },

    bodyText: {
        flex: 1,
        fontSize: 16,
        color: 'black',
        paddingTop: '2%',
    },
    bottomlogo: {
        height: '18%',
        width: '25%',
    },
    ShellHacks_letter: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    }, 
    ShellHacks_letterContainer: {
        height: '100%',
        width: '100%',
        marginTop: '2%',
        alignSelf: 'center'

    }, logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        alignSelf: 'center'
    }
});