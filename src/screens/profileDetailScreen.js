import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Text, View } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import editBtn from '../assets/icons/editIcon.png';
import backBtn from '../assets/icons/backBtn.png';
var s = require('../assets/css/styles');

export default class ProfileDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    
  }

  onLogout =()=> {
    AsyncStorage.setItem('userData', 'logout').then(() => {
      this.props.navigation.navigate('Login');
    });
  }

  render() {
    return (
      <Container style={s.container}>
        <Header style={s.headerContent}>
          <View style={s.spaceBetween}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{width:15}}
              activeOpacity={1}>
              <Image source={backBtn} style={s.backIcon}/>
            </TouchableOpacity>
            <Text style={s.title}>Profile detail</Text>
            <View style={{width:15}}></View>
          </View>          
        </Header>
        <Content style={s.mainContainer}>
          <View style={s.spaceBetween}>
            <Text style={s.ft17Gray}>Account</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ProfileEdit')}
              style={{width:15, marginRight:5}}
              activeOpacity={1}>
              <Image source={editBtn} style={s.icon20}/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginVertical:30}}>
            <View style={s.flex30}>
              <Text style={[s.ft15RegularBlack, s.mb10]}>Name</Text>
              <Text style={[s.ft15RegularBlack, s.mb10]}>Username</Text>
              <Text style={[s.ft15RegularBlack, s.mb10]}>Email</Text>
              <Text style={[s.ft15RegularBlack, s.mb10]}>Phone</Text>
              <Text style={[s.ft15RegularBlack, s.mb10]}>Password</Text>
            </View>
            <View style={s.flex70}>
              <Text style={[s.ft14300Gray, s.mb10]}>Quinn Flair</Text>
              <Text style={[s.ft14300Gray, s.mb10]}>quinnflair</Text>
              <Text style={[s.ft14300Gray, s.mb10]}>quinn_flair@gmail.com</Text>
              <Text style={[s.ft14300Gray, s.mb10]}>(000) 000-000</Text>
              <Text style={[s.ft14300Gray, s.mb10]}>12345678</Text>
            </View>
          </View>
          <View style={s.splitLine}></View>
          <TouchableOpacity
              style={{marginVertical: 25}}
              activeOpacity={1}>
              <Text style={s.ft17Gray}>More</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={this.onLogout}
              activeOpacity={1}>
              <Text style={s.ft17Gray}>Log Out</Text>
          </TouchableOpacity>
        </Content>
      </Container >
    );
  }
}

const styles = StyleSheet.create({

})
