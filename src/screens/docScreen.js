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

  _getDirections = () => {

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
            <Text style={s.title}>Laguna Dental Center</Text>
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
          <Text style={[s.ft20Black, styles.mb15]}>Laguna Dental Center</Text>
          <Text style={s.ft14300Gray}>
            24881 Alicia Pkwy, Suite H Laguna Hills, CA 92653 
          </Text>
          <Text style={s.ft14300Gray}>
          (949) 707-5273 
          </Text>
          <View>
          <Button
          onPress={this._getDirections}
          title="Get Directions" />
          </View>
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

          <Text style={[s.title, styles.mv15]}>Dr. Payam Ataii</Text>
          <Text style={s.ft14300Gray}>Expert Dentist Dr. Payam C. Ataii has been treating patients with over two decades of clinical experience. His experience covers a wide range of dentistry such as: oral surgery, endodontics, pedodontics, periodontics, cosmetic dentistry, and most recently Laser Dentistry.</Text>
          <Text style={[s.title, styles.mv15]}>Dr. Jeremy Owyoung</Text>
          <Text style={s.ft14300Gray}>Dr. Owyoung Dr. Jeremy Owyoung graduated from the University of California, San Diego (UCSD) with a Bachelor of Science degree in Biochemistry / Cell Biology and Management Science. He received his Doctor of Dental Surgery from the University of Southern California School of Dentistry (USC).</Text>
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
