import React from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Text,
  KeyboardAvoidingView
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {Container, Header, Content} from 'native-base'
import backBtn from '../assets/icons/backBtn.png'
var s = require('../assets/css/styles')

export default class FormReferralScreen extends React.Component {
  constructor (props) {
    super(props)
    this.init()
  }

  init = () => {
    
    this.state = {
      patient_referrer : "",
      friend: "",
      relative: "",
      DentalOffice: "",
      YellowPages: "",
      Newspaper: "",
      School: "",
      Work: "",
      patient_referrer_name : "",
    }
    AsyncStorage.getItem('formData').then(res => {
      this.formData = JSON.parse(res);
    })  
  }

  onBack =()=> {
    this.props.navigation.navigate('FormHealth');
  }

  onNext =()=> {

    const {patient_referrer_name} = this.state;

    let patient_referrer = "";
    if (this.state.friend != "") {
      patient_referrer += this.state.friend + " ";
    }
    if (this.state.relative != "") {
      patient_referrer += this.state.relative + " ";
    }
    if (this.state.DentalOffice != "") {
      patient_referrer += this.state.DentalOffice + " ";
    }
    if (this.state.YellowPages != "") {
      patient_referrer += this.state.YellowPages + " ";
    }
    if (this.state.Newspaper != "") {
      patient_referrer += this.state.Newspaper + " ";
    }
    if (this.state.School != "") {
      patient_referrer += this.state.School + " ";
    }
    if (this.state.Work != "") {
      patient_referrer += this.state.Work + " ";
    }
    this.formData.patient_referrer = patient_referrer;
    this.formData.patient_referrer_name = patient_referrer_name;

    AsyncStorage.setItem('formData', JSON.stringify(this.formData)).then(() => {
      this.props.navigation.navigate('FormSpouse')
    })
  } 

  render () {
    return (
      <KeyboardAvoidingView style={s.container}>
        <Header
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#ffffff',
          }}>
          <TouchableOpacity
            onPress={this.onBack}
            activeOpacity={1}>
            <Image source={backBtn} style={s.backIcon} />
          </TouchableOpacity>
        </Header>
        <Content style={s.mainContainer}>
          <Text style={[s.mb20, s.ft20Black]}>Referral Information</Text>
          <Text style={[s.ft15RegularBlack, s.mb20]}>Whom may we thank for referring you to our practice?</Text>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Another patient, friend
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.friend == 'friend'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({friend: 'friend'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.friend == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({friend: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Another patient, relative
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.relative == 'relative'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({relative: 'relative'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.relative == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({relative: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Dental Office
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.DentalOffice == 'DentalOffice'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({DentalOffice: 'DentalOffice'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.DentalOffice == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({DentalOffice: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Yellow Pages
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.YellowPages == 'YellowPages'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({YellowPages: 'YellowPages'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.YellowPages == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({YellowPages: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Newspaper
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.Newspaper == 'Newspaper'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Newspaper: 'Newspaper'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Newspaper == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Newspaper: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              School
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.School == 'School'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({School: 'School'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.School == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({School: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Work
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.Work == 'Work'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Work: 'Work'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Work == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Work: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={[s.splitLine, s.mb20]}></View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Other</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w50]}
            />
          </View> */}
          <View style={s.mb20}>
            <Text style={[s.ft15RegularBlack, s.mb15]}>Name of person or office referring you to our practice:</Text>
            <TextInput
              onChangeText={patient_referrer_name =>
                this.setState({patient_referrer_name})
              }
              autoCapitalize='none'
              value={this.state.patient_referrer_name}
              style={[styles.inputText]}
            />
          </View>
          <TouchableOpacity
            style={[s.btnActive, s.w100]}
            onPress={this.onNext}
            activeOpacity={1}>
            <Text style={s.activeTxt}>Next</Text>
          </TouchableOpacity>
        </Content>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  
  inputText: {
    borderRadius: 8,
    paddingLeft: 10,
    fontFamily: 'NunitoSans-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
    color: '#173147',
    backgroundColor: '#fff',
    height: 40
  },
  w50: {
    width: '50%'
  },
  itemWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    alignSelf: 'center',
    marginTop: 15,
  },
  btnOptionActive: {
    width: 80,
    height: 32,
    backgroundColor: '#94E5FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnOptionDeactive: {
    width: 80,
    height: 32,
    backgroundColor: '#C4C4C4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontFamily: 'Lato-Light',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 16,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})
