import React from 'react';
import { Container, Header, Footer, FooterTab, Button, Text } from 'native-base';
import { View, TouchableOpacity, StyleSheet, Image, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';

var s = require('../assets/css/styles');
import more from '../assets/icons/more.png';
import home1 from '../assets/icons/home1.png';
import announce from '../assets/icons/announce.png';
import calendar from '../assets/icons/calendar.png';
import chat from '../assets/icons/chat.png';
import doc from '../assets/icons/doc.png';

export default class HomeScreen extends React.Component {
  constructor(props) {

    super(props);
    this.state = {tab: 1, active: false};
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  // }

  handleBackButtonClick = () => {
    // this.props.navigation.goBack(null);
    return true;
  };

  onCheckIn =()=> {
    this.props.navigation.navigate('CheckedIn', {});
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

  onAll =()=> {
    this.setState({
      tab: 1,
    })
  }

  onCare =()=> {
    this.setState({
      tab: 2,
    })
  }

  onService =()=> {
    this.setState({
      tab: 3,
    })
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
              style={s.checkIn}
              onPress={() =>this.onCheckIn()}
              activeOpacity={1}>
              <Text>Check-In</Text>
            </TouchableOpacity>
            <Text style={s.title}>Home</Text>
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
        <WebView source={{ uri: 'https://4smile.com/education-mobile-app/' }} style={s.margin20}/>
        <Footer>
          <FooterTab style={s.footerContent}>
            <Button onPress={this.onHome}><Image source={home1} style={s.icon20}/></Button>
            <Button onPress={this.onAnnounce}><Image source={announce} style={s.icon30} /></Button>
            <Button onPress={this.onCalendar}><Image source={calendar} style={s.icon30}/></Button>
            <Button onPress={this.onChat}><Image source={chat} style={s.icon30}/></Button>
            <Button onPress={this.onDoc}><Image source={doc} style={s.icon30}/></Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },

})
