import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native';
import {
    Card,
    CardItem,
    Body,
} from 'native-base';
import TitleBar from '../Sponsors/Page_contents/TitleBar.js'
var { screenHeight, screenWidth } = Dimensions.get('window'); //assign the values of the screen height and width of a device 
import Bottom_logo from '../../../wlecome/Landing_components/Bottom_logo.js';
export default class Announcements extends React.Component {

    /*ShowHideTextComponentView = () => {
        if (this.state.status == false) {
            this.setState({ status: true })
        }
        else {
            this.setState({ status: false })
        }
    }*/

    constructor() {
        super();
        this.state =
            {

                data: [
                    {
                        "id": 1401847,
                        "location": "PG6-112",
                        "date": "Wednesday, March 22, 2017 8:39 PM",
                        "title": "Need help okay JS?",
                        "bodyText": "Eu officia adipisicing aliquip eu sint et. Voluptate eu consequat Lorem do proident."
                    },

                    {
                        "id": 2301847,
                        "location": "PG6-134",
                        "date": "Wednesday, February 21, 2018 7:45 AM",
                        "title": "Missed stickers?",
                        "bodyText": "Lorem in dolore non anim. Sint eiusmod exercitation do Lorem commodo ullamco deserunt veniam tempor dolor non id fugiat."
                    },
                    {
                        "id": 3301947,
                        "location": "PG6-100",
                        "date": "Friday, June 19, 2015 7:57 PM",
                        "title": "Missed on the stickers?",
                        "bodyText": "Exercitation consectetur id nisi nostrud minim nulla quis dolore amet labore culpa proident ad. Do eu qui sint duis ad do aute et voluptate."
                    },

                    {
                        "id": 4300847,
                        "location": "PG6-09",
                        "date": "Saturday, March 25, 2017 9:36 PM",
                        "title": "Giveaway!",
                        "bodyText": "Voluptate pariatur elit non commodo labore dolor laboris deserunt nulla consectetur. Exercitation amet qui tempor anim sint fugiat velit Lorem."
                    },
                    {
                        "id": 5301847,
                        "mode": "regular",
                        "location": "PG6-980",
                        "date": "Thursday, February 1, 2018 8:55 PM",
                        "title": "Giveaway!",
                        "bodyText": "Excepteur elit ullamco veniam laborum irure ea aliquip consectetur cupidatat incididunt culpa laboris culpa. Est reprehenderit sunt labore proident nisi enim."
                    },
                    {
                        "id": 6395562,
                        "mode": "Emergency",
                        "location": "PG6-200",
                        "date": "Tuesday, June 6, 2017 7:58 PM",
                        "title": "JS workshop",
                        "bodyText": "Lorem labore aliqua reprehenderit velit magna velit veniam tempor aliqua nisi mollit adipisicing tempor. Sunt et amet ad in ipsum Lorem quis eu id ipsum do excepteur."
                    },
                    {
                        "id": 7396231,
                        "mode": "regular",
                        "location": "PG6-500",
                        "date": "Saturday, June 3, 2017 10:11 PM",
                        "title": "Giveaway!",
                        "bodyText": "Incididunt elit minim tempor anim sint sunt deserunt cillum proident laboris fugiat elit labore. In proident minim elit enim tempor anim laborum voluptate tempor."
                    },
                    {
                        "id": 8672499,
                        "mode": "regular",
                        "location": "PG6-600",
                        "date": "Thursday, July 6, 2017 7:07 AM",
                        "title": "Got tired?",
                        "bodyText": "Pariatur eiusmod dolore do deserunt. Fugiat nulla consequat voluptate minim nisi magna enim cupidatat aliqua consequat esse amet."
                    },
                    {
                        "id": 9221245,
                        "mode": "regular",
                        "location": "PG6-500",
                        "date": "Monday, August 24, 2015 7:52 PM",
                        "title": "Need help with JS?",
                        "bodyText": "Aute exercitation fugiat sit est exercitation aliquip pariatur qui enim commodo labore veniam quis officia. Non irure ad dolor elit."
                    },
                    {
                        "id": 9876543987,
                        "location": "PG6-112",
                        "date": "Wednesday, March 22, 2017 8:39 PM",
                        "title": "EH EH welcome!",
                        "bodyText": "Eu officia adipisicing aliquip eu sint et. Voluptate eu consequat Lorem do proident."
                    },
                    {
                        "id": 9176543980,
                        "location": "PG6-112",
                        "date": "Wednesday, March 22, 2017 8:39 PM",
                        "title": "CATSSSSSSSSSS?",
                        "bodyText": "Eu officia adipisicing aliquip eu sint et. Voluptate eu consequat Lorem do proident."
                    },
                    {
                        "id": 9806543087,
                        "location": "PG6-112",
                        "date": "Wednesday, March 22, 2017 8:39 PM",
                        "title": "Need help with JS?",
                        "bodyText": "Eu officia adipisicing aliquip eu sint et. Voluptate eu consequat Lorem do proident."
                    },
                    {
                        "id": 9976543987,
                        "location": "PG6-112",
                        "date": "Wednesday, March 22, 2017 8:39 PM",
                        "title": "Need help JS?",
                        "bodyText": "Eu officia adipisicing aliquip eu sint et. Voluptate eu consequat Lorem do proident."
                    },
                    {
                        "id": 9830543987,
                        "location": "PG6-112",
                        "date": "Wednesday, March 22, 2017 8:39 PM",
                        "title": "Do you even know JS bro?",
                        "bodyText": "Eu officia adipisicing aliquip eu sint et. Voluptate eu consequat Lorem do proident."
                    },
                    {
                        "id": 9376543987,
                        "location": "PG6-112",
                        "date": "Wednesday, March 22, 2017 8:39 PM",
                        "title": "Redbulls please",
                        "bodyText": "Eu officia adipisicing aliquip eu sint et. Voluptate eu consequat Lorem do proident."
                    },
                    {
                        "id": 9806543987,
                        "location": "PG6-112",
                        "date": "Wednesday, March 22, 2017 8:39 PM",
                        "title": "I was debugged at 2:00AM",
                        "bodyText": "Eu officia adipisicing aliquip eu sint et. Voluptate eu consequat Lorem do proident."
                    }


                ]
            }

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
                                            <Text style={styles.smallText} >{item.date}</Text>
                                            <Text style={styles.smallText} >{item.location}</Text>
                                            <Text style={styles.bodyText} >{item.bodyText}</Text>
                                        </Body>
                                    }
                                </CardItem>
                            </Card>

                            {/*PLACE HOLDER CARD FOR TESTING DIFFERENT SHELL ICON COLORS..........NEED DATA LOGICS*/}
                            <TitleBar ShellIcon={require('../Assets/teal-shell.png')} category={item.title} />
                            <Card style={styles.card}>
                                <CardItem style={styles.cardItem}>
                                    {
                                        <Body>
                                            <Text style={styles.smallText} >{item.date}</Text>
                                            <Text style={styles.smallText} >{item.location}</Text>
                                            <Text style={styles.bodyText} >{item.bodyText}</Text>
                                        </Body>
                                    }
                                </CardItem>
                            </Card>
                            {/*PLACE HOLDER CARD END */}
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
                        <Bottom_logo Logo={require('../Assets/UPETeal.png')} />
                        <Bottom_logo />{/*white space*/}
                        <Bottom_logo />
                        <Bottom_logo Logo={require('../Assets/SpotifyTeal.png')} />
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
        marginBottom:'4%'

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