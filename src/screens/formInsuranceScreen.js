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

export default class FormInsuranceScreen extends React.Component {
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
    this.props.navigation.navigate('FormEmploy');
  }

  onNext =()=> {
    this.props.navigation.navigate('FormConsent');
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
          <Text style={[s.mb20, s.ft20Black]}>Insurance Information</Text>
          <View style={[s.splitLine, s.mb20]}></View>
          <Text style={[s.mb20, s.ft20Black]}>Primary</Text>
          <View style={[s.splitLine, s.mb20]}></View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Name of insured:</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
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
            <Text style={[s.ft15RegularBlack, s.flex30]}>Birth Date:</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>ID #:</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Group #:</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Address</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>City</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>State</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Zip Code</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Employer Name</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
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
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Spouse
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
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Child
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
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Others</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Plan name & Address</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[s.splitLine, s.mb20]}></View>
          <Text style={[s.mb20, s.ft20Black]}>Secondary</Text>
          <View style={[s.splitLine, s.mb20]}></View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Name of insured:</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
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
            <Text style={[s.ft15RegularBlack, s.flex30]}>Birth Date:</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>ID #:</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Group #:</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Address</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>City</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>State</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Zip Code</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Employer Name</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
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
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Spouse
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
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Child
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
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Others</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[styles.itemWrap, s.mb20]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Plan name & Address</Text>
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
