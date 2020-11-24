import React from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import DatePicker from 'react-native-datepicker'
import { View, TouchableOpacity, StyleSheet, TextInput, Text, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
var s = require('../assets/css/styles');
var ClinicInfo = require('../config/ClinicInfo.json');

export default class SignupScreen extends React.Component {

  
  constructor(props) {

    super(props);
    this.state = {
      signupFromLogin: this.props.navigation.state.params.signupFromLogin,
      firstName: null,
      lastName: null,
      email: null,
      birthday: null,
      phone: this.props.navigation.state.params.phone,
      isLoading: false
    };

  }

  onSignup = async () => {
    this.setState({isLoading: true});
    const {firstName, lastName, email, phone, birthday, signupFromLogin} = this.state;
    this.validation();
    if (signupFromLogin) {
      auth()
      .signInWithPhoneNumber(phone)
      .then(confirmResult => {
        this.setState({ 
          confirmResult: confirmResult
        }, ()=>{
          this.props.navigation.navigate('Confirm', {
            phone: phone, 
            firstName: firstName,
            lastName: lastName,
            birthday: birthday,
            email: email,
            confirmResult: this.state.confirmResult, 
            fromLogin: false
          });
        });
      })
      .catch(error => {
        alert(error.message);
        this.setState({isLoading: false});
        console.log(error);
      });
    } else {

      await fetch('https://us-central1-smiledental-273502.cloudfunctions.net/createPatient', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization' : '02bbac43cf01b72132c9996a2b485ca48fc10afdf12b583d7ee198b829079f64'
        },
        body: JSON.stringify({
          clinic_id : ClinicInfo.clinic_id,
          patient_first_name : firstName,
          patient_last_name : lastName, 
          patient_phone_number : phone,
          patient_email : email,
          patient_dob : birthday
        })
      })

        .then((responseData) => {
          if (responseData.status == 200) {
            alert("successfully registered");
            let userData = {
              'firstName': firstName,
              'lastName': lastName,
              'email' : email,
              'phone': phone
            }
            AsyncStorage.setItem('userData', JSON.stringify(userData)).then(() => {
              this.props.navigation.navigate('Home');
            });
          } else {
            alert("something went wrong!");
          }
        })
        .catch((error) => {
          alert(error);
          return;
        })
    }
    
  }

  validation =()=> {
    const { firstName, lastName, email, birthday, phone } = this.state;
    if (!phone || phone.length==0) {
      alert("Please insert phone number");
      return;
    }
    if (!firstName || firstName.length==0) {
      alert("Please insert first name");
      return;
    }
    if (!lastName || lastName.length==0) {
      alert("Please insert last name");
      return;
    }
    if (!birthday || birthday.length==0) {
      alert("Please insert birthday");
      return;
    }
    if (!email || email.length==0) {
      alert("Please insert email");
      return;
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={s.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      )
    }
    return (
      <KeyboardAvoidingView style={[s.loader, s.padding20]}>
        <Text style={s.title}>SIGN UP</Text>
        <View style={[s.mv15, s.w100]}>
          <Text style={[s.ft12Black, s.mv15, styles.textLeft]}>First Name</Text>
          <TextInput
            placeholder="First Name"
            onChangeText={(firstName) => this.setState({ firstName })}
            autoCapitalize='none'
            value={this.state.firstName}
            style={ styles.inputText }
          />
          <Text style={[s.ft12Black, s.mv15, styles.textLeft]}>Last Name</Text>
          <TextInput
            placeholder="Last Name"
            onChangeText={(lastName) => this.setState({ lastName })}
            autoCapitalize='none'
            value={this.state.lastName}
            style={ styles.inputText }
          />
          <Text style={[s.ft12Black, s.mv15, styles.textLeft]}>Email</Text>
          <TextInput
            placeholder="Email"
            onChangeText={(email) => this.setState({ email })}
            autoCapitalize='none'
            value={this.state.email}
            style={ styles.inputText }
          />
          <Text style={[s.ft12Black, s.mv15, styles.textLeft]}>Date of Birth</Text>
          <DatePicker
            style={{width: '100%'}}
            date={this.state.birthday}
            mode="date"
            placeholder="select birthday"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateInput: {
                borderRadius: 8,
                borderWidth: 0,
                borderBottomColor: '#E0E0E0',
                borderBottomWidth: 1,
                paddingLeft:10,
                width: '100%',
                fontFamily: 'NunitoSans-Light',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 14,
                lineHeight: 19,
                color: '#173147',
                backgroundColor: '#fff',
              },
              datePicker: {
                justifyContent:'center'
              }
            }}
            onDateChange={(birthday) => {this.setState({birthday: birthday})}}
          /> 
          <Text style={[s.ft12Black, s.mv15, styles.textLeft]}>Phone</Text>
          <TextInput
            placeholder="phone number"
            onChangeText={(phone) => this.setState({ phone })}
            autoCapitalize='none'
            value={this.state.phone}
            style={ styles.inputText }
          />    
        </View>
        <TouchableOpacity
          style={styles.btnActive}
          onPress={this.onSignup}
          activeOpacity={1}>
          <Text style={ styles.activeTxt}>Create Account</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  textLeft: {
    textAlign:'left',
    width: '100%',
    paddingLeft: 10,
  },
  inputText: {
    borderRadius: 8,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    paddingLeft:10,
    width: '100%',
    fontFamily: 'NunitoSans-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
    color: '#173147',
    backgroundColor: '#fff',
  },
  btnActive: {
    height: 50,
    backgroundColor: '#173147',
    borderRadius: 8,
    borderColor: '#173147',
    borderWidth: 1,
    marginVertical: 20,
    width: '100%',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeTxt: {
    fontFamily: 'Lato-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    color:'#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  lineBtnTxt: {
    width: '100%',
    marginRight: 20,
    textAlign: "right",
  },
  pr40: {
    paddingRight: 50,
  },
})