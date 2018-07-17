import React, { Component } from 'react';
import {
  StyleSheet,
  View, Button, Alert
} from 'react-native';
import Map from './src/Components/MainPages/Interface_Contents/Map/Map';
import TitleBar from './src/Components/MainPages/Interface_Contents/Sponsors/Page_contents/TitleBar';
import Sponsors from './src/Components/MainPages/Interface_Contents/Sponsors/Sponsors';
import Profile from './src/Components/MainPages/Interface_Contents/Profile/Profile';
import QRgenerator from './src/Components/MainPages/Interface_Contents/Profile/QRgenerator.js'
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <QRgenerator />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
