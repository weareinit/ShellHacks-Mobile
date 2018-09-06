import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {
    Card,
    CardItem,
    Body,
} from 'native-base';
import Timestamp from 'react-timestamp';
const barColor = { navyBar: '#001E7F', pinkBar: '#FF1D8E', tealBar: '#0FD3CD' }// to change the color of the title bar based on upcoming, cureent .....

export default class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.scheduleData,
        }
    }

    render() {
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
                                            <Timestamp style={styles.textContent2} time={item.date.seconds} component={Text} />
                                            <Text style={styles.textContent2} >{item.location}</Text>
                                            <Text style={styles.textContent3} >{item.body}</Text>
                                        </Body>

                                    }
                                </CardItem>
                            </Card>
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
        flexDirection: 'row',
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