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

export default class FormHealthScreen extends React.Component {
  constructor (props) {
    super(props)
    this.init();
  }

  init = () => {

    this.state = {
      patient_last_dental_visit_date : "",
      patient_reason_for_visit : "",
      patient_previous_conditions : "",

      AIDS: "",
      ExcessiveBleeding: "",
      LiverDisease: "",
      Stroke: "",
      Fainting: "",
      MentalDisorders: "",
      Tuberculosis: "",
      Glaucoma: "",
      NervousDisorders: "",
      Tumors: "",
      Anemia: "",
      Snoring: "",
      Pacemaker: "",
      Ulcers: "",
      Arthritis: "",
      HayFever: "",
      VenerealDisease: "",
      ArtificialJoints: "",
      HeadInjuries: "",
      CodeineAllergy: "",
      Asthma: "",
      HeartDisease: "",
      RadiationTreatment: "",
      PenicillinAllergy: "",
      BloodDisease: "",
      HeartMurmur: "",
      MorningHeadaches: "",
      Cancer: "",
      Hepatitis: "",
      RheumaticFever: "",
      Diabetes: "",
      HighBloodPressure: "",
      Rheumatism: "",
      Dizziness: "",
      Jaundice: "",
      SinusProblems: "",
      Epilepsy: "",
      KidneyDisease: "",
      StomachProblems: "",

      patient_complications_from_dental : "NO",
      patient_complications_from_dental_explain : "",
      patient_hospital_past_two_years : "YES",
      patient_hospital_past_two_years_explain : "",
      patient_under_physician_care : "YES",
      patient_under_physician_care_explain : "",
      patient_physician_name : "",
      patient_physician_phone : "",
      patient_taking_medication : "NO",
      patient_taking_medication_explain : "",
      patient_signature : "",
    }  
    AsyncStorage.getItem('formData').then(res => {
      this.formData = JSON.parse(res);
    })  
  }

  onBack =()=> {
    this.props.navigation.navigate('Web');
  }

  onNext =()=> {

    const {
      patient_last_dental_visit_date,
      patient_reason_for_visit,
      patient_complications_from_dental,
      patient_complications_from_dental_explain,
      patient_hospital_past_two_years,
      patient_hospital_past_two_years_explain,
      patient_under_physician_care,
      patient_under_physician_care_explain,
      patient_physician_name,
      patient_physician_phone,
      patient_taking_medication,
      patient_taking_medication_explain,
      patient_signature,
    } = this.state;

    let patient_previous_conditions = "";

    if (this.state.AIDS != "") {
      patient_previous_conditions += this.state.AIDS + " ";
    }
    if (this.state.ExcessiveBleeding != "") {
      patient_previous_conditions += this.state.ExcessiveBleeding + " ";
    }
    if (this.state.LiverDisease != "") {
      patient_previous_conditions += this.state.LiverDisease + " ";
    }
    if (this.state.Stroke != "") {
      patient_previous_conditions += this.state.Stroke + " ";
    }
    if (this.state.Fainting != "") {
      patient_previous_conditions += this.state.Fainting + " ";
    }
    if (this.state.MentalDisorders != "") {
      patient_previous_conditions += this.state.MentalDisorders + " ";
    }
    if (this.state.Tuberculosis != "") {
      patient_previous_conditions += this.state.Tuberculosis + " ";
    }
    if (this.state.Glaucoma != "") {
      patient_previous_conditions += this.state.Glaucoma + " ";
    }
    if (this.state.NervousDisorders != "") {
      patient_previous_conditions += this.state.NervousDisorders + " ";
    }
    if (this.state.Tumors != "") {
      patient_previous_conditions += this.state.Tumors + " ";
    }
    if (this.state.Anemia != "") {
      patient_previous_conditions += this.state.Anemia + " ";
    }
    if (this.state.Snoring != "") {
      patient_previous_conditions += this.state.Snoring + " ";
    }
    if (this.state.Pacemaker != "") {
      patient_previous_conditions += this.state.Pacemaker + " ";
    }
    if (this.state.Ulcers != "") {
      patient_previous_conditions += this.state.Ulcers + " ";
    }
    if (this.state.Arthritis != "") {
      patient_previous_conditions += this.state.Arthritis + " ";
    }
    if (this.state.HayFever != "") {
      patient_previous_conditions += this.state.HayFever + " ";
    }
    if (this.state.VenerealDisease != "") {
      patient_previous_conditions += this.state.VenerealDisease + " ";
    }
    if (this.state.ArtificialJoints != "") {
      patient_previous_conditions += this.state.ArtificialJoints + " ";
    }
    if (this.state.HeadInjuries != "") {
      patient_previous_conditions += this.state.HeadInjuries + " ";
    }
    if (this.state.CodeineAllergy != "") {
      patient_previous_conditions += this.state.CodeineAllergy + " ";
    }
    if (this.state.Asthma != "") {
      patient_previous_conditions += this.state.Asthma + " ";
    }
    if (this.state.HeartDisease != "") {
      patient_previous_conditions += this.state.HeartDisease;
    }
    if (this.state.RadiationTreatment != "") {
      patient_previous_conditions += this.state.RadiationTreatment + " ";
    }
    if (this.state.PenicillinAllergy != "") {
      patient_previous_conditions += this.state.PenicillinAllergy + " ";
    }
    if (this.state.BloodDisease != "") {
      patient_previous_conditions += this.state.BloodDisease + " ";
    }
    if (this.state.HeartMurmur != "") {
      patient_previous_conditions += this.state.HeartMurmur + " ";
    }
    if (this.state.MorningHeadaches != "") {
      patient_previous_conditions += this.state.MorningHeadaches + " ";
    }
    if (this.state.Cancer != "") {
      patient_previous_conditions += this.state.Cancer + " ";
    }
    if (this.state.Hepatitis != "") {
      patient_previous_conditions += this.state.Hepatitis + " ";
    }
    if (this.state.RheumaticFever != "") {
      patient_previous_conditions += this.state.RheumaticFever + " ";
    }
    if (this.state.Diabetes != "") {
      patient_previous_conditions += this.state.Diabetes + " ";
    }
    if (this.state.HighBloodPressure != "") {
      patient_previous_conditions += this.state.HighBloodPressure + " ";
    }
    if (this.state.Rheumatism != "") {
      patient_previous_conditions += this.state.Rheumatism + " ";
    }
    if (this.state.Dizziness != "") {
      patient_previous_conditions += this.state.Dizziness + " ";
    }
    if (this.state.Jaundice != "") {
      patient_previous_conditions += this.state.Jaundice + " ";
    }
    if (this.state.SinusProblems != "") {
      patient_previous_conditions += this.state.SinusProblems + " ";
    }
    if (this.state.Epilepsy != "") {
      patient_previous_conditions += this.state.Epilepsy + " ";
    }
    if (this.state.KidneyDisease != "") {
      patient_previous_conditions += this.state.KidneyDisease + " ";
    }
    if (this.state.StomachProblems != "") {
      patient_previous_conditions += this.state.StomachProblems + " ";
    }

    this.formData.patient_previous_conditions = patient_previous_conditions;
    this.formData.patient_last_dental_visit_date = patient_last_dental_visit_date;
    this.formData.patient_reason_for_visit = patient_reason_for_visit;
    this.formData.patient_complications_from_dental = patient_complications_from_dental;
    this.formData.patient_complications_from_dental_explain = patient_complications_from_dental_explain;
    this.formData.patient_hospital_past_two_years = patient_hospital_past_two_years;
    this.formData.patient_hospital_past_two_years_explain = patient_hospital_past_two_years_explain;
    this.formData.patient_under_physician_care = patient_under_physician_care;
    this.formData.patient_under_physician_care_explain = patient_under_physician_care_explain;
    this.formData.patient_physician_name = patient_physician_name;
    this.formData.patient_physician_phone = patient_physician_phone;
    this.formData.patient_taking_medication = patient_taking_medication;
    this.formData.patient_taking_medication_explain = patient_taking_medication_explain;
    this.formData.patient_signature = patient_signature;

    AsyncStorage.setItem('formData', JSON.stringify(this.formData)).then(() => {
      this.props.navigation.navigate('FormReferral')
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
            <Text style={s.title}>Heath Information</Text>
            <TouchableOpacity
              style={{width: 10}}
              activeOpacity={1}>
            </TouchableOpacity>
          </View>
        </Header>
        <Content style={s.mainContainer}>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Date of Last Dental Vist</Text>
            <TextInput
              onChangeText={patient_last_dental_visit_date =>
                this.setState({patient_last_dental_visit_date})
              }
              autoCapitalize='none'
              value={this.state.patient_last_dental_visit_date}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Reason For Visit</Text>
            <TextInput
              onChangeText={patient_reason_for_visit =>
                this.setState({patient_reason_for_visit})
              }
              autoCapitalize='none'
              value={this.state.patient_reason_for_visit}
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
                  this.state.AIDS == 'AIDS'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({AIDS: 'AIDS'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.AIDS == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({AIDS: ''})
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
                  this.state.ExcessiveBleeding == 'ExcessiveBleeding'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({ExcessiveBleeding: 'ExcessiveBleeding'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.ExcessiveBleeding == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({ExcessiveBleeding: ''})
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
                  this.state.LiverDisease == 'LiverDisease'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({LiverDisease: 'LiverDisease'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.LiverDisease == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({LiverDisease: ''})
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
                  this.state.Stroke == 'Stroke'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Stroke: 'Stroke'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Stroke == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Stroke: ''})
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
                  this.state.Fainting == 'Fainting'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Fainting: 'Fainting'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Fainting == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Fainting: ''})
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
                  this.state.MentalDisorders == 'MentalDisorders'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({MentalDisorders: 'MentalDisorders'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.MentalDisorders == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({MentalDisorders: ''})
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
                  this.state.Tuberculosis == 'Tuberculosis'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Tuberculosis: 'Tuberculosis'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Tuberculosis == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Tuberculosis: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Glaucoma
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.Glaucoma == 'Glaucoma'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Glaucoma: 'Glaucoma'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Glaucoma == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Glaucoma: ''})
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
                  this.state.NervousDisorders == 'NervousDisorders'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({NervousDisorders: 'NervousDisorders'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.NervousDisorders == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({NervousDisorders: ''})
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
                  this.state.Tumors == 'Tumors'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Tumors: 'Tumors'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Tumors == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Tumors: ''})
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
                  this.state.Anemia == 'Anemia'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Anemia: 'Anemia'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Anemia == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Anemia: ''})
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
                  this.state.Snoring == 'Snoring'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Snoring: 'Snoring'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Snoring == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Snoring: ''})
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
                  this.state.Pacemaker == 'Pacemaker'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Pacemaker: 'Pacemaker'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Pacemaker == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Pacemaker: ''})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[s.splitLine]}></View>
          <View style={s.mv25}>
            <Text style={s.ft14300Gray}>
              Ulcers
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={
                  this.state.Ulcers == 'Ulcers'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Ulcers: 'Ulcers'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Ulcers == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Ulcers: ''})
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
                  this.state.Arthritis == 'Arthritis'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Arthritis: 'Arthritis'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Arthritis == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Arthritis: ''})
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
                  this.state.HayFever == 'HayFever'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({HayFever: 'HayFever'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.HayFever == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({HayFever: ''})
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
                  this.state.VenerealDisease == 'VenerealDisease'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({VenerealDisease: 'VenerealDisease'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.VenerealDisease == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({VenerealDisease: ''})
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
                  this.state.ArtificialJoints == 'ArtificialJoints'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({ArtificialJoints: 'ArtificialJoints'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.ArtificialJoints == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({ArtificialJoints: ''})
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
                  this.state.HeadInjuries == 'HeadInjuries'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({HeadInjuries: 'HeadInjuries'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.HeadInjuries == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({HeadInjuries: ''})
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
                  this.state.CodeineAllergy == 'CodeineAllergy'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({CodeineAllergy: 'CodeineAllergy'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.CodeineAllergy == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({CodeineAllergy: ''})
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
                  this.state.Asthma == 'Asthma'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Asthma: 'Asthma'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Asthma == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Asthma: ''})
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
                  this.state.HeartDisease == 'HeartDisease'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({HeartDisease: 'HeartDisease'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.HeartDisease == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({HeartDisease: ''})
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
                  this.state.RadiationTreatment == 'RadiationTreatment'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({RadiationTreatment: 'RadiationTreatment'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.RadiationTreatment == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({RadiationTreatment: ''})
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
                  this.state.PenicillinAllergy == 'PenicillinAllergy'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({PenicillinAllergy: 'PenicillinAllergy'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.PenicillinAllergy == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({PenicillinAllergy: ''})
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
                  this.state.BloodDisease == 'BloodDisease'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({BloodDisease: 'BloodDisease'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.BloodDisease == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({BloodDisease: ''})
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
                  this.state.HeartMurmur == 'HeartMurmur'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({HeartMurmur: 'HeartMurmur'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.HeartMurmur == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({HeartMurmur: ''})
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
                  this.state.MorningHeadaches == 'MorningHeadaches'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({MorningHeadaches: 'MorningHeadaches'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.MorningHeadaches == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({MorningHeadaches: ''})
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
                  this.state.Cancer == 'Cancer'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Cancer: 'Cancer'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Cancer == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Cancer: ''})
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
                  this.state.Hepatitis == 'Hepatitis'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Hepatitis: 'Hepatitis'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Hepatitis == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Hepatitis: ''})
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
                  this.state.RheumaticFever == 'RheumaticFever'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({RheumaticFever: 'RheumaticFever'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.RheumaticFever == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({RheumaticFever: ''})
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
                  this.state.Diabetes == 'Diabetes'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Diabetes: 'Diabetes'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Diabetes == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Diabetes: ''})
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
                  this.state.HighBloodPressure == 'HighBloodPressure'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({HighBloodPressure: 'HighBloodPressure'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.HighBloodPressure == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({HighBloodPressure: ''})
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
                  this.state.Rheumatism == 'Rheumatism'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Rheumatism: 'Rheumatism'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Rheumatism == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Rheumatism: ''})
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
                  this.state.Dizziness == 'Dizziness'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Dizziness: 'Dizziness'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Dizziness == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Dizziness: ''})
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
                  this.state.Jaundice == 'Jaundice'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Jaundice: 'Jaundice'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Jaundice == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Jaundice: ''})
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
                  this.state.SinusProblems == 'SinusProblems'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({SinusProblems: 'SinusProblems'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.SinusProblems == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({SinusProblems: ''})
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
                  this.state.Epilepsy == 'Epilepsy'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Epilepsy: 'Epilepsy'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Epilepsy == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({Epilepsy: ''})
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
                  this.state.KidneyDisease == 'KidneyDisease'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({KidneyDisease: 'KidneyDisease'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.KidneyDisease == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({KidneyDisease: ''})
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
                  this.state.StomachProblems == 'StomachProblems'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({StomachProblems: 'StomachProblems'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.StomachProblems == ''
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({StomachProblems: ''})
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
                  this.state.patient_complications_from_dental == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_complications_from_dental: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.patient_complications_from_dental == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_complications_from_dental: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>If yes, please explain</Text>
            <TextInput
              onChangeText={patient_complications_from_dental_explain =>
                this.setState({patient_complications_from_dental_explain})
              }
              autoCapitalize='none'
              value={this.state.patient_complications_from_dental_explain}
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
                  this.state.patient_hospital_past_two_years == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_hospital_past_two_years: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.patient_hospital_past_two_years == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_hospital_past_two_years: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>If yes, please explain</Text>
            <TextInput
              onChangeText={patient_hospital_past_two_years_explain =>
                this.setState({patient_hospital_past_two_years_explain})
              }
              autoCapitalize='none'
              value={this.state.patient_hospital_past_two_years_explain}
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
                  this.state.patient_under_physician_care == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_under_physician_care: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.patient_under_physician_care == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_under_physician_care: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>If yes, please explain</Text>
            <TextInput
              onChangeText={patient_under_physician_care_explain =>
                this.setState({patient_under_physician_care_explain})
              }
              autoCapitalize='none'
              value={this.state.patient_under_physician_care_explain}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Name of physician</Text>
            <TextInput
              onChangeText={patient_physician_name =>
                this.setState({patient_physician_name})
              }
              autoCapitalize='none'
              value={this.state.patient_physician_name}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Phone</Text>
            <TextInput
              onChangeText={patient_physician_phone =>
                this.setState({patient_physician_phone})
              }
              autoCapitalize='none'
              value={this.state.patient_physician_phone}
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
                  this.state.patient_taking_medication == 'YES'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_taking_medication: 'YES'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.patient_taking_medication == 'NO'
                    ? styles.btnOptionActive
                    : styles.btnOptionDeactive
                }
                onPress={() => {
                  this.setState({patient_taking_medication: 'NO'})
                }}
                activeOpacity={1}>
                <Text style={styles.btnTxt}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>If yes, please explain</Text>
            <TextInput
              onChangeText={patient_taking_medication_explain =>
                this.setState({patient_taking_medication_explain})
              }
              autoCapitalize='none'
              value={this.state.patient_taking_medication_explain}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Signature</Text>
            <TextInput
              onChangeText={patient_signature =>
                this.setState({patient_signature})
              }
              autoCapitalize='none'
              value={this.state.patient_signature}
              style={[styles.inputText, styles.w50]}
            />
          </View>
          {/* <View style={[styles.itemWrap]}>
            <Text style={[s.ft15RegularBlack, s.flex40]}>Date</Text>
            <TextInput
              onChangeText={patient_full_name =>
                this.setState({patient_full_name})
              }
              autoCapitalize='none'
              value={this.state.patient_full_name}
              style={[styles.inputText, styles.w50]}
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
