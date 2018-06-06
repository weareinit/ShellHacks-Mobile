import React, {Component} from 'react';
import { StyleSheet,
  Text,
  View
} from 'react-native';

import Logo from '../Login_components/Logo.js'
import Login from '../Login_components/Login.js'
import Register from '../Login_components/Register.js'

export default class Landing extends Component{
  constructor(props){
    super(props);
    this.state ={
      login: false
    }
   // this.childChange = this.childChange.bind(this);
  }

  childChange= (newState)=>{
    this.setState({
      login : newState
    })
  }
    render(){
      let display = !this.state.login ? <Register childChange={this.childChange} /> : <Login childChange={this.childChange}/>;
      return(
        <View style={styles.container}>
          <Logo />
          {display}
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff198f'
  },

});
