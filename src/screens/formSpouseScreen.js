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
import { Header, Content} from 'native-base'
import backBtn from '../assets/icons/backBtn.png'
var s = require('../assets/css/styles')

export default class FormSpouseScreen extends React.Component {
  constructor (props) {
    super(props)
    this.init()
  }

  init = () => {
    this.state = {
      patient_responsible_party_person : "",
      Self: "",
      payment: "",
      patient_responsible_party_name : "",
      patient_responsible_party_gender : "Male",
      patient_responsible_party_martial_status : "Married",
      // Child: "",
      patient_responsible_party_ssn : "",
      patient_responsible_party_dob : "",
      patient_responsible_party_phone_home : "",
      patient_responsible_party_phone_work : "",
      patient_responsible_party_phone_work_extension : "",
      patient_responsible_party_time_to_call : "",
      patient_responsible_party_address_street : "",
      patient_responsible_party_address_city : "",
      patient_responsible_party_address_state : "",
      patient_responsible_party_address_zip : "",
    }
    AsyncStorage.getItem('formData').then(res => {
      this.formData = JSON.parse(res);
    }) 
  }

  onBack =()=> {
    this.props.navigation.navigate('FormReferral');
  }

  onNext =()=> { 

    const {
      patient_responsible_party_name,
      patient_responsible_party_gender,
      patient_responsible_party_martial_status,
      patient_responsible_party_ssn,
      patient_responsible_party_dob,
      patient_responsible_party_phone_home,
      patient_responsible_party_phone_work,
      patient_responsible_party_phone_work_extension,
      patient_responsible_party_time_to_call,
      patient_responsible_party_address_street,
      patient_responsible_party_address_city,
      patient_responsible_party_address_state,
      patient_responsible_party_address_zip,
    } = this.state;


    let patient_responsible_party_person = "";
    if (this.state.Self != "") {
      patient_responsible_party_person += this.state.Self + " ";
    }
    if (this.state.payment != "") {
      patient_responsible_party_person += this.state.payment + " ";
    }

    this.formData.patient_responsible_party_person = patient_responsible_party_person;
    this.formData.patient_responsible_party_name = patient_responsible_party_name;
    this.formData.patient_responsible_party_gender = patient_responsible_party_gender;
    this.formData.patient_responsible_party_martial_status = patient_responsible_party_martial_status;
    this.formData.patient_responsible_party_ssn = patient_responsible_party_ssn;
    this.formData.patient_responsible_party_dob = patient_responsible_party_dob;
    this.formData.patient_responsible_party_phone_home = patient_responsible_party_phone_home;
    this.formData.patient_responsible_party_phone_work = patient_responsible_party_phone_work;
    this.formData.patient_responsible_party_phone_work_extension = patient_responsible_party_phone_work_extension;
    this.formData.patient_responsible_party_time_to_call = patient_responsible_party_time_to_call;
    this.formData.patient_responsible_party_address_street = patient_responsible_party_address_street;
    this.formData.patient_responsible_party_address_city = patient_responsible_party_address_city;
    this.formData.patient_responsible_party_address_state = patient_responsible_party_address_state;
    this.formData.patient_responsible_party_address_zip = patient_responsible_party_address_zip;

    AsyncStorage.setItem('formData', JSON.stringify(this.formData)).then(() => {
      this.props.navigation.navigate('FormEmploy');
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
          <Text style={[s.mb20, s.ft20Black]}>Spouse or Responsible Party Information</Text>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Self
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.Self == 'Self'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Self: 'Self'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Self == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Self: 'Self'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              The person Responsible for payment
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.payment == 'payment'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({payment: 'payment'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.payment == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({payment: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine, s.mb20]}></View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Name</Text>
            <TextInput
              onChangeText={patient_responsible_party_name =>
                this.setState({patient_responsible_party_name})
              }
              autoCapitalize='none'
              value={this.state.patient_responsible_party_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Male
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.patient_responsible_party_gender == 'Male'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_responsible_party_gender: 'Male'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.patient_responsible_party_gender == 'Female'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_responsible_party_gender: 'Female'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Female
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.patient_responsible_party_gender == 'Female'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_responsible_party_gender: 'Female'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.patient_responsible_party_gender == 'Male'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_responsible_party_gender: 'Male'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Married
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.patient_responsible_party_martial_status == 'Married'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_responsible_party_martial_status: 'Married'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.patient_responsible_party_martial_status == 'Single'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_responsible_party_martial_status: 'Single'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Single
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.patient_responsible_party_martial_status == 'Single'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_responsible_party_martial_status: 'Single'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.patient_responsible_party_martial_status == 'Married'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_responsible_party_martial_status: 'Married'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Child
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.Child == 'Child'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Child: 'Child'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Child == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Child: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View> */}
          {/* <View style={[s.splitLine, s.mb20]}></View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Other</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View> */}
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Social Security#</Text>
            <TextInput
              onChangeText={patient_responsible_party_ssn =>
                this.setState({patient_responsible_party_ssn})
              }
              autoCapitalize='none'
              value={this.state.patient_responsible_party_ssn}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Birth Date</Text>
            <TextInput
              onChangeText={patient_responsible_party_dob =>
                this.setState({patient_responsible_party_dob})
              }
              autoCapitalize='none'
              value={this.state.patient_responsible_party_dob}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Phone(Home)</Text>
            <TextInput
              onChangeText={patient_responsible_party_phone_home =>
                this.setState({patient_responsible_party_phone_home})
              }
              autoCapitalize='none'
              value={this.state.patient_responsible_party_phone_home}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Phone(Work)</Text>
            <TextInput
              onChangeText={patient_responsible_party_phone_work =>
                this.setState({patient_responsible_party_phone_work})
              }
              autoCapitalize='none'
              value={this.state.patient_responsible_party_phone_work}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Ext</Text>
            <TextInput
              onChangeText={patient_responsible_party_phone_work_extension =>
                this.setState({patient_responsible_party_phone_work_extension})
              }
              autoCapitalize='none'
              value={this.state.patient_responsible_party_phone_work_extension}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Best time to call</Text>
            <TextInput
              onChangeText={patient_responsible_party_time_to_call =>
                this.setState({patient_responsible_party_time_to_call})
              }
              autoCapitalize='none'
              value={this.state.patient_responsible_party_time_to_call}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Address</Text>
            <TextInput
              onChangeText={patient_responsible_party_address_street =>
                this.setState({patient_responsible_party_address_street})
              }
              autoCapitalize='none'
              value={this.state.patient_responsible_party_address_street}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>City</Text>
            <TextInput
              onChangeText={patient_responsible_party_address_city =>
                this.setState({patient_responsible_party_address_city})
              }
              autoCapitalize='none'
              value={this.state.patient_responsible_party_address_city}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>State</Text>
            <TextInput
              onChangeText={patient_responsible_party_address_state =>
                this.setState({patient_responsible_party_address_state})
              }
              autoCapitalize='none'
              value={this.state.patient_responsible_party_address_state}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Zip Code</Text>
            <TextInput
              onChangeText={patient_responsible_party_address_zip =>
                this.setState({patient_responsible_party_address_zip})
              }
              autoCapitalize='none'
              value={this.state.patient_responsible_party_address_zip}
              style={[styles.inputText, styles.w60]}
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
