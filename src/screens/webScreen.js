import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Header } from 'native-base';
import backBtn from '../assets/icons/backBtn.png';
import { WebView } from 'react-native-webview';
var s = require('../assets/css/styles');

export default class WebScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <Container style={s.container}>
        <Header style={{ justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#ffffff' }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            activeOpacity={1}>
            <Image source={backBtn} style={s.backIcon}/>
          </TouchableOpacity>
        </Header>
        <WebView source={{ uri: 'https://reactnative.dev/' }} style={{marginTop: 1}}/>
      </Container >
    );
  }
}

const styles = StyleSheet.create({

  loader: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
})
