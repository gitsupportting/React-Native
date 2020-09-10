import React from 'react';
import { Container, Header, Footer, FooterTab, Button, Content, Text } from 'native-base';
import { Dimensions, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import  MapView,{Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
let deviceWidth = Dimensions.get('window').width;
var s = require('../assets/css/styles');
import more from '../assets/icons/more.png';
import home from '../assets/icons/home.png';
import announce from '../assets/icons/announce.png';
import calendar from '../assets/icons/calendar.png';
import chat from '../assets/icons/chat.png';
import doc1 from '../assets/icons/doc1.png';

export default class DocScreen extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      isMapReady: false,
      active: false,
      region: {
        latitude: 37.6062,
        longitude: -116,
        latitudeDelta: 1,
        longitudeDelta: 1,   
      }
    }
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

  componentDidMount() {
    
    setTimeout(() => {
      Geolocation.getCurrentPosition(
        (location) => {
            this.setState({
              region: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 1,
                longitudeDelta: 1, 
              },
              isMapReady: true,
              error:null,
          });
        },
        (error) => {
          this.setState({error: error.message}); 
          console.log('there', error)},
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 3600000 },
      )
    }, 1000);
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

  render() {
    return (
      <Container style={s.container}>
        <Header style={s.headerContent}>
          <View style={s.spaceBetween}>
            <TouchableOpacity
              style={s.checkInEm}
              activeOpacity={1}>
            </TouchableOpacity>
            <Text style={s.title}>Clinic Name</Text>
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
        <Content style={s.margin20}>
          <View>
          {this.state.isMapReady && <MapView
              initialRegion={this.state.region}
              OnLayout={this.onMapLayout}
              style={ styles.mapStyle}
            >
              <Marker 
                coordinate = {this.state.region}
                  title={"I am here."}
                >
                <Image source={require('../assets/location.gif')} style={{height: 15, width:15 }} />
              </Marker>
            </MapView>}
            {!this.state.isMapReady && <MapView
              initialRegion={this.state.region}
              OnLayout={this.onMapLayout}
              style={ styles.mapStyle}
            >
            </MapView>}
          </View>
          <Text style={[s.ft20Black, styles.mb15]}>Clinic Name</Text>
          <Text style={s.ft14300Gray}>
            0000 Culver Dr, Irvine #400 (000) 000-000 
          </Text>
          <Text style={s.ft14300Gray}>
            Description about the clinic here. Description about the clinic here. Description about the clinic here. Description about
          </Text>
          <Text style={[s.title, styles.mv15]}>Office Hours</Text>
          <View style={[s.spaceBetween, s.mb5]}>
            <Text style={[s.ft14300Gray, s.flex30]}>Man-Fri</Text>
            <Text style={[s.ft14300Gray, s.flex70]}>8am-5pm</Text>
          </View>
          <View style={[s.spaceBetween, s.mb5]}>
            <Text style={[s.ft14300Gray, s.flex30]}>Man-Fri</Text>
            <Text style={[s.ft14300Gray, s.flex70]}>8am-5pm</Text>
          </View>
          <View style={[s.spaceBetween, s.mb5]}>
            <Text style={[s.ft14300Gray, s.flex30]}>Man-Fri</Text>
            <Text style={[s.ft14300Gray, s.flex70]}>8am-5pm</Text>
          </View>
          <Text style={[s.title, styles.mv15]}>Dr. Doctor</Text>
          <Text style={s.ft14300Gray}>Description about the clinic here.</Text>
        </Content>
        <Footer>
          <FooterTab style={s.footerContent}>
            <Button onPress={this.onHome}><Image source={home} style={s.icon30}/></Button>
            <Button onPress={this.onAnnounce}><Image source={announce} style={s.icon30}/></Button>
            <Button onPress={this.onCalendar}><Image source={calendar} style={s.icon30}/></Button>
            <Button onPress={this.onChat}><Image source={chat} style={s.icon30}/></Button>
            <Button onPress={this.onDoc}><Image source={doc1} style={s.icon30}/></Button>
          </FooterTab>
        </Footer>
      </Container >
    );
  }
}

const styles = StyleSheet.create({

  mapStyle: {
    width: deviceWidth,
    height: 200,
  },

  mb15: {
    marginVertical: 15,
    width:'100%',
    textAlign: 'center'
  },

  mv15: {
    marginVertical: 15,
  },

})
