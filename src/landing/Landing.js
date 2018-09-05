import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';

import Logo from '../components/Logo.js'
import Register from '../components/Register.js'
import Bottom_logo from '../components/Bottom_logo.js';
import * as firebase from 'firebase';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundLoaded: false,
    }
  }


  goToMain = () => {
    this.props.navigation.navigate('Menu');
  }

  componentWillMount() {
    let goToMainPage = () => { this.props.navigation.navigate('Menu'); }
    setTimeout(this.goToMain, 4000);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../Assets/WelcomeBackground.png')}
          style={styles.img}>
          <Logo />
          <Bottom_logo Logo={require('../Assets/loadAnimation.gif')} />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  img: {
    flex: 1,//image background will resize itself no matter screen size
    width: '100%',
    height: '100%',
  }
});
