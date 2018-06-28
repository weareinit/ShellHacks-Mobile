import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Interface from './src/Components/MainPages/Interface/Interface.js'
import AppMenu from './AppMenuTest.js'
import Landing from './src/Components/wlecome/Landing_components/Landing.js';
import Menu from './src/Components/MainPages/Interface/MenuBar/menuBar.js'

export default class App extends Component {
  render() {
    return (
      //Change color of status bar to white
      <View style={styles.container}>
        {/*<StatusBar barStyle="light-content"/>*/}
        {/*<Interface style={styles.container} />*/}
        {/*<AppMenu style={{backgroundColor: 'blue'}}/>*/}
        <Menu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
