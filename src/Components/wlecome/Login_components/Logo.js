import React, {Component} from 'react';
import { StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

export default class Logo extends Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={{flex: 1}} />
                <Image style={styles.imageStyle} source={{uri: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_photos/000/529/643/datas/full_width.png'}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  imageStyle:{
      flex: 2,
      resizeMode: 'contain',
      width: 200,
      height: 200,
  }

});