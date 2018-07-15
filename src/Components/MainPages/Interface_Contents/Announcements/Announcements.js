import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList, Button, Alert } from 'react-native';
import {
    Image, 
    Container, 
    Header, 
    Content, 
    Card, 
    CardItem, 
    Thumbnail, 
    Body, 
    Left, 
    Right,
    Icon
} from 'native-base';

//const data = require('../JSON/Dummy_Notifications.json');

export default class Announcements extends React.Component {
    /*
     * constructor() {
        super();
        this.state = {
            status: false
            // selectedIndex: 1,
        }
        //this.updateIndex = this.updateIndex.bind(this)
    }
    */

    //updateIndex(index) {
      //  this.setState({
       //     selectedIndex: index
      //  });
    //}

    ShowHideTextComponentView = () => {
        if (this.state.status == false) {
            this.setState({ status: true })
        }
        else {
            this.setState({ status: false })
        }
    }

    constructor() {
        super();
        this.state =
            {

                data: [
                    {


                        "date": "Wednesday, March 22, 2017 8:39 PM",
                        "title": "Need help with JS?",
                        "bodyText": "Eu officia adipisicing aliquip eu sint et. Voluptate eu consequat Lorem do proident."
                    },

                    {

                        "date": "Wednesday, February 21, 2018 7:45 AM",
                        "title": "Missed on the stickers?",
                        "bodyText": "Lorem in dolore non anim. Sint eiusmod exercitation do Lorem commodo ullamco deserunt veniam tempor dolor non id fugiat."
                    },
                    {

                        "date": "Friday, June 19, 2015 7:57 PM",
                        "title": "Missed on the stickers?",
                        "bodyText": "Exercitation consectetur id nisi nostrud minim nulla quis dolore amet labore culpa proident ad. Do eu qui sint duis ad do aute et voluptate."
                    },

                    {

                        "date": "Saturday, March 25, 2017 9:36 PM",
                        "title": "Giveaway!",
                        "bodyText": "Voluptate pariatur elit non commodo labore dolor laboris deserunt nulla consectetur. Exercitation amet qui tempor anim sint fugiat velit Lorem."
                    },
                    {
                        "id": 7301847,
                        "mode": "regular",
                        "date": "Thursday, February 1, 2018 8:55 PM",
                        "title": "Giveaway!",
                        "bodyText": "Excepteur elit ullamco veniam laborum irure ea aliquip consectetur cupidatat incididunt culpa laboris culpa. Est reprehenderit sunt labore proident nisi enim."
                    },
                    {
                        "id": 8395562,
                        "mode": "Emergency",
                        "date": "Tuesday, June 6, 2017 7:58 PM",
                        "title": "JS workshop",
                        "bodyText": "Lorem labore aliqua reprehenderit velit magna velit veniam tempor aliqua nisi mollit adipisicing tempor. Sunt et amet ad in ipsum Lorem quis eu id ipsum do excepteur."
                    },
                    {
                        "id": 6396231,
                        "mode": "regular",
                        "date": "Saturday, June 3, 2017 10:11 PM",
                        "title": "Giveaway!",
                        "bodyText": "Incididunt elit minim tempor anim sint sunt deserunt cillum proident laboris fugiat elit labore. In proident minim elit enim tempor anim laborum voluptate tempor."
                    },
                    {
                        "id": 8672499,
                        "mode": "regular",
                        "date": "Thursday, July 6, 2017 7:07 AM",
                        "title": "Missed on the stickers?",
                        "bodyText": "Pariatur eiusmod dolore do deserunt. Fugiat nulla consequat voluptate minim nisi magna enim cupidatat aliqua consequat esse amet."
                    },
                    {
                        "id": 7221245,
                        "mode": "regular",
                        "date": "Monday, August 24, 2015 7:52 PM",
                        "title": "Need help with JS?",
                        "bodyText": "Aute exercitation fugiat sit est exercitation aliquip pariatur qui enim commodo labore veniam quis officia. Non irure ad dolor elit."
                    },

                    
                ]
            }
        
    }

    /*
    json_function = () => {

        var json_fragment = data.id;
        var json_fragment2 = data.type;

        Alert.alert(
            'Json Text',
            console.log(json_fragment)
        );
    }
    */

    render() {

        // var json = require('../JSON/Dummy_Notifications.json');

        return (

            <View style={styles.container}>
                <FlatList style={styles.cardItem}
                        showsVerticalScrollIndicator={false}
                        data={this.state.data}
                        renderItem={({ item }) =>
                            <View>

                            <Content>
                                <Card style={styles.card}>
                                    <CardItem header style={styles.title} >
                                        <Thumbnail style={styles.icon} source={require('../Assets/pink-shell.png')} />
                                        <Text style={styles.textContent} >{item.title}</Text>
                                        <Right>
                                        <TouchableOpacity style={styles.expand} onPress={this.ShowHideTextComponentView}>
                                            <Thumbnail style={styles.icon} source={require('../Assets/keyboard-right-arrow-button.png')} />
                                        </TouchableOpacity>
                                        </Right>
                                    </CardItem>

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
                            </Content>
                            
                            </View>
                        }
                        >
                     </FlatList>
                </View>
        );
    }
}

   const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            // paddingHorizontal: 10,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
            marginBottom: 20
            
            
       },

       card: {
           width: 310
           
       },

       cardItem: {
          // backgroundColor: '#DCDCDC', // grey background
           borderRadius: 10
       },

       icon: {
           width: 30,
           height: 30,
           
       },

       expand: {
           marginRight: -10,
           right: 0
       },

       title: {
           backgroundColor: 'rgba(37, 30, 129, 1)',
           // height: 40,
           flexDirection: 'row',
       },

       textContent: {
           fontSize: 20,
           color: 'white',
           marginLeft: 10,
           marginRight: 5,
           fontWeight: 'bold',
       },

       textContent2: {
           fontSize: 12,
           color: 'black',
           flex: 1,
           flexDirection: 'row'
           
       },

       textContent3: {
           fontSize: 16,
           color: 'black',
           paddingTop: 6,
       },
   });