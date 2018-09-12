import React, { Component } from 'react';
import {
    StyleSheet, ScrollView, FlatList, Dimensions, Text
} from 'react-native';
import TitleBar from '../components/TitleBar.js';
import Img from '../components/Img.js';
var { screenHeight, screenWidth } = Dimensions.get('window'); //assign the values of the screen height and width of a device 

export default class Sponsors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.sponsorsData
        }
    }
    render() {

        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}
            >
                {/*_______________________________________ ORGANIZER__________________________________________*/}
                <FlatList
                    ListHeaderComponent={/*Renders the title of the List*/
                        <TitleBar ShellIcon={require('../Assets/blue-shell.png')} category='Organizers' />
                    }
                    data={this.props.sponsorsData.organizers}
                    renderItem={({ item }) => (
                        <Img viewStyle={styles.oneImg} supporter={{ uri: item.logo }} url={item.link} />
                    )}
                    keyExtractor={(item) => item.name} //assign id to each item
                />

                {/*_______________________________________ COHOST____________________________________________*/}
                <FlatList
                    ListHeaderComponent={/*Renders the title of the List*/
                        <TitleBar ShellIcon={require('../Assets/blue-shell.png')} category='Cohost' />
                    }
                    data={this.state.data.cohost}
                    renderItem={({ item }) => (
                        <Img viewStyle={styles.oneImg} supporter={{ uri: item.logo }} url={item.link} />
                    )}
                    keyExtractor={(item) => item.name} //assign id to each item
                />

                {/*_______________________________________ SPONSORS__________________________________________*/}
                {/*PREMIUM SPONSORS*/}
                <FlatList
                    ListHeaderComponent={/*Renders the title of the List*/
                        <TitleBar ShellIcon={require('../Assets/blue-shell.png')} category='Sponsors' />
                    }
                    data={this.state.data.premiumSponsors}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <Img viewStyle={styles.Twoimg} supporter={{ uri: item.logo }} url={item.link} />
                    )}
                    keyExtractor={(item) => item.name} //assign id to each item
                />

                {/*REGULAR SPONSORS*/}
                <FlatList
                    data={this.state.data.sponsors}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <Img viewStyle={styles.threeimg} supporter={{ uri: item.logo }} url={item.link} />
                    )}
                    keyExtractor={(item) => item.name} //assign id to each item
                />

                {/*_______________________________________ PARTNERS__________________________________________*/}
                <FlatList
                    ListHeaderComponent={/*Renders the title of the List*/
                        <TitleBar ShellIcon={require('../Assets/blue-shell.png')} category='Partners' />
                    }
                    data={this.state.data.partners}
                    numColumns={4}
                    renderItem={({ item }) => (
                        <Img viewStyle={styles.fourimg} supporter={{ uri: item.logo }} url={item.link} />
                    )}
                    keyExtractor={(item) => item.name} //assign id to each item
                />
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.bottomtext}>Made with 🐢, ❤, ☀, ⛱, 🌊, 🌀 by the ShellHacks Team</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    oneImg: {
        height: 120,// still havent figured a wait to turn these (the images height) into percentages
        width: '100%',
        padding: '3%',
    },
    Twoimg: {
        width: '50%',
        height: 100,
        padding: '3%',
    },
    threeimg: {
        width: '33.3%',
        height: 80,
        padding: '3%',
    },
    fourimg: {
        width: '25%',
        height: 70,
        padding: '3%',

    }, bottomtext: {
        paddingTop: '20%',
        alignSelf: 'center',
        paddingBottom: '5%',
    }
});
