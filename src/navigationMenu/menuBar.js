import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Dimensions } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Announcements from '../screen/Announcements';
import StaticHeader from '../navigationMenu/StaticHeader';
import Profile from '../screen/Profile';
import Map from '../screen/Map'
import Sponsors from '../screen/Sponsors.js'
import Schedule from '../screen/Schedule.js'
import Shellicon from '../components/Shellicon.js';
import * as firebase from 'firebase';
import 'firebase/firestore';

//data variables
var profiledata;
var scheduledata;
var anouncementsdata;
var sponsorsdata;
var { screenHeight, screenWidth } = Dimensions.get('window');// returns the height and width of the screen ( excluding android nav bar space)

//firebase setup
const config = {
    apiKey: "AIzaSyBWbOymHoPf67Vh0FFKYOaEYShkA_xyM0I",
    authDomain: "shellhacks-mobile.firebaseapp.com",
    databaseURL: "https://shellhacks-mobile.firebaseio.com",
    projectId: "shellhacks-mobile",
    storageBucket: "shellhacks-mobile.appspot.com",
    messagingSenderId: "264908440050"
};

//login user ononimously
firebase.initializeApp(config);
firebase.auth().signInAnonymously().catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    //console.log(errorCode)
    //console.log(errorMessage)
});

//data fetching ...real time
var database = firebase.firestore();
database.settings({
    timestampsInSnapshots: true
});
database.collection("data").doc("W8hFsfwCEqjsj70wpAZu").onSnapshot(function (doc) {//updates live
    profiledata = doc.data().profile;
    scheduledata = doc.data().schedule;
    anouncementsdata = doc.data().anouncements;
    sponsorsdata = doc.data().sponsors;
});


class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.screenDimensions} >
                <View style={styles.Navbar}>
                    <StaticHeader PageTitle={'Profile'} />
                </View>
                <View style={styles.container} >
                    <Profile profileData={profiledata} />
                </View>
            </View>
        );
    }
}

class SponsorScreen extends Component {
    render() {
        return (
            <View style={styles.screenDimensions} >
                <View style={styles.Navbar} >
                    <StaticHeader PageTitle={'Sponsors'} />
                </View>
                <View style={styles.container} >
                    <Sponsors sponsorsData={sponsorsdata} />
                </View>
            </View>
        );
    }
}

class MapScreen extends Component {
    render() {
        return (
            <View style={styles.screenDimensions} >
                <View style={styles.Navbar} >
                    <StaticHeader PageTitle={'Maps'} />
                </View>
                <View style={styles.container} >
                    <Map />
                </View>
            </View>
        );
    }
}
class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.screenDimensions} >
                <View style={styles.Navbar} >
                    <StaticHeader PageTitle={'Announcements'} />
                </View>
                <View style={styles.container} >
                    <Announcements anouncementsData={anouncementsdata} />
                </View>
            </View>
        );
    }
}
class ScheduleScreen extends Component {
    render() {
        return (
            <View style={styles.screenDimensions} >
                <View style={styles.Navbar} >
                    <StaticHeader PageTitle={'Schedule'} />
                </View>
                <View style={styles.container} >
                    <Schedule scheduleData={scheduledata} />
                </View>
            </View>
        );
    }
}

export default Menu = createBottomTabNavigator({
    Schedule: {
        screen: ScheduleScreen,
        navigationOptions: {
            tabBarLabel: 'Schedule',
            tabBarIcon: ({ tintColor }) => <FontAwesome name="calendar" color={tintColor} size={24} />
        },
    },
    Map: {
        screen: MapScreen,
        navigationOptions: {
            tabBarLabel: 'Map',
            tabBarIcon: ({ tintColor }) => <FontAwesome name="map" color={tintColor} size={24} />

        },
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: <Shellicon />
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => <FontAwesome name="user" color={tintColor} size={24} />,
        },
    },
    Sponsor: {
        screen: SponsorScreen,
        navigationOptions: {
            tabBarLabel: 'Sponsors',
            tabBarIcon: ({ tintColor }) => <FontAwesome name="heart" color={tintColor} size={24} />,

        },
    }
},
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#FF1D8E',
            inactiveTintColor: '#ffffff',
            style: {
                backgroundColor: '#001E7F',
                height: '9%'
            },
            tabStyle: {}
        }
    });

const styles = StyleSheet.create({
    screenDimensions: {// EVERYTHING within the app has this view as a parent...not directly
        flex: 1,
        height: screenHeight,
        width: screenWidth
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',

    },
    Navbar: {
        height: '15%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'transparent',

    },

});
