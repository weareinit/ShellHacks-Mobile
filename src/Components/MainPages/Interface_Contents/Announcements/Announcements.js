import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
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


export default class Announcements extends React.Component {
    constructor() {
        super();
        this.state = {
            status: false
        }
    }

    ShowHideTextComponentView = () => {
        if (this.state.status == false) {
            this.setState({ status: true })
        }
        else {
            this.setState({ status: false })
        }
    }
    render() {
        return (

            <Container style={styles.container}>
                <View style = {{flex:1}} >
                    <Content>
                        <Card style={styles.card}>
                            <CardItem header style={styles.title} >
                               <Text style={styles.textContent} >Announcement Headline</Text>
                                
                            </CardItem>
                            <CardItem style={styles.cardItem}>
                            {
                                // Pass any View or Component inside the curly bracket.
                                // Here the ? Question Mark represent the ternary operator.
                    
                                <Body>
                                    <Text style={styles.textContent2}>01/20 1:00 PM - 12:00 PM </Text>
                                    <Text style={styles.textContent3}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies eros vitae efficitur volutpat. Nam non neque eget erat finibus tincidunt a non justo. Integer pretium faucibus erat, ac mattis nulla dictum eget. 
                                    </Text>

                                </Body> 
                            }
                            </CardItem>
                        </Card>
                    </Content>
                </View>
            </Container>
        );
    }
}

   const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            marginLeft: "auto",
            marginRight: "auto",
            
            
       },

       card: {
           width: 310,
       },

       cardItem: {
           backgroundColor: '#DCDCDC',
       },

       icon: {
           width: 30,
           height: 30,
           
       },

       expand: {
           
           
       },

       title: {
           backgroundColor: 'rgba(37, 30, 129, 1)',
           flexDirection: 'row',
       },


       title2: {
           marginTop: -5,
           padding: 5,
           backgroundColor: 'rgba(37, 30, 129, 1)',
           
       },

       location: {
           marginRight: 0,
       },

       textContent: {
           fontSize: 18,
           color: 'white',
           marginLeft: 10,
           marginRight: 5,
           fontWeight: 'bold',
       },

       textContent2: {
           fontSize: 11,
           color: 'black',
           
       },

       textContent3: {
           fontSize: 14,
           color: 'black',
           paddingTop: 6,
       },
   });