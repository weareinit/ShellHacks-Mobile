import React from 'react';
import { createStackNavigator} from 'react-navigation';
import Landing from './landing/Landing.js';
import Menu from './navigationMenu/menuBar.js';
import * as firebase from 'firebase';

  
const mainMenu = {
    screen: Menu,
    navigationOptions: {
        header: null
    }
}

const landing = {
    screen: Landing,
    navigationOptions: {
        header: null
    }
}

const RouteConfig = {
    initialRouteName: 'Landing'
}
const AppNavigator = createStackNavigator({
    Landing: landing,
    Menu: mainMenu
},RouteConfig);

export default AppNavigator;