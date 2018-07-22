import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Announcements from '../../Interface_Contents/Announcements/Announcements';
import Interface from '../Header/Interface';
import Profile from '../../Interface_Contents/Profile/Profile';
import Map from '../../Interface_Contents/Map/Map.js'
import Sponsors from '../../Interface_Contents/Sponsors/Sponsors.js'
import Schedule from '../../Interface_Contents/Schedule/Schedule.js'

 
//currently place holder class
class ProfileScreen extends Component{
    render(){
        return(
            <View style = {{flex:1}} >
                <View style = {styles.Navbar}>
                <Interface PageTitle ={'Profile'}/>
                </View>
                <View style = {styles.container} >
                   <Profile/>
                </View>
            </View>
        );
    }
}

//currently place holder class
class SponsorScreen extends Component{
    render(){
        return(
            <View style = {{flex:1}} >
                <View style = {styles.Navbar} >
                <Interface PageTitle ={'Sponsors'}/>
                </View>
                <View style = {styles.container} >
                    <Sponsors/>
                </View>
            </View>
        );
    }
} 

//currently place holder class
class MapScreen extends Component{
    render(){
        return(
            <View style = {{flex:1}} >
                <View style = {styles.Navbar} >
                 <Interface  PageTitle ={'Maps'}/>
                </View>
                <View style = {styles.container} >
                    <Map/>
                </View>
            </View>
        );
    }
}
class HomeScreen extends Component{
    render(){
        return(
            <View style = {{flex:1}} >
                <View style = {styles.Navbar} >
                <Interface PageTitle ={'Announcements'}/>
                </View>
                <View style = {styles.container} >
                   <Announcements/>
                </View>
            </View>
        );
    }
}
//currently place holder class
class ScheduleScreen extends Component{
    render(){
        return(
            <View style = {{flex:1}} >
                <View style = {styles.Navbar} >
                 <Interface PageTitle ={'Schedule'}/>
                </View>
                <View style = {styles.container} >
                   <Schedule/>
                </View>
            </View>
        );
    }
} 

export default Menu  = createBottomTabNavigator({
    Schedule:{
        screen: ScheduleScreen,
        navigationOptions:{
            tabBarLabel:'Schedule',
            tabBarIcon:<FontAwesome name = "calendar" color={'white'} size ={24}/>
        }, 
    },
    Map:{
        screen: MapScreen,
        navigationOptions:{
            tabBarLabel:'Map',
            tabBarIcon: (
                 <FontAwesome name = "map" color={'white'} size ={24}/>            
            )
        }, 
    },
    Home:{
        screen: HomeScreen,
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon:<FontAwesome name = "home" color={'white'} size ={30}/>
        }, 
    },
    Profile:{
        screen: ProfileScreen,
        navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon:<FontAwesome name = "user" color={'white'} size = {24} />,
        },
    },
    Sponsor:{
        screen: SponsorScreen,
        navigationOptions:{
            tabBarLabel:'Sponsor',
            tabBarIcon:<FontAwesome name = "heart" color={'white'} size ={24}/>,
        }, 
    }
},
{
    initialRouteName: 'Home',
    tintColor:'white',
    tabBarOptions:{
        style:{
            backgroundColor: 'rgb(38,0,153)',
        },
    },
});

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'

    },
    Navbar:{
        height: '15%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'transparent',
        
    },

});
