import React, { Component } from 'react';
import { StyleSheet, ScrollView, FlatList, Dimensions, Text
} from 'react-native';
import TitleBar from '../components/TitleBar.js';
import Img from '../components/Img.js';
var { screenHeight, screenWidth } = Dimensions.get('window'); //assign the values of the screen height and width of a device 

export default class Sponsors extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            data: {
                OrganizersList: [{
                    id: '0', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                }],
                CohostList: [{
                    id: '0', url: 'https://www.spotifyjobs.com/students/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                }],
                premiumSponsorsList: [{
                    id: '0', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                }, {
                    id: '1', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                }, {
                    id: '2', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                }, {
                    id: '3', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                },],
                regularSponsorsList: [{
                    id: '0', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                }, {
                    id: '1', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                }, {
                    id: '2', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                }, {
                    id: '3', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                }, {
                    id: '4', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                }, {
                    id: '5', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                }, {
                    id: '6', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                }, {
                    id: '7', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                }, {
                    id: '8', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                }, {
                    id: '9', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                }, {
                    id: '10', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1'
                },],
                partnersList: [
                    { id: '0', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1' },
                    { id: '1', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1' },
                    { id: '2', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1' },
                    { id: '3', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1' },
                    { id: '4', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1' },
                    { id: '5', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1' },
                    { id: '6', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1' },
                    { id: '7', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1' },
                    { id: '8', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1' },
                    { id: '9', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1' },
                    { id: '10', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1' },
                    { id: '11', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1' },
                    { id: '12', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1' },
                    { id: '13', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1' },
                    { id: '14', url: 'https://upe.cs.fiu.edu/', logo: 'https://i0.wp.com/www.supportdriven.com/wp-content/uploads/2017/10/github-logo.png?ssl=1' }]

            }
        });
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
                    data={this.state.data.OrganizersList}
                    renderItem={({ item }) => (
                        <Img viewStyle={styles.oneImg} supporter={{ uri: item.logo }} url={item.url} />
                    )}
                    keyExtractor={(item) => item.id.toString()} //assign id to each item
                />

                {/*_______________________________________ COHOST____________________________________________*/}
                <FlatList
                    ListHeaderComponent={/*Renders the title of the List*/
                        <TitleBar ShellIcon={require('../Assets/blue-shell.png')} category='Cohost' />
                    }
                    data={this.state.data.CohostList}
                    renderItem={({ item }) => (
                        <Img viewStyle={styles.oneImg} supporter={{ uri: item.logo }} url={item.url} />
                    )}
                    keyExtractor={(item) => item.id.toString()} //assign id to each item
                />

                {/*_______________________________________ SPONSORS__________________________________________*/}
                {/*PREMIUM SPONSORS*/}
                <FlatList
                    ListHeaderComponent={/*Renders the title of the List*/
                        <TitleBar ShellIcon={require('../Assets/blue-shell.png')} category='Sponsors' />
                    }
                    data={this.state.data.premiumSponsorsList}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <Img viewStyle={styles.Twoimg} supporter={{ uri: item.logo }} url={item.url} />
                    )}
                    keyExtractor={(item) => item.id.toString()} //assign id to each item
                />

                {/*REGULAR SPONSORS*/}
                <FlatList
                    data={this.state.data.regularSponsorsList}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <Img viewStyle={styles.threeimg} supporter={{ uri: item.logo }} url={item.url} />
                    )}
                    keyExtractor={(item) => item.id.toString()} //assign id to each item
                />

                {/*_______________________________________ PARTNERS__________________________________________*/}
                <FlatList
                    ListHeaderComponent={/*Renders the title of the List*/
                        <TitleBar ShellIcon={require('../Assets/blue-shell.png')} category='Partners' />
                    }
                    data={this.state.data.partnersList}
                    numColumns={4}
                    renderItem={({ item }) => (
                        <Img viewStyle={styles.fourimg} supporter={{ uri: item.logo }} url={item.url} />
                    )}
                    keyExtractor={(item) => item.id.toString()} //assign id to each item
                />
                <Text style={styles.bottomtext}>Made with 🐢, ❤, ☀, ⛱, 🌊, 🌀 by the ShellHacks Team</Text>
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
        marginBottom:'4%'

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
        paddingTop: 20,
        fontSize: 7,
        alignSelf: 'center'
    }
});