import React from 'react';
import { View, Image, Dimensions, StyleSheet, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
var s = require('../assets/css/styles');
import Logo from '../assets/logo.png';
import Splash from '../assets/splash.png';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const screen = Dimensions.get('screen');
export default class SplashScreen extends React.Component {

  componentDidMount() {
    console.log("Dimensions");
    console.log(deviceWidth);
    console.log(deviceHeight);
    console.log(screen.width);
    console.log(screen.height);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    AsyncStorage.getItem('userData').then((res)=>{
      if (res =="logout" || !res) {
        this.props.navigation.navigate('Login');
      } else {
        this.props.navigation.navigate('Home');
      }
    });
  }

  handleBackButtonClick = () => {
    // this.props.navigation.goBack(null);
    return true;
  };

  render() {
    return (
      <View style={s.loader}>
        <Image
          source={Splash}
          style={ {width: screen.width, height: screen.height}   }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ImageIconStyle_logo_: {
    padding: 12,
    margin: 5,
    height: deviceHeight,
    width: deviceWidth,
    resizeMode: 'stretch',
  },
  
})
