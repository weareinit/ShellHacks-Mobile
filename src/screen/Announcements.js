import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native';
import {
    Card,
    CardItem,
    Body,
} from 'native-base';
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

    dateDiff = (date1) => { date1 - date2 }
    chooseShell = (date) => {
        if (this.dateDiff(date) < 60) { "../Assets/pink-shell.png" }
        else { "../Assets/blue-shell.png" }
    }

    render() {
        //_____________________________________________________________________________________________________________________________________________
        //NEED TO ADD LOGICS TO CHECK UPCOMING EVENTS AND ADD THE ONCE THAT ARE ABOUT TO HAPPEN (~10-15 MIN BEFORE THE SET TIME) and change shell icon to pink or teal
        //_____________________________________________________________________________________________________________________________________________

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
                                            <Text style={styles.smallText} >{item.date.toString()}</Text>
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
                    marginTop: 70,//need to improve to pixel ratio aka dynamic
                }}>
                    <View style={styles.ShellHacks_letterContainer}>
                        <Image style={styles.ShellHacks_letter} source={require('../Assets/ShellHacks-letter.png')} />
                    </View>
                    <View style={{ marginTop: '2%', flexDirection: 'row', height: '17%', width: '100%' }}>
                        <Bottom_logo Logo={require('../Assets/UPEwhite.png')} />
                        <Bottom_logo />{/*white space*/}
                        <Bottom_logo />
                        <Bottom_logo Logo={require('../Assets/SpotifyWhite.png')} />
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
        marginTop: '5%',
        width: '100%',
        marginBottom: '4%'

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
        height: '90%',
        width: '100%',
        resizeMode: 'contain',
    }, ShellHacks_letterContainer: {
        height: '80%',
        width: '100%',
        marginTop: '2%',
    }
});