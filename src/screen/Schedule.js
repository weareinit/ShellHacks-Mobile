import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {
    Card,
    CardItem,
    Body,
} from 'native-base';
const barColor = { navyBar: '#001E7F', pinkBar: '#FF1D8E', tealBar: '#0FD3CD' }// to change the color of the title bar based on upcoming, cureent .....

export default class Schedule extends React.Component {
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
                        "bodyText": "However to properly extract this to a <Container> component could allow you to apply common padding logic later on. You might even have to apply different paddings depending on device orientation or screen resolution/pixel density.Aute exercitation fugiat sit est exercitation aliquip pariatur qui enim commodo labore veniam quis officia. Non irure ad dolor elit."
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
        //NEED TO ADD LOGICS TO SORT EVENTS BY CARTEGORIES ->>>>>>>>>>> UPCOMING, PAST AND CURRENT 
        //_____________________________________________________________________________________________________________________________________________
        return (

            <View style={styles.container}>
                <FlatList style={styles.cardItem}
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.titleBar}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                            </View>
                            <Card style={styles.card}>
                                <CardItem style={styles.cardItem}>
                                    {
                                        <Body>
                                            <Text style={styles.textContent2} >{item.date}</Text>
                                            <Text style={styles.textContent2} >{item.location}</Text>
                                            <Text style={styles.textContent3} >{item.bodyText}</Text>
                                        </Body>

                                    }
                                </CardItem>
                            </Card>
                            {/*PLACE HOLDER CARD FOR TESTING DIFFERENT BAR COLORS..........NEED DATA LOGICS*/}
                            <View style={styles.titleBar} style={{
                                backgroundColor: barColor.navyBar, height: 60,
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                                marginTop: 20,
                                borderTopStartRadius: 2,
                                borderTopEndRadius: 2
                            }}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                            </View>
                            <Card style={styles.card}>
                                <CardItem style={styles.cardItem}>
                                    {
                                        <Body>
                                            <Text style={styles.textContent2} >{item.date}</Text>
                                            <Text style={styles.textContent2} >{item.location}</Text>
                                            <Text style={styles.textContent3} >{item.bodyText}</Text>
                                        </Body>

                                    }
                                </CardItem>
                            </Card>
                            <View style={styles.titleBar} style={{
                                backgroundColor: barColor.tealBar, height: 60,
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                                marginTop: 20,
                                borderTopStartRadius: 2,
                                borderTopEndRadius: 2
                            }}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                            </View>
                            <Card style={styles.card}>
                                <CardItem style={styles.cardItem}>
                                    {
                                        <Body>
                                            <Text style={styles.textContent2} >{item.date}</Text>
                                            <Text style={styles.textContent2} >{item.location}</Text>
                                            <Text style={styles.textContent3} >{item.bodyText}</Text>
                                        </Body>

                                    }
                                </CardItem>
                            </Card>
                            {/*PLACE HOLDER END*/}
                        </View>
                    )}
                    keyExtractor={item => item.id.toString()} //assign id to each item
                >
                </FlatList>
            </View >

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: '5%',
        width: '90%'


    },

    card: {
        width: '100%',
        alignItems: 'center',
        marginTop: 0,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        backgroundColor: '#F4F4F4'
    },

    cardItem: {
        backgroundColor: 'transparent',
        marginBottom: '3%'

    },


    textContent2: {
        fontSize: 12,
        color: 'black',
        flex: 1,
        flexDirection: 'row'

    },
    titleBar: {
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        borderTopStartRadius: 2,
        borderTopEndRadius: 2,
        backgroundColor: barColor.pinkBar

    },
    title: {
        fontSize: 20,
        color: 'white',
    },
    textContent3: {
        fontSize: 16,
        color: 'black',
        paddingTop: 6,
    },
    bottomlogo: {
        height: 100,
        width: 150
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
});