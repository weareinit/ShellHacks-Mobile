import React,{Component,PropTypes} from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class Welcome_parent extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>This is the parent welcome screen </Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
