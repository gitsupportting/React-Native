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
var s = require('../assets/css/styles');
let baseURL = 'https://us-central1-smiledental-273502.cloudfunctions.net/';
import logoBase64 from "../assets/logo";

export default class FormConsentScreen extends React.Component {
  constructor (props) {
    super(props);
    this.init();
  }

  init = () => {
    this.state = {
      patient_consent_signature : "",
      patient_consent_signature_date : "",
      patient_consent_signature_relationship : "",
      patient_consent_signature2 : "",
      patient_consent_signature2_date : "",
      patient_consent_signature2_relationship : "",
    }
    AsyncStorage.getItem('formData').then(res => {
      this.formData = JSON.parse(res);
    }) 
  }

  onSumbmit = () => {
    const {
      patient_consent_signature,
      patient_consent_signature_date,
      patient_consent_signature_relationship,
      patient_consent_signature2,
      patient_consent_signature2_date,
      patient_consent_signature2_relationship,
    } = this.state;

    this.formData.patient_consent_signature = patient_consent_signature;
    this.formData.patient_consent_signature_date = patient_consent_signature_date;
    this.formData.patient_consent_signature_relationship = patient_consent_signature_relationship;
    this.formData.patient_consent_signature2 = patient_consent_signature2;
    this.formData.patient_consent_signature2_date = patient_consent_signature2_date;
    this.formData.patient_consent_signature2_relationship = patient_consent_signature2_relationship;
    this.formData.clinic_id = 74,
    this.formData.clinic_email = "hafez@4smile.com",
    this.formData.clinic_logo = logoBase64

    AsyncStorage.getItem('userData').then(async res => {
      this.formData.sender_id =  JSON.parse(res).phone;
      await fetch(baseURL + 'intakeForm', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.formData),
      })
        .then(res => {
          if (res.status == 200) {
            this.props.navigation.navigate('Home')
          } else {
            alert('Something went wrong!')
          }
        })
        .catch(err => {
          alert(err)
          return
        })
    })
  }

  onBack =()=> {
    this.props.navigation.navigate('FormInsurance');
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
          <Text style={[s.mb20, s.ft20Black]}>Consent For Services</Text>
          <View style={[styles.itemWrap, s.mt20]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Signature</Text>
            <TextInput
              onChangeText={patient_consent_signature =>
                this.setState({patient_consent_signature})
              }
              autoCapitalize='none'
              value={this.state.patient_consent_signature}
              style={[styles.inputText, styles.w70]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Date</Text>
            <TextInput
              onChangeText={patient_consent_signature_date =>
                this.setState({patient_consent_signature_date})
              }
              autoCapitalize='none'
              value={this.state.patient_consent_signature_date}
              style={[styles.inputText, styles.w70]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Relationship</Text>
            <TextInput
              onChangeText={patient_consent_signature_relationship =>
                this.setState({patient_consent_signature_relationship})
              }
              autoCapitalize='none'
              value={this.state.patient_consent_signature_relationship}
              style={[styles.inputText, styles.w70]}
            />
          </View>
          <View style={[styles.itemWrap, s.mt20]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Signature</Text>
            <TextInput
              onChangeText={patient_consent_signature2 =>
                this.setState({patient_consent_signature2})
              }
              autoCapitalize='none'
              value={this.state.patient_consent_signature2}
              style={[styles.inputText, styles.w70]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Date</Text>
            <TextInput
              onChangeText={patient_consent_signature2_date =>
                this.setState({patient_consent_signature2_date})
              }
              autoCapitalize='none'
              value={this.state.patient_consent_signature2_date}
              style={[styles.inputText, styles.w70]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Relationship</Text>
            <TextInput
              onChangeText={patient_consent_signature2_relationship =>
                this.setState({patient_consent_signature2_relationship})
              }
              autoCapitalize='none'
              value={this.state.patient_consent_signature2_relationship}
              style={[styles.inputText, styles.w70]}
            />
          </View>
          <TouchableOpacity
            style={[s.btnActive, s.w100]}
            onPress={this.onSumbmit}
            activeOpacity={1}>
            <Text style={s.activeTxt}>Submit</Text>
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
  w70: {
    width: '70%'
  },
  itemWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
})
