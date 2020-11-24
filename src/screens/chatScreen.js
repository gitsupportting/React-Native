import React from 'react';
import { Container, Header, Footer, FooterTab, Button, Content, Text } from 'native-base';
import { Asset, View, Alert, TouchableOpacity, StyleSheet, Image, CameraRoll } from 'react-native';
import Icon from "react-native-feather1s"
import AsyncStorage from '@react-native-community/async-storage';
var s = require('../assets/css/styles');

import InAppBrowser from 'react-native-inappbrowser-reborn';

export default class ChatScreen extends React.Component {
  
  constructor(props) {

    super(props);
    this.state = {
      active: false
    }
  }

  _retrievePhone = async () => {
    var phone = null
    try {
      const value = await AsyncStorage.getItem('userData');
      if (value !== null) {
        // We have data!!
        phone = JSON.parse(value).phone;
      }
    } catch (error) {
      // Error retrieving data
    }
    return phone;
  };

  async openChat(phone, patientFullName) {
    await InAppBrowser.close();
    let phoneEncoded = phone.replace("+", "%2B");

    console.log(phoneEncoded);
    try {
      const queryString = escape("uid=" + phone + "&user_name=test");
      //const baseURL = 'https://us-central1-smiledental-273502.cloudfunctions.net/loadChat?uid=' + escape(phone) + "&user_name=test";
      //const url = baseURL;
      const url = 'https://us-central1-smiledental-273502.cloudfunctions.net/loadChat?uid='+ phoneEncoded + '&user_name=' + patientFullName;
      console.log(url);
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'close',
          preferredBarTintColor: '#FFFFFF',
          preferredControlTintColor: 'black',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'fullScreen',
          //modalTransitionStyle: 'partialCurl',
          modalEnabled: false,
          enableBarCollapsing: true,
          // Android Properties
          showTitle: true,
          toolbarColor: '#FFFFFF',
          secondaryToolbarColor: 'black',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right'
          },
          headers: {
            'my-custom-header': 'my custom header value'
          }
        });
        // pop back to home on done
        this.onHome();
        //Alert.alert(JSON.stringify(result))
      }
      else Linking.openURL(url)
    } catch (error) {
      Alert.alert(error.message)
    }
  }


  async componentDidMount() {
    AsyncStorage.getItem('userData').then( async (res)=> {
      let userData      = JSON.parse(res);
      let userFullname  = userData.firstName + "\ " + userData.lastName;
      userFullname      = escape(userFullname);
      let phone         = userData.phone;
      this.openChat(phone, userFullname);
      //this.openChatLocal();
    });
  }

  onHome =()=> {
    this.props.navigation.navigate('Home', {});
  }

  onAnnounce =()=> {
    this.props.navigation.navigate('Announce', {});
  }

  onCalendar =()=> {
    this.props.navigation.navigate('Calendar', {});
  }

  onChat =()=> {
    this.props.navigation.navigate('Chat', {});
  }

  onDoc =()=> {
    this.props.navigation.navigate('Doc', {});
  }

  onProfile =()=> {
    this.setState({
      active: false
    });
    this.props.navigation.navigate('ProfileDetail')
  }

  onWeb =()=> {
    this.setState({
      active: false
    });
    this.props.navigation.navigate('Web');
  }

  render() {
    return (
      <Container style={s.container}>
        <Header style={s.headerContent}>
          <View style={s.spaceBetween}>
            <TouchableOpacity
              style={s.checkInEm}
              activeOpacity={1}>
            </TouchableOpacity>
            <Text style={s.title}>Chat</Text>
            <TouchableOpacity
              style={s.checkInEm}>
            </TouchableOpacity>
          </View>            
        </Header>
        <Container></Container>
        <Footer>
          <FooterTab style={s.footerContent}>
          <Button onPress={this.onHome}>
              <Icon name="home" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
            <Button onPress={this.onAnnounce}>
              <Icon name="flag" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
            <Button onPress={this.onCalendar}>
              <Icon name="calendar" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
            <Button onPress={this.onChat}>
              <Icon name="message-circle" size={30} color={'rgba(37,175,217, 1)'} />
            </Button>
            <Button onPress={this.onDoc}>
              <Icon name="info" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
          </FooterTab>
        </Footer>
      </Container >
    );
  }
}

const styles = StyleSheet.create({

  
})
