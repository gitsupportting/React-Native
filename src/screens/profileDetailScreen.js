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
      usersName : "",
      phone : 0
    };
    
    // reload data after navgiation back
    this.focusListener = this.props.navigation.addListener('willFocus', () => {  
      this.getUserData();
    });
  }

  async componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    let userFullname = "";
    AsyncStorage.getItem('userData').then( async (res)=> {
      let userData  = JSON.parse(res);
      userFullname  = userData.firstName + "\ " + userData.lastName;
      let userEmail = userData.email;
      let phone     = userData.phone;
      this.setState(
        {usersName : userFullname,
         email : userEmail,
        phone : phone
      });   
    });
  }

  componentWillUnmount () {
    this.focusListener.remove();
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
            <Text style={s.title}>Profile</Text>
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
              <Text style={[s.ft15RegularBlack, s.mb10]}>Email</Text>
              <Text style={[s.ft15RegularBlack, s.mb10]}>Phone</Text>
            </View>
            <View style={s.flex70}>
              <Text style={[s.ft14300Gray, s.mb10]}>{this.state.usersName}</Text>
              <Text style={[s.ft14300Gray, s.mb10]}>{this.state.email}</Text>
              <Text style={[s.ft14300Gray, s.mb10]}>{this.state.phone}</Text>
            </View>
          </View>
          <View style={[styles.textCenter, s.w100]}>
            <TouchableOpacity
              style={[styles.btnActive]}
              onPress={()=>this.onLogout()}
              activeOpacity={1}>
              <Text style={s.activeTxt}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
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
  }
})
