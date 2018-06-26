import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Announcements from './src/Components/MainPages/Interface_Contents/Announcements/Announcements.js';
import Interface from './src/Components/MainPages/Interface/Interface.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Interface/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
