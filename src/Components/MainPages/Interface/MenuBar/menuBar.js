import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Dimensions } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Announcements from '../../Interface_Contents/Announcements/Announcements';
import StaticHeader from '../Header/StaticHeader';
import Profile from '../../Interface_Contents/Profile/Profile';
import Map from '../../Interface_Contents/Map/Map.js'
import Sponsors from '../../Interface_Contents/Sponsors/Sponsors.js'
import Schedule from '../../Interface_Contents/Schedule/Schedule.js'
import Shellicon from './Shellicon.js';

var { screenHeight, screenWidth } = Dimensions.get('window');// returns the height and width of the screen ( excluding android nav bar space)

class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.screenDimensions} >
                <View style={styles.Navbar}>
                    <StaticHeader PageTitle={'Profile'} />
                </View>
                <View style={styles.container} >
                    <Profile />
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
                    <Sponsors />
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
                    <Announcements />
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
                    <Schedule />
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
    screenDimensions: {// EVERYTHING within the app has this view as a parent... possibly not directly
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
