import React from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Text
} from 'react-native'
import Moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage'
import {Container, Header, Content} from 'native-base'
import backBtn from '../assets/icons/backBtn.png'
var s = require('../assets/css/styles')

export default class FormHealthScreen extends React.Component {
  constructor (props) {
    super(props)
    this.init()
  }

  init = () => {
    let today = new Date()
    today = Moment(today)
      .format('MM/DD/YYYY')
      .toString()
    this.state = {
      active: false,
      clinic_id: 74,
      form_fill_date: today,
      patient_dob: '',
      covid_fever_past_48_hours: 'YES',
    }
  }

  onBack =()=> {
    this.props.navigation.navigate('Web');
  }

  onNext =()=> {
    this.props.navigation.navigate('FormReferral');
  } 

  render () {
    return (
      <Container style={s.container}>
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
          <Text style={[s.mb20, s.ft20Black]}>Heath Information</Text>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Date of Last Dental Vist</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Reason For Visit</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[s.splitLine]}></View>
          <Text style={s.title, s.mv25}>
            Have you ever had any of the following? Please check those that apply:
          </Text>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              AIDS
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Excessive Bleeding
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Liver Disease
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Stroke
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Fainting
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Mental Disorders
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Tuberculosis
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Claucoma
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Nervous Disorders
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Tumors
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Anemia
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Snoring
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Pacemaker
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              UIcers
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Arthritis
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Hay Fever
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Venereal Disease
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Artificial Joints
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Head Injuries
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Codeine Allergy
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Asthma
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Heart Disease
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Radiation Treatment
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Penicillin Allergy
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Blood Disease
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Heart Murmur
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Morning Headaches
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Cancer
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Hepatitis
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Rheumatic Fever
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Diabetes
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              High Blood Pressure
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Rheumatism
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Dizziness
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Jaundice
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Sinus Problem
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Epilepsy
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Kidney Disease
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Stomach Problems
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Have you ever had any complications following dental treatment
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>If yes, please explain</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Have you been admitted to a hospital or needed emergency care during the past two days
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>If yes, please explain</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Are you now under the care of a physician?
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>If yes, please explain</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Name of physician</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Phone</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Are you currently taking any medications?
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_fever_past_48_hours == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_fever_past_48_hours: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>If yes, please explain</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Signature</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Date</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
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
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  alignCenter: {
    alignSelf: 'center',
  },
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
