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

export default class FormEmployScreen extends React.Component {
  constructor (props) {
    super(props)
    this.init()
  }

  init = () => {
    
    this.state = {
      patient_employment_person : "",
      patient: "",
      person: "",
      patient_employment_employer : "",
      patient_employment_occupation : "",
      patient_employment_address_street : "",
      patient_employment_address_city : "",
      patient_employment_address_state : "",
      patient_employment_address_zip : "",
    }
    AsyncStorage.getItem('formData').then(res => {
      this.formData = JSON.parse(res);
    }) 
  }

  onBack =()=> {
    this.props.navigation.navigate('FormSpouse');
  }

  onNext =()=> {

    const {
      patient_employment_employer,
      patient_employment_occupation,
      patient_employment_address_street,
      patient_employment_address_city,
      patient_employment_address_state,
      patient_employment_address_zip,
    } = this.state;

    let patient_employment_person = "";
    if (this.state.patient != "") {
      patient_employment_person += this.state.patient + " ";
    }
    if (this.state.person != "") {
      patient_employment_person += this.state.person + " ";
    }

    this.formData.patient_employment_person = patient_employment_person;
    this.formData.patient_employment_employer = patient_employment_employer;
    this.formData.patient_employment_occupation = patient_employment_occupation;
    this.formData.patient_employment_address_street = patient_employment_address_street;
    this.formData.patient_employment_address_city = patient_employment_address_city;
    this.formData.patient_employment_address_state = patient_employment_address_state;
    this.formData.patient_employment_address_zip = patient_employment_address_zip;

    AsyncStorage.setItem('formData', JSON.stringify(this.formData)).then(() => {
      this.props.navigation.navigate('FormInsurance');
    })
    
  } 

  render () {
    return (
      <KeyboardAvoidingView style={s.container}>
        <Header style={s.headerContent}>
          <View style={s.spaceBetween}>
            <TouchableOpacity onPress={this.onBack} activeOpacity={1}>
              <Image source={backBtn} style={s.backIcon} />
            </TouchableOpacity>
            <Text style={s.title}>Employment Information</Text>
            <TouchableOpacity
              style={{width: 10}}
              activeOpacity={1}>
            </TouchableOpacity>
          </View>
        </Header>
        <Content style={s.mainContainer}>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              The patient
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.patient == 'patient'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient: 'patient'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.patient == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              The person responsible for payment
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.person == 'person'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({person: 'person'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.person == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({person: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine, s.mb20]}></View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Employer Name</Text>
            <TextInput
              onChangeText={patient_employment_employer =>
                this.setState({patient_employment_employer})
              }
              autoCapitalize='none'
              value={this.state.patient_employment_employer}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Occupation</Text>
            <TextInput
              onChangeText={patient_employment_occupation =>
                this.setState({patient_employment_occupation})
              }
              autoCapitalize='none'
              value={this.state.patient_employment_occupation}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Address</Text>
            <TextInput
              onChangeText={patient_employment_address_street =>
                this.setState({patient_employment_address_street})
              }
              autoCapitalize='none'
              value={this.state.patient_employment_address_street}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>City</Text>
            <TextInput
              onChangeText={patient_employment_address_city =>
                this.setState({patient_employment_address_city})
              }
              autoCapitalize='none'
              value={this.state.patient_employment_address_city}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>State</Text>
            <TextInput
              onChangeText={patient_employment_address_state =>
                this.setState({patient_employment_address_state})
              }
              autoCapitalize='none'
              value={this.state.patient_employment_address_state}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Zip Code</Text>
            <TextInput
              onChangeText={patient_employment_address_zip =>
                this.setState({patient_employment_address_zip})
              }
              autoCapitalize='none'
              value={this.state.patient_employment_address_zip}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          {/* <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Phone</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View> */}
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
  w60: {
    width: '60%'
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
