import React from 'react';
import { Container, Header, Footer, FooterTab, Button, Content, Text } from 'native-base';
import { View, Alert, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { WebView } from 'react-native-webview';
var s = require('../assets/css/styles');
import more from '../assets/icons/more.png';
import home from '../assets/icons/home.png';
import announce from '../assets/icons/announce.png';
import calendar from '../assets/icons/calendar.png';
import chat1 from '../assets/icons/chat1.png';
import doc from '../assets/icons/doc.png';
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

  async openChat(phone) {
    await InAppBrowser.close();
    try {
      const url = 'https://us-central1-smiledental-273502.cloudfunctions.net/loadChat?uid='+ phone + '&user_name=test';
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'close',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'fullScreen',
          //modalTransitionStyle: 'partialCurl',
          modalEnabled: true,
          enableBarCollapsing: true,
          // Android Properties
          showTitle: true,
          toolbarColor: '#6200EE',
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
    AsyncStorage.getItem('userData').then( async (res)=>{
      this.openChat(JSON.parse(res).phone);
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
              style={s.moreIcon}
              onPress={() => this.setState({ active: !this.state.active })}
              activeOpacity={1}>
              <Image source={more}/>
            </TouchableOpacity>
            {this.state.active && 
              <View style={s.shadowBtn}>
                <TouchableOpacity
                  style={s.profileBtn}
                  onPress={() =>this.onProfile()}
                  activeOpacity={1}>
                  <Text style={s.ft15RegularBlack}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={s.formBtn}
                  onPress={() =>this.onWeb()}
                  activeOpacity={1}>
                  <Text style={s.ft15RegularBlack}>Form</Text>
                </TouchableOpacity>
              </View>
            }
          </View>            
        </Header>
        <Container></Container>
        <Footer>
          <FooterTab style={s.footerContent}>
            <Button onPress={this.onHome}><Image source={home} style={s.icon30}/></Button>
            <Button onPress={this.onAnnounce}><Image source={announce} style={s.icon30}/></Button>
            <Button onPress={this.onCalendar}><Image source={calendar} style={s.icon30}/></Button>
            <Button onPress={this.onChat}><Image source={chat1} style={s.icon30}/></Button>
            <Button onPress={this.onDoc}><Image source={doc} style={s.icon30}/></Button>
          </FooterTab>
        </Footer>
      </Container >
    );
  }
}

const styles = StyleSheet.create({

  
})
