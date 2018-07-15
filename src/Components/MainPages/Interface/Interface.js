import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground
} from 'react-native';

//BoilerPlate for the Header of all the pages
export default class Interface extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../wlecome/images/Miami_Beach_Pink_Header_Background.png')}
          style={styles.headerBackground}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Announcements</Text>
            </View>
        </ImageBackground>
        <View style={styles.InterfaceComponent}>
            <Text>Heleo</Text>
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center'
  },
  header: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
},
headerBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingLeft: 10
  },
headerText:{
    fontSize: 32,
    color: '#fff',
    paddingLeft: 10,
    marginBottom: -9
},
InterfaceComponent: {
    backgroundColor: '#fff',
    flex: 5
},
});
