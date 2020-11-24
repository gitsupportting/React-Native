import React from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Text,
  KeyboardAvoidingView,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {Container, Header, Content} from 'native-base'
import backBtn from '../assets/icons/backBtn.png'
var s = require('../assets/css/styles')

export default class FormPatientScreen extends React.Component {
  constructor (props) {
    super(props)
    this.init()
  }

  init = () => {
    this.state = {
      patient_full_name: '',
      form_fill_date: '',
      patient_gender: '',
      patient_family_status: '',
      patient_ssn: '',
      patient_dob: '',
      patient_phone_home: '',
      patient_phone_work: '',
      patient_phone_work_extension: '',
      patient_phone_mobile: '',
      patient_address_street: '',
      patient_address_city: '',
      patient_address_state: '',
      patient_address_zip: '',
      patient_email_address: '',
    }
  }

  onBack = () => {
    this.props.navigation.navigate('Home')
  }

  onNext = () => {
    const {
      patient_full_name,
      form_fill_date,
      patient_gender,
      patient_family_status,
      patient_ssn,
      patient_dob,
      patient_phone_home,
      patient_phone_work,
      patient_phone_work_extension,
      patient_phone_mobile,
      patient_address_street,
      patient_address_city,
      patient_address_state,
      patient_address_zip,
      patient_email_address,
    } = this.state
    let formData = {
      "patient_full_name" : patient_full_name,
      "form_fill_date" : form_fill_date,
      "patient_gender" : patient_gender,
      "patient_family_status" : patient_family_status,
      "patient_ssn" : patient_ssn,
      "patient_dob" : patient_dob,
      "patient_phone_home" : patient_phone_home,
      "patient_phone_work" : patient_phone_work,
      "patient_phone_work_extension" : patient_phone_work_extension,
      "patient_phone_mobile" : patient_phone_mobile,
      "patient_address_street" : patient_address_street,
      "patient_address_city" : patient_address_city,
      "patient_address_state" : patient_address_state,
      "patient_address_zip" : patient_address_zip,
      "patient_email_address" : patient_email_address,
    }
    AsyncStorage.setItem('formData', JSON.stringify(formData)).then(() => {
      this.props.navigation.navigate('FormHealth')
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
            <Text style={s.title}>Patient Information</Text>
            <TouchableOpacity
              style={{width: 10}}
              activeOpacity={1}>
            </TouchableOpacity>
          </View>
        </Header>
        <Content style={s.mainContainer}>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Patient Name</Text>
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
            <Text style={[s.ft15RegularBlack, s.flex30]}>Date</Text>
            <TextInput
              onChangeText={form_fill_date => this.setState({form_fill_date})}
              autoCapitalize='none'
              value={this.state.form_fill_date}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Gender</Text>
            <TextInput
              onChangeText={patient_gender => this.setState({patient_gender})}
              autoCapitalize='none'
              value={this.state.patient_gender}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Family Status</Text>
            <TextInput
              onChangeText={patient_family_status =>
                this.setState({patient_family_status})
              }
              autoCapitalize='none'
              value={this.state.patient_family_status}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Social Security</Text>
            <TextInput
              onChangeText={patient_ssn => this.setState({patient_ssn})}
              autoCapitalize='none'
              value={this.state.patient_ssn}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Birth Date</Text>
            <TextInput
              onChangeText={patient_dob => this.setState({patient_dob})}
              autoCapitalize='none'
              value={this.state.patient_dob}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          {/* <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Age</Text>
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
            <Text style={[s.ft15RegularBlack, s.flex30]}>Phone (Home)</Text>
            <TextInput
              onChangeText={patient_phone_home =>
                this.setState({patient_phone_home})
              }
              autoCapitalize='none'
              value={this.state.patient_phone_home}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Work</Text>
            <TextInput
              onChangeText={patient_phone_work =>
                this.setState({patient_phone_work})
              }
              autoCapitalize='none'
              value={this.state.patient_phone_work}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Ext</Text>
            <TextInput
              onChangeText={patient_phone_work_extension =>
                this.setState({patient_phone_work_extension})
              }
              autoCapitalize='none'
              value={this.state.patient_phone_work_extension}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Cell Phone</Text>
            <TextInput
              onChangeText={patient_phone_mobile =>
                this.setState({patient_phone_mobile})
              }
              autoCapitalize='none'
              value={this.state.patient_phone_mobile}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Address</Text>
            <TextInput
              onChangeText={patient_address_street =>
                this.setState({patient_address_street})
              }
              autoCapitalize='none'
              value={this.state.patient_address_street}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>City</Text>
            <TextInput
              onChangeText={patient_address_city =>
                this.setState({patient_address_city})
              }
              autoCapitalize='none'
              value={this.state.patient_address_city}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>State</Text>
            <TextInput
              onChangeText={patient_address_state =>
                this.setState({patient_address_state})
              }
              autoCapitalize='none'
              value={this.state.patient_address_state}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Zip Code</Text>
            <TextInput
              onChangeText={patient_address_zip =>
                this.setState({patient_address_zip})
              }
              autoCapitalize='none'
              value={this.state.patient_address_zip}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Email Address</Text>
            <TextInput
              onChangeText={patient_email_address =>
                this.setState({patient_email_address})
              }
              autoCapitalize='none'
              value={this.state.patient_email_address}
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
    height: 40,
  },
  w60: {
    width: '60%',
  },

  itemWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
})
