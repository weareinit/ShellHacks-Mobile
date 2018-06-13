import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Landing from './src/Components/wlecome/Landing_components/Landing';
import MenuBar from './src/Components/MainPages/Interface/MenuBar/menuBar';
import FooterTabsBadgeExample from './src/Components/FooterTabsBadgeExample';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <FooterTabsBadgeExample/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
