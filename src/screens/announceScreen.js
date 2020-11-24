import React from 'react';
import { Container, Header, Footer, FooterTab, Button, Content, Text } from 'native-base';
import { View, TouchableOpacity, StyleSheet, Image, ActivityIndicator, FlatList } from 'react-native';
var s = require('../assets/css/styles');
var ClinicInfo = require('../config/ClinicInfo.json');
import Icon from "react-native-feather1s"

let baseURL = 'https://us-central1-smiledental-273502.cloudfunctions.net/';
let imageURL = 'https://4smile.com/';

export default class AnnounceScreen extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      active: false,
      isLoading: true
    }
  }

  async componentDidMount() {

    await fetch(baseURL + 'announcements', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        clinic_id : ClinicInfo.clinic_id
      })
    })

    .then((response) => response.json())
    .then((responseData) => {
      if (responseData) {
        this.setState({
          isLoading: false,
          announcements: responseData.announcements
        })
      } else {
        alert("something went wrong!");
      }
      })
      .catch((error) => {
        alert(error);
        return;
      })
  }

  renderItem = (data) => {
    return (
      <TouchableOpacity style={[styles.card, s.shadowStyle]} onPress={this.onDetail}>
        <Image resizeMode="contain" style={{width: 100, height: 100, borderRadius: 8}} source={{uri: imageURL + data.item.image_path}} />
        <View style={{flex: 1, paddingLeft: 20}}>
          <Text style={[s.ft14BoldBlack, s.mb5]}>{data.item.title}</Text>
          <Text style={s.ft14300Gray}>{data.item.short_desc}</Text>
        </View>
      </TouchableOpacity>
    )
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
            <Text style={s.title}>Announcements</Text>
            <TouchableOpacity
              style={s.checkInEm}>
            </TouchableOpacity>
          </View>            
        </Header>
        <Content style={s.mainContainer}>
          {this.state.isLoading && <View style={{marginTop: 100}}>
            <ActivityIndicator size="large" color="#0c9" />
          </View>}

          {this.state.announcements !=null && !this.state.isLoading &&
            <FlatList
                data={this.state.announcements}
                renderItem={(item) => this.renderItem(item)}
                keyExtractor={(item) => item}
            />
          }
          {this.state.announcements ==null && !this.state.isLoading &&
            <Text style={[s.txCenter, s.ft20Black]}>No data to display</Text>
          }
        </Content>
        <Footer>
          <FooterTab style={s.footerContent}>
          <Button onPress={this.onHome}>
              <Icon name="home" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
            <Button onPress={this.onAnnounce}>
              <Icon name="flag" size={30} color={'rgba(37,175,217, 1)'} />
            </Button>
            <Button onPress={this.onCalendar}>
              <Icon name="calendar" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
            <Button onPress={this.onChat}>
              <Icon name="message-circle" size={30} color={'rgba(0, 0, 0, .80)'} />
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
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },

  date: {
    fontFamily: 'Lato-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17.262,
    lineHeight: 21,
    color: '#B2B2B2',
    marginBottom: 15,
  },

  card: {
    padding: 15,
    borderRadius: 8,    
    marginBottom: 18,
    flexDirection: 'row',
    width: '100%', 
    backgroundColor: '#fff',
    shadowColor: "rgba(157, 157, 157, 0.2);",
    shadowOffset: {
      width: 1,
      height: 5
    },
    shadowRadius: 8,
    shadowOpacity: 1.0,
    elevation: 2
  },
})
