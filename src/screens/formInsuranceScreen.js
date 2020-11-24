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

export default class FormInsuranceScreen extends React.Component {
  constructor (props) {
    super(props)
    this.init()
  }

  init = () => {
    
    this.state = {
      patient_primary_insurance_insured_name : "",
      patient_primary_insurance_insured_is_patient : "YES",
      patient_primary_insurance_insured_dob : "",
      patient_primary_insurance_id : "",
      patient_primary_insurance_group_id : "",
      patient_primary_insurance_insured_address_street : "",
      patient_primary_insurance_insured_address_city : "",
      patient_primary_insurance_insured_address_state : "",
      patient_primary_insurance_insured_address_zip : "",
      patient_primary_insurance_insured_employer : "",
      patient_primary_insurance_insured_employer_address_street : "",
      patient_primary_insurance_insured_employer_address_city : "",
      patient_primary_insurance_insured_employer_address_state : "",
      patient_primary_insurance_insured_employer_address_zip : "",
      patient_primary_insurance_relationship : "",
      primary_self: "",
      primary_spouse: "",
      primary_child: "",
      primary_other: "",
      patient_primary_insurance_plan_name_address : "",
      patient_secondary_insurance_insured_name : "",
      patient_secondary_insurance_insured_is_patient : "NO",
      patient_secondary_insurance_insured_dob : "",
      patient_secondary_insurance_id : "",
      patient_secondary_group_id : "",
      patient_secondary_insurance_address_street : "",
      patient_secondary_insurance_address_city : "",
      patient_secondary_insurance_address_state : "",
      patient_secondary_insurance_address_zip : "",
      patient_secondary_insurance_insured_employer : "", 
      patient_secondary_insurance_insured_employer_address_street : "",
      patient_secondary_insurance_insured_employer_address_city : "",
      patient_secondary_insurance_insured_employer_address_state : "",
      patient_secondary_insurance_insured_employer_address_zip : "",
      patient_secondary_insurance_relationship : "",
      secondary_self: "",
      secondary_spouse: "",
      secondary_child: "",
      secondary_other: "",
      patient_secondary_insurance_plan_name_address : "",
    }
    AsyncStorage.getItem('formData').then(res => {
      this.formData = JSON.parse(res);
    }) 
  }

  onBack =()=> {
    this.props.navigation.navigate('FormEmploy');
  }

  onNext =()=> {
    const {
      patient_primary_insurance_insured_name,
      patient_primary_insurance_insured_is_patient,
      patient_primary_insurance_insured_dob,
      patient_primary_insurance_id,
      patient_primary_insurance_group_id,
      patient_primary_insurance_insured_address_street,
      patient_primary_insurance_insured_address_city,
      patient_primary_insurance_insured_address_state,
      patient_primary_insurance_insured_address_zip,
      patient_primary_insurance_insured_employer,
      patient_primary_insurance_insured_employer_address_street,
      patient_primary_insurance_insured_employer_address_city,
      patient_primary_insurance_insured_employer_address_state,
      patient_primary_insurance_insured_employer_address_zip,
      patient_primary_insurance_plan_name_address,
      patient_secondary_insurance_insured_name,
      patient_secondary_insurance_insured_is_patient,
      patient_secondary_insurance_insured_dob,
      patient_secondary_insurance_id,
      patient_secondary_group_id,
      patient_secondary_insurance_address_street,
      patient_secondary_insurance_address_city,
      patient_secondary_insurance_address_state,
      patient_secondary_insurance_address_zip,
      patient_secondary_insurance_insured_employer,
      patient_secondary_insurance_insured_employer_address_street,
      patient_secondary_insurance_insured_employer_address_city,
      patient_secondary_insurance_insured_employer_address_state,
      patient_secondary_insurance_insured_employer_address_zip,
      patient_secondary_insurance_plan_name_address,
    } = this.state;

    let patient_primary_insurance_relationship = "";
    if (this.state.primary_self !="") {
      patient_primary_insurance_relationship += this.state.primary_self;
    }
    if (this.state.primary_spouse !="") {
      patient_primary_insurance_relationship += this.state.primary_spouse;
    }
    if (this.state.primary_child !="") {
      patient_primary_insurance_relationship += this.state.primary_child;
    }
    if (this.state.primary_other !="") {
      patient_primary_insurance_relationship += this.state.primary_other;
    }

    let patient_secondary_insurance_relationship = "";
    if (this.state.secondary_self !="") {
      patient_secondary_insurance_relationship += this.state.secondary_self;
    }
    if (this.state.secondary_spouse !="") {
      patient_secondary_insurance_relationship += this.state.secondary_spouse;
    }
    if (this.state.secondary_child !="") {
      patient_secondary_insurance_relationship += this.state.secondary_child;
    }
    if (this.state.secondary_other !="") {
      patient_secondary_insurance_relationship += this.state.secondary_other;
    }

    this.formData.patient_primary_insurance_relationship = patient_primary_insurance_relationship;
    this.formData.patient_secondary_insurance_relationship = patient_secondary_insurance_relationship;

    this.formData.patient_primary_insurance_insured_name = patient_primary_insurance_insured_name;
    this.formData.patient_primary_insurance_insured_is_patient = patient_primary_insurance_insured_is_patient;
    this.formData.patient_primary_insurance_insured_dob = patient_primary_insurance_insured_dob;
    this.formData.patient_primary_insurance_id = patient_primary_insurance_id;
    this.formData.patient_primary_insurance_group_id = patient_primary_insurance_group_id;
    this.formData.patient_primary_insurance_insured_address_street = patient_primary_insurance_insured_address_street;
    this.formData.patient_primary_insurance_insured_address_city = patient_primary_insurance_insured_address_city;
    this.formData.patient_primary_insurance_insured_address_state = patient_primary_insurance_insured_address_state;
    this.formData.patient_primary_insurance_insured_address_zip = patient_primary_insurance_insured_address_zip;
    this.formData.patient_primary_insurance_insured_employer = patient_primary_insurance_insured_employer;
    this.formData.patient_primary_insurance_insured_employer_address_street = patient_primary_insurance_insured_employer_address_street;
    this.formData.patient_primary_insurance_insured_employer_address_city = patient_primary_insurance_insured_employer_address_city;
    this.formData.patient_primary_insurance_insured_employer_address_state = patient_primary_insurance_insured_employer_address_state;
    this.formData.patient_primary_insurance_insured_employer_address_zip = patient_primary_insurance_insured_employer_address_zip;
    this.formData.patient_primary_insurance_plan_name_address = patient_primary_insurance_plan_name_address;
    this.formData.patient_secondary_insurance_insured_name = patient_secondary_insurance_insured_name;
    this.formData.patient_secondary_insurance_insured_is_patient = patient_secondary_insurance_insured_is_patient;
    this.formData.patient_secondary_insurance_insured_dob = patient_secondary_insurance_insured_dob;
    this.formData.patient_secondary_insurance_id = patient_secondary_insurance_id;
    this.formData.patient_secondary_group_id = patient_secondary_group_id;
    this.formData.patient_secondary_insurance_address_street = patient_secondary_insurance_address_street;
    this.formData.patient_secondary_insurance_address_city = patient_secondary_insurance_address_city;
    this.formData.patient_secondary_insurance_address_state = patient_secondary_insurance_address_state;
    this.formData.patient_secondary_insurance_address_zip = patient_secondary_insurance_address_zip;
    this.formData.patient_secondary_insurance_insured_employer = patient_secondary_insurance_insured_employer;
    this.formData.patient_secondary_insurance_insured_employer_address_street = patient_secondary_insurance_insured_employer_address_street;
    this.formData.patient_secondary_insurance_insured_employer_address_city = patient_secondary_insurance_insured_employer_address_city;
    this.formData.patient_secondary_insurance_insured_employer_address_state = patient_secondary_insurance_insured_employer_address_state;
    this.formData.patient_secondary_insurance_insured_employer_address_zip = patient_secondary_insurance_insured_employer_address_zip;
    this.formData.patient_secondary_insurance_plan_name_address = patient_secondary_insurance_plan_name_address;

    AsyncStorage.setItem('formData', JSON.stringify(this.formData)).then(() => {
      this.props.navigation.navigate('FormConsent');
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
          <Text style={[s.mb20, s.ft20Black]}>Insurance Information</Text>
          <View style={[s.splitLine, s.mb20]}></View>
          <Text style={[s.mb20, s.ft20Black]}>Primary</Text>
          <View style={[s.splitLine, s.mb20]}></View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Name of insured:</Text>
            <TextInput
              onChangeText={patient_primary_insurance_insured_name =>
                this.setState({patient_primary_insurance_insured_name})
              }
              autoCapitalize='none'
              value={this.state.patient_primary_insurance_insured_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Is insured a patient?
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.patient_primary_insurance_insured_is_patient == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_primary_insurance_insured_is_patient: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.patient_primary_insurance_insured_is_patient == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_primary_insurance_insured_is_patient: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Birth Date:</Text>
            <TextInput
              onChangeText={patient_primary_insurance_insured_dob =>
                this.setState({patient_primary_insurance_insured_dob})
              }
              autoCapitalize='none'
              value={this.state.patient_primary_insurance_insured_dob}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>ID #:</Text>
            <TextInput
              onChangeText={patient_primary_insurance_id =>
                this.setState({patient_primary_insurance_id})
              }
              autoCapitalize='none'
              value={this.state.patient_primary_insurance_id}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Group #:</Text>
            <TextInput
              onChangeText={patient_primary_insurance_group_id =>
                this.setState({patient_primary_insurance_group_id})
              }
              autoCapitalize='none'
              value={this.state.patient_primary_insurance_group_id}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Address</Text>
            <TextInput
              onChangeText={patient_primary_insurance_insured_address_street =>
                this.setState({patient_primary_insurance_insured_address_street})
              }
              autoCapitalize='none'
              value={this.state.patient_primary_insurance_insured_address_street}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>City</Text>
            <TextInput
              onChangeText={patient_primary_insurance_insured_address_city =>
                this.setState({patient_primary_insurance_insured_address_city})
              }
              autoCapitalize='none'
              value={this.state.patient_primary_insurance_insured_address_city}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>State</Text>
            <TextInput
              onChangeText={patient_primary_insurance_insured_address_state =>
                this.setState({patient_primary_insurance_insured_address_state})
              }
              autoCapitalize='none'
              value={this.state.patient_primary_insurance_insured_address_state}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Zip Code</Text>
            <TextInput
              onChangeText={patient_primary_insurance_insured_address_zip =>
                this.setState({patient_primary_insurance_insured_address_zip})
              }
              autoCapitalize='none'
              value={this.state.patient_primary_insurance_insured_address_zip}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Employer Name</Text>
            <TextInput
              onChangeText={patient_primary_insurance_insured_employer =>
                this.setState({patient_primary_insurance_insured_employer})
              }
              autoCapitalize='none'
              value={this.state.patient_primary_insurance_insured_employer}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Address</Text>
            <TextInput
              onChangeText={patient_primary_insurance_insured_employer_address_street =>
                this.setState({patient_primary_insurance_insured_employer_address_street})
              }
              autoCapitalize='none'
              value={this.state.patient_primary_insurance_insured_employer_address_street}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>City</Text>
            <TextInput
              onChangeText={patient_primary_insurance_insured_employer_address_city =>
                this.setState({patient_primary_insurance_insured_employer_address_city})
              }
              autoCapitalize='none'
              value={this.state.patient_primary_insurance_insured_employer_address_city}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>State</Text>
            <TextInput
              onChangeText={patient_primary_insurance_insured_employer_address_state =>
                this.setState({patient_primary_insurance_insured_employer_address_state})
              }
              autoCapitalize='none'
              value={this.state.patient_primary_insurance_insured_employer_address_state}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Zip Code</Text>
            <TextInput
              onChangeText={patient_primary_insurance_insured_employer_address_zip =>
                this.setState({patient_primary_insurance_insured_employer_address_zip})
              }
              autoCapitalize='none'
              value={this.state.patient_primary_insurance_insured_employer_address_zip}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <Text style={[s.mv25, s.ft15RegularBlack]}>Patient's relationship to insured</Text>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Self
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.primary_self == 'Self'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({primary_self: 'Self'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.primary_self == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({primary_self: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Spouse
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.primary_spouse == 'Spouse'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({primary_spouse: 'Spouse'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.primary_spouse == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({primary_spouse: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Child
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.primary_child == 'Child'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({primary_child: 'Child'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.primary_child == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({primary_child: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Others</Text>
            <TextInput
              onChangeText={primary_other =>
                this.setState({primary_other})
              }
              autoCapitalize='none'
              value={this.state.primary_other}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Plan name & Address</Text>
            <TextInput
              onChangeText={patient_primary_insurance_plan_name_address =>
                this.setState({patient_primary_insurance_plan_name_address})
              }
              autoCapitalize='none'
              value={this.state.patient_primary_insurance_plan_name_address}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[s.splitLine, s.mb20]}></View>
          <Text style={[s.mb20, s.ft20Black]}>Secondary</Text>
          <View style={[s.splitLine, s.mb20]}></View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Name of insured:</Text>
            <TextInput
              onChangeText={patient_secondary_insurance_insured_name =>
                this.setState({patient_secondary_insurance_insured_name})
              }
              autoCapitalize='none'
              value={this.state.patient_secondary_insurance_insured_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Is insured a patient?
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.patient_secondary_insurance_insured_is_patient == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_secondary_insurance_insured_is_patient: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.patient_secondary_insurance_insured_is_patient == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_secondary_insurance_insured_is_patient: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Birth Date:</Text>
            <TextInput
              onChangeText={patient_secondary_insurance_insured_dob =>
                this.setState({patient_secondary_insurance_insured_dob})
              }
              autoCapitalize='none'
              value={this.state.patient_secondary_insurance_insured_dob}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>ID #:</Text>
            <TextInput
              onChangeText={patient_secondary_insurance_id =>
                this.setState({patient_secondary_insurance_id})
              }
              autoCapitalize='none'
              value={this.state.patient_secondary_insurance_id}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Group #:</Text>
            <TextInput
              onChangeText={patient_secondary_insurance_group_id =>
                this.setState({patient_secondary_insurance_group_id})
              }
              autoCapitalize='none'
              value={this.state.patient_secondary_insurance_group_id}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Address</Text>
            <TextInput
              onChangeText={patient_secondary_insurance_insured_address_street =>
                this.setState({patient_secondary_insurance_insured_address_street})
              }
              autoCapitalize='none'
              value={this.state.patient_secondary_insurance_insured_address_street}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>City</Text>
            <TextInput
              onChangeText={patient_secondary_insurance_insured_address_city =>
                this.setState({patient_secondary_insurance_insured_address_city})
              }
              autoCapitalize='none'
              value={this.state.patient_secondary_insurance_insured_address_city}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>State</Text>
            <TextInput
              onChangeText={patient_secondary_insurance_insured_address_state =>
                this.setState({patient_secondary_insurance_insured_address_state})
              }
              autoCapitalize='none'
              value={this.state.patient_secondary_insurance_insured_address_state}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Zip Code</Text>
            <TextInput
              onChangeText={patient_secondary_insurance_insured_address_zip =>
                this.setState({patient_secondary_insurance_insured_address_zip})
              }
              autoCapitalize='none'
              value={this.state.patient_secondary_insurance_insured_address_zip}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Employer Name</Text>
            <TextInput
              onChangeText={patient_secondary_insurance_insured_employer =>
                this.setState({patient_secondary_insurance_insured_employer})
              }
              autoCapitalize='none'
              value={this.state.patient_secondary_insurance_insured_employer}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Address</Text>
            <TextInput
              onChangeText={patient_secondary_insurance_insured_employer_address_street =>
                this.setState({patient_secondary_insurance_insured_employer_address_street})
              }
              autoCapitalize='none'
              value={this.state.patient_secondary_insurance_insured_employer_address_street}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>City</Text>
            <TextInput
              onChangeText={patient_secondary_insurance_insured_employer_address_city =>
                this.setState({patient_secondary_insurance_insured_employer_address_city})
              }
              autoCapitalize='none'
              value={this.state.patient_secondary_insurance_insured_employer_address_city}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>State</Text>
            <TextInput
              onChangeText={patient_secondary_insurance_insured_employer_address_state =>
                this.setState({patient_secondary_insurance_insured_employer_address_state})
              }
              autoCapitalize='none'
              value={this.state.patient_secondary_insurance_insured_employer_address_state}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Zip Code</Text>
            <TextInput
              onChangeText={patient_secondary_insurance_insured_employer_address_zip =>
                this.setState({patient_secondary_insurance_insured_employer_address_zip})
              }
              autoCapitalize='none'
              value={this.state.patient_secondary_insurance_insured_employer_address_zip}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <Text style={[s.mv25, s.ft15RegularBlack]}>Patient's relationship to insured</Text>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Self
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.secondary_self == 'Self'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({secondary_self: 'Self'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.secondary_self == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({secondary_self: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Spouse
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.secondary_spouse == 'Spouse'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({secondary_spouse: 'Spouse'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.secondary_spouse == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({secondary_spouse: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Child
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.secondary_child == 'Child'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({secondary_child: 'Child'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.secondary_child == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({secondary_child: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Others</Text>
            <TextInput
              onChangeText={secondary_other =>
                this.setState({secondary_other})
              }
              autoCapitalize='none'
              value={this.state.secondary_other}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Plan name & Address</Text>
            <TextInput
              onChangeText={patient_secondary_insurance_plan_name_address =>
                this.setState({patient_secondary_insurance_plan_name_address})
              }
              autoCapitalize='none'
              value={this.state.patient_secondary_insurance_plan_name_address}
              style={[styles.inputText, styles.w50]}
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
