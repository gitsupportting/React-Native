import React from 'react'
import {
  Container,
  Header,
  Footer,
  FooterTab,
  Text,
  Button,
  Content,
} from 'native-base'
import {
  ActivityIndicator,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native'
import Moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from "react-native-vector-icons/Ionicons";
var ClinicInfo = require('../config/ClinicInfo.json');

var s = require('../assets/css/styles')
let baseURL = 'https://us-central1-smiledental-273502.cloudfunctions.net/'


export default class CheckedInScreen extends React.Component {
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
      isLoading: false,
      active: false,
      clinic_id: ClinicInfo.clinic_id,
      form_fill_date: today,
      patient_dob: '',
      patient_full_name: '',
      covid_contact_last_30_days: 'YES',
      covid_travel_country_past_60_days: 'YES',
      covid_travel_cruise_past_60_days: 'YES',
      covid_travel_countries_visited: null,
      covid_fever_past_48_hours: 'YES',
      covid_symptom_severe_headache: 'YES',
      covid_symptom_muscle_pain: 'YES',
      covid_symptom_diarrhea: 'YES',
      covid_symptom_respiratory_symptoms: 'YES',
      covid_symptom_coughing: 'YES',
      covid_symptom_sore_throat: 'YES',
      clinic_logo: ClinicInfo.clinic_logo,
    }
  }

  onSumbmit = () => {
    this.setState({ isLoading : true});
    AsyncStorage.getItem('userData').then(async res => {
      await fetch(baseURL + 'covidForm', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clinic_id: ClinicInfo.clinic_id,
          clinic_email : ClinicInfo.clinic_email,
          sender_id: JSON.parse(res).phone,
          form_fill_date: this.state.form_fill_date,
          patient_dob: this.state.patient_dob,
          patient_full_name: this.state.patient_full_name,
          covid_contact_last_30_days: this.state.covid_contact_last_30_days,
          covid_travel_country_past_60_days: this.state
            .covid_travel_country_past_60_days,
          covid_travel_cruise_past_60_days: this.state
            .covid_travel_cruise_past_60_days,
          covid_travel_countries_visited: this.state
            .covid_travel_countries_visited,
          covid_fever_past_48_hours: this.state.covid_fever_past_48_hours,
          covid_symptom_severe_headache: this.state
            .covid_symptom_severe_headache,
          covid_symptom_muscle_pain: this.state.covid_symptom_muscle_pain,
          covid_symptom_diarrhea: this.state.covid_symptom_diarrhea,
          covid_symptom_respiratory_symptoms: this.state
            .covid_symptom_respiratory_symptoms,
          covid_symptom_coughing: this.state.covid_symptom_coughing,
          covid_symptom_sore_throat: this.state.covid_symptom_sore_throat,
          clinic_logo: this.state.clinic_logo,
        }),
      })
        .then(res => {
          if (res.status == 200) {
            this.init()
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

  addData () {
    //this.webView.postMessage("post");
  }

  onCheckedIn = () => {
    this.props.navigation.navigate('Home', {})
  }

  onHome = () => {
    this.props.navigation.navigate('Home', {})
  }

  onAnnounce = () => {
    this.props.navigation.navigate('Announce', {})
  }

  onCalendar = () => {
    this.props.navigation.navigate('Calendar', {})
  }

  onChat = () => {
    this.props.navigation.navigate('Chat', {})
  }

  onDoc = () => {
    this.props.navigation.navigate('Doc', {})
  }

  onProfile = () => {
    this.setState({
      active: false,
    })
    this.props.navigation.navigate('ProfileDetail')
  }

  onWeb = () => {
    this.setState({
      active: false,
    })
    this.props.navigation.navigate('Web')
  }

  render () {
    if (this.state.isLoading) {
      return (
    <Container style={s.container}>
    <Header style={s.headerContent}>
      <View style={s.spaceBetween}>
        <TouchableOpacity
          style={s.checkInEm}
          activeOpacity={1}
          onPress={() => this.onHome()}>
          <Text>Done</Text>
        </TouchableOpacity>
        <Text style={s.title}>COVID-19 CHECK</Text>
        <TouchableOpacity
        style={s.checkInEm}
        />
      </View>
    </Header>
    <Content style={s.mainContainer}>
      <View style={{marginTop: 100, alignItems: "center"}}>
          <Text>Uploading Form</Text>
          <ActivityIndicator size="large" color="#0c9" />
      </View>
      </Content>
      </Container>
    )}

    return (
      <Container style={s.container}>
        <Header style={s.headerContent}>
          <View style={s.spaceBetween}>
            <TouchableOpacity
              style={s.checkInEm}
              activeOpacity={1}
              onPress={() => this.onHome()}>
              <Text>Done</Text>
            </TouchableOpacity>
            <Text style={s.title}>COVID-19 CHECK</Text>
            <TouchableOpacity
            style={s.checkInEm}
            />
          </View>
        </Header>
        <Content style={s.mainContainer}>
          <Image 
            style={[s.ImageIconStyle_logo, styles.alignCenter]}
            source={{uri: ClinicInfo.clinic_logo}} 
          />
          <View style={[s.splitLine, s.mv15]}></View>
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
          <View style={[s.splitLine, s.mb15]}></View>
          <View style={[styles.itemWrap, s.mb15]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>DOB</Text>
            <TextInput
              onChangeText={patient_dob => this.setState({patient_dob})}
              autoCapitalize='none'
              value={this.state.patient_dob}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[s.splitLine, s.mb15]}></View>
          <View style={s.mv25}>
            <Text style={[s.ft14300Gray, s.txCenter, s.mb15]}>
              <Text style={{width: '60%'}}>
                Please Check YES or NO on the following:
              </Text>
            </Text>
            <Text style={[s.ft14300Gray, s.txCenter]}>
              <Text style={{width: '80%'}}>
                HAVE YOU OR ANYONE YOU ARE IN CLOSE CONTACT WITH
              </Text>
            </Text>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>Been in contact with anyone that has been diagnosed or is being monitored by CDC for COVID-19 in the last 30 days?</Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_contact_last_30_days == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_contact_last_30_days: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_contact_last_30_days == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_contact_last_30_days: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Traveled in or out of the country in the past 60 days?
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_travel_country_past_60_days == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_travel_country_past_60_days: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_travel_country_past_60_days == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_travel_country_past_60_days: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Traveled on a cruse ship in the case 60 days?
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_travel_cruise_past_60_days == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_travel_cruise_past_60_days: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_travel_cruise_past_60_days == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_travel_cruise_past_60_days: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
            {this.state.covid_travel_cruise_past_60_days == 'YES' ? (
              <View style={[styles.itemWrap, s.mt20]}>
                <Text style={[s.ft14300Gray, s.flex70]}>
                  If yes, what country did you visit?
                </Text>
                <TextInput
                  onChangeText={covid_travel_countries_visited =>
                    this.setState({covid_travel_countries_visited})
                  }
                  autoCapitalize='none'
                  value={this.state.covid_travel_countries_visited}
                  style={[styles.inputText, styles.w30]}
                />
              </View>
            ) : (
              <View></View>
            )}
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Have you had a fever freer than 100.0 F/38.0 C?
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
            <Text style={s.ft14300Gray}>Sever Headache</Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_symptom_severe_headache == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_symptom_severe_headache: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_symptom_severe_headache == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_symptom_severe_headache: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>Muscle Pain</Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_symptom_muscle_pain == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_symptom_muscle_pain: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_symptom_muscle_pain == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_symptom_muscle_pain: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Diarrhea / Vomiting / Abdominal Pain
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_symptom_diarrhea == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_symptom_diarrhea: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_symptom_diarrhea == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_symptom_diarrhea: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Respiratory Symptoms / Soreness Of Breath
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_symptom_respiratory_symptoms == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_symptom_respiratory_symptoms: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_symptom_respiratory_symptoms == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_symptom_respiratory_symptoms: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>Coughing?</Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_symptom_coughing == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_symptom_coughing: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_symptom_coughing == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_symptom_coughing: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>Sore Throat?</Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.covid_symptom_sore_throat == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_symptom_sore_throat: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.covid_symptom_sore_throat == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({covid_symptom_sore_throat: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <Text style={[s.ft14300Gray, s.mv15]}>
            Signature / Relationship of person completing this questioners /
            Date
          </Text>
          <TextInput
            onChangeText={form_fill_date => this.setState({form_fill_date})}
            autoCapitalize='none'
            value={this.state.form_fill_date}
            style={styles.inputText}
          />
          <TouchableOpacity
            style={[styles.btnActive, s.w100]}
            onPress={this.onSumbmit}
            activeOpacity={1}>
            <Text style={styles.activeTxt}>Submit</Text>
          </TouchableOpacity>
          
        </Content>
        <Footer>
          <FooterTab style={s.footerContent}>
          <Button onPress={this.onHome}>
              <Icon name="ios-home-outline" size={25} />
            </Button>
            <Button onPress={this.onAnnounce}>
              <Icon name="ios-flag" size={30} />
            </Button>
            <Button onPress={this.onCalendar}>
              <Icon name="ios-calendar-outline" size={30} />
            </Button>
            <Button onPress={this.onChat}>
              <Icon name="ios-chatbubble-ellipses-outline" size={30} />
            </Button>
            <Button onPress={this.onDoc}>
              <Icon name="ios-information-circle-outline" size={30} />
            </Button>
          </FooterTab>
        </Footer>
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
  w60: {
    width: '70%'
  },
  w30: {
    width: '30%'
  },
  itemWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  btnActive: {
    height: 50,
    backgroundColor: '#173147',
    borderRadius: 8,
    borderColor: '#173147',
    borderWidth: 1,
    marginVertical: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTxt: {
    fontFamily: 'Lato-Light',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
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
