import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Landing from './src/Components/wlecome/Landing_components/Landing'
import Organizers from './Organizers'
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       
        <Organizers />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
