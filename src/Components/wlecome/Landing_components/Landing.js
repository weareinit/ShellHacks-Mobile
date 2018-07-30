import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text
} from 'react-native';

import Logo from '../Login_components/Logo.js'
import Login from '../Login_components/Login.js'
import Register from '../Login_components/Register.js'
import Bottom_logo from '../Landing_components/Bottom_logo.js';
import * as firebase from 'firebase';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      backgroundLoaded: false,

    }
    // this.childChange = this.childChange.bind(this);
  }

  childChange = (newState) => {
    this.setState({
      login: newState
    })
  }
  goToMain = ()=>{
    this.props.navigation.navigate('Menu');
  }
  
  componentWillMount() {
    let goToMainPage = ()=>{ this.props.navigation.navigate('Menu'); }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        goToMainPage();
      }
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    let display = !this.state.login ? <Register childChange={this.childChange}/> : <Login childChange={this.childChange} goToMain = {this.goToMain}/>;
    return (

      <View style={styles.container}>
        <ImageBackground
          source={require('../images/WelcomeBackground.png')}
          style={styles.img}> {/*background View*/}
          <Logo />
          {display}
          <View style={styles.BottomLogos}>
            <Bottom_logo Logo={require('../images/UPETeal.png')} />
            <Bottom_logo/>
            <Bottom_logo/>
            <Bottom_logo Logo={require('../images/SpotifyTeal.png')} />
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
    paddingLeft: 10  //only applies to bottom logos
  },
  BottomLogos: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '9%',
    width:'97%',
    marginRight: 50,
    //backgroundColor: '#00207e',


  }
});
