import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

<<<<<<< HEAD
import Announcements from './src/Components/MainPages/Interface_Contents/Announcements/Announcements.js';
import Interface from './src/Components/MainPages/Interface/Header/Interface.js';
// import MenuBar from './src/Components/MainPages/Interface/MenuBar/menuBar.js';
=======
import Interface from './src/Components/MainPages/Interface/Interface.js'
import AppMenu from './AppMenuTest.js'
import Landing from './src/Components/wlecome/Landing_components/Landing.js';
import Menu from './src/Components/MainPages/Interface/MenuBar/menuBar.js'
>>>>>>> master

export default class App extends Component {
  render() {
    return (
<<<<<<< HEAD
        <View style={styles.container}>
            <Interface />
            <Announcements />
=======
      //Change color of status bar to white
      <View style={styles.container}>
        {/*<StatusBar barStyle="light-content"/>*/}
        {/*<Interface style={styles.container} />*/}
        {/*<AppMenu style={{backgroundColor: 'blue'}}/>*/}
        <Menu />
>>>>>>> master
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
