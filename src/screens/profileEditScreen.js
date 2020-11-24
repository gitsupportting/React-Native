import React from 'react';
import { StyleSheet, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Header, Content, Text, View } from 'native-base';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
import backBtn from '../assets/icons/backBtn.png';
var s = require('../assets/css/styles');

export default class ProfileEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    if (deviceWidth/deviceHeight <= 0.563 ){
      this.setState({ Islong : true });
    };

    AsyncStorage.getItem('userData').then( async (res)=> {
      let userData      = JSON.parse(res);
      userFullname  = userData.firstName + "\ " + userData.lastName;
      let userEmail = userData.email;
      let phone         = userData.phone;
      this.setState(
        {
          usersName : userFullname,
          email : userEmail,
          phone : phone
        });
    });
  }

  onSave = () => {
    // TODO : update server with changes to patient data
    let names = this.state.usersName.split(' ');

    let userData = {
      'usersName': this.state.usersName,
      'firstName' : names[0],
      'lastName' : names[1],
      'email': this.state.email,
      'phone' : this.state.phone
    }

    AsyncStorage.setItem('userData', JSON.stringify(userData)).then(() => {
      this.props.navigation.goBack();
    });
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
            <Text style={s.title}>Edit Profile</Text>
            <View style={{width:15}}></View>
          </View>          
        </Header>
        <Content style={s.mainContainer}>
          <View style={s.spaceBetween}>
            <Text style={s.ft17Gray}>Account</Text>
            <TouchableOpacity
              onPress={this.onSave}
              style={{marginRight:5}}
              activeOpacity={1}>
              <Text style={s.ft14300Gray}>Save</Text>
            </TouchableOpacity>
          </View>
          <View style={s.mv25}>
            <View style={[styles.itemWrap]}>
              <Text style={[s.ft15RegularBlack, s.flex30]}>Name</Text>
              <TextInput
                placeholder="Name"
                onChangeText={(usersName) => this.setState({ usersName })}
                autoCapitalize='none'
                value={this.state.usersName}
                style={s.flex70}
                style={ this.state.Islong ? styles.inputText: styles.inputText_}
              />  
            </View>
            <View style={[styles.itemWrap]}>
              <Text style={[s.ft15RegularBlack, s.flex30]}>Email</Text>
              <TextInput
                placeholder="Email"
                onChangeText={(email) => this.setState({ email })}
                autoCapitalize='none'
                value={this.state.email}
                style={s.flex70}
                style={ this.state.Islong ? styles.inputText: styles.inputText_}
              />  
            </View>
            <View style={[styles.itemWrap]}>
              <Text style={[s.ft15RegularBlack, s.flex30]}>Phone</Text>
              <TextInput
                placeholder="Phone"
                onChangeText={(phone) => this.setState({ phone })}
                autoCapitalize='none'
                value={this.state.phone}
                style={s.flex70}
                style={ this.state.Islong ? styles.inputText: styles.inputText_}
              />  
            </View>
          </View>
          <View style={s.splitLine}></View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    borderRadius: 8,
    paddingLeft:10,
    width: '100%',
    fontFamily: 'NunitoSans-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
    color: '#173147',
    backgroundColor: '#fff',
    height: 40,
  },
  inputText_: {
    borderRadius: 8,
    width: '100%',
    fontFamily: 'NunitoSans-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
    paddingLeft:10,
    color: '#173147',
    backgroundColor: '#fff',
  },
  itemWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  }
  
})
