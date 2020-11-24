import React from 'react';
import { Container, Header, Footer, FooterTab, Button, Content, Text } from 'native-base';
import { Dimensions, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from "react-native-feather1s"
import  MapView,{Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import openMap from 'react-native-open-maps';
let deviceWidth = Dimensions.get('window').width;
var s = require('../assets/css/styles');
var ClinicInfo = require('../config/ClinicInfo.json');


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

  onCheckIn =()=> {
    this.props.navigation.navigate('CheckedIn', {});
  }

  _getDirections() {
    openMap({ latitude: ClinicInfo.clinic_latitude, longitude: ClinicInfo.clinic_longitude });
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
            <Text style={s.title}>Clinic Info</Text>
            <Button onPress={this.onProfile} style={s.checkInEm, {backgroundColor: "#FFFFFF"}}>
                <Icon name="user" size={30} />
              </Button>
          </View>            
        </Header>
        <Content style={s.margin20}>
        <View style={[styles.textCenter, s.w100]}>
            <TouchableOpacity
              style={[styles.btnActive]}
              onPress={()=>this.onCheckIn()}
              activeOpacity={1}>
              <Text style={s.activeTxt}>Mobile Check-In</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.textCenter, s.w100]}>
            <TouchableOpacity
              style={[styles.btnActive]}
              onPress={()=>this.onWeb()}
              activeOpacity={1}>
              <Text style={s.activeTxt}>New Patient Form</Text>
            </TouchableOpacity>
          </View>
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
          <Text style={[s.ft20Black, styles.mb15]}>{ClinicInfo.clinic_name}</Text>
          {/* <View style={[styles.textCenter, s.w100]}>
            <TouchableOpacity
              style={[styles.btnActive]}
              onPress={()=>this._getDirections()}
              activeOpacity={1}>
              <Text style={s.activeTxt}>Get Directions</Text>
            </TouchableOpacity>
          </View> */}
          <Text style={s.ft14300Gray}>
            4000 MacArthur Blvd, 6th Floor, Newport Beach, CA 92660
          </Text>
          <Text style={s.ft14300Gray}>
          
          </Text>
          <Text style={s.ft14300Gray}>
          (800) 500-4506 
          </Text>
          <Text style={s.ft14300Gray}>
          
          </Text>
          <Text style={s.ft14300Gray}>
          Our team of experienced and professional dentists brings over 20 years of experience in dental care to enhance your oral health. 
          </Text>
          <Text style={[s.title, styles.mv15]}>Office Hours</Text>
          <View style={[s.spaceBetween, s.mb5]}>
            <Text style={[s.ft14300Gray, s.flex30]}>Monday</Text>
            <Text style={[s.ft14300Gray, s.flex70]}>8am-5pm</Text>
          </View>
          <View style={[s.spaceBetween, s.mb5]}>
            <Text style={[s.ft14300Gray, s.flex30]}>Tuesday</Text>
            <Text style={[s.ft14300Gray, s.flex70]}>8am-5pm</Text>
          </View>
          <View style={[s.spaceBetween, s.mb5]}>
            <Text style={[s.ft14300Gray, s.flex30]}>Wednesday</Text>
            <Text style={[s.ft14300Gray, s.flex70]}>8am-5pm</Text>
          </View>
          <View style={[s.spaceBetween, s.mb5]}>
            <Text style={[s.ft14300Gray, s.flex30]}>Thursday</Text>
            <Text style={[s.ft14300Gray, s.flex70]}>8am-5pm</Text>
          </View>
          <View style={[s.spaceBetween, s.mb5]}>
            <Text style={[s.ft14300Gray, s.flex30]}>Friday</Text>
            <Text style={[s.ft14300Gray, s.flex70]}>8am-5pm</Text>
          </View>          

          <Text style={[s.title, styles.mv15]}>Dr. John Smith, DDS</Text>
          <Text style={s.ft14300Gray}>Expert Dentist Dr. John Smith has been treating patients with over two decades of clinical experience. His experience covers a wide range of dentistry such as: oral surgery, endodontics, pedodontics, periodontics and cosmetic dentistry.</Text>
        </Content>
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
              <Icon name="message-circle" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
            <Button onPress={this.onDoc}>
              <Icon name="info" size={30} color={'rgba(37,175,217, 1)'} />
            </Button>
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
  textCenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btnActive: {
    height: 40,
    backgroundColor: '#173147',
    borderRadius: 8,
    borderColor: '#173147',
    borderWidth: 1,
    marginBottom: 20,
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
