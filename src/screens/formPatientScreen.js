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

export default class FormPatientScreen extends React.Component {
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
    }
  }

  onBack =()=> {
    this.props.navigation.navigate('Web');
  }

  onNext =()=> {
    this.props.navigation.navigate('FormHealth');
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
          <Text style={[s.mb20, s.ft20Black]}>Patient Information</Text>
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
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w60]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Gender</Text>
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
            <Text style={[s.ft15RegularBlack, s.flex30]}>Family Status</Text>
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
            <Text style={[s.ft15RegularBlack, s.flex30]}>Social Security</Text>
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
            <Text style={[s.ft15RegularBlack, s.flex30]}>Birth Date</Text>
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
            <Text style={[s.ft15RegularBlack, s.flex30]}>Age</Text>
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
            <Text style={[s.ft15RegularBlack, s.flex30]}>Phone (Home)</Text>
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
            <Text style={[s.ft15RegularBlack, s.flex30]}>Work</Text>
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
            <Text style={[s.ft15RegularBlack, s.flex30]}>Ext</Text>
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
            <Text style={[s.ft15RegularBlack, s.flex30]}>Cell Phone</Text>
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
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex30]}>Email Address</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
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
  
  itemWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
})
