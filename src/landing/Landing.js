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
    setTimeout(this.goToMain,5000);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../Assets/WelcomeBackground.png')}
          style={styles.img}> 
          <Logo />
          <View style={styles.BottomLogos}>
            <Bottom_logo Logo={require('../Assets/UPEwhite.png')} />
            <Bottom_logo />
            <Bottom_logo Logo={require('../Assets/SpotifyWhite.png')} />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  img: {
    flex: 1,//image background will resize itself no matter screen size
    width: '100%',
    height: '100%',
  },
  BottomLogos: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '9%',
    width: '97%',
    marginRight: 50,
    


  }
});
