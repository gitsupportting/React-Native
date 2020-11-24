import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

import splashScreen from './screens/splashScreen'
import loginScreen from './screens/loginScreen'
import signupScreen from './screens/signupScreen'
import confirmScreen from './screens/confirmScreen'
import profileDetailScreen from './screens/profileDetailScreen'
import profileEditScreen from './screens/profileEditScreen'
import checkedInScreen from './screens/checkedInScreen'
import homeScreen from './screens/homeScreen'
import announceScreen from './screens/announceScreen'
import calendarScreen from './screens/calendarScreen'
import chatScreen from './screens/chatScreen'
import docScreen from './screens/docScreen'
import formConsentScreen from './screens/formConsentScreen';
import formEmployScreen from './screens/formEmployScreen';
import formHealthScreen from './screens/formHealthScreen';
import formInsuranceScreen from './screens/formInsuranceScreen';
import formPatientScreen from './screens/formPatientScreen';
import formReferralScreen from './screens/formReferralScreen';
import formSpouseScreen from './screens/formSpouseScreen'; 


const Navigation = createStackNavigator({
  Splash: {
    screen: splashScreen
  },
  Login: {
    screen: loginScreen,
    navigationOptions: {
      gestureEnabled: false,
    },
  },
  Signup: {
    screen: signupScreen,
    navigationOptions: {
      gestureEnabled: false,
    },
  },
  Confirm: {
    screen: confirmScreen
  },
  ProfileDetail: {
    screen: profileDetailScreen
  },
  ProfileEdit: {
    screen: profileEditScreen
  },
  CheckedIn: {
    screen: checkedInScreen
  },
  Home: {
    screen: homeScreen,
    navigationOptions: {
      gestureEnabled: false,
    },
  },
  Announce: {
    screen: announceScreen
  },
  Calendar: {
    screen: calendarScreen
  },
  Chat: {
    screen: chatScreen
  },
  Doc: {
    screen: docScreen
  },
  FormSpouse: {
    screen: formSpouseScreen
  },
  FormReferral: {
    screen: formReferralScreen
  },
  Web: {
    screen: formPatientScreen
  },
  FormInsurance: {
    screen: formInsuranceScreen
  },
  FormHealth: {
    screen: formHealthScreen
  },
  FormEmploy: {
    screen: formEmployScreen
  },
  FormConsent: {
    screen: formConsentScreen
  }
}, {
  initialRouteName: 'Splash',
  headerMode: 'none'
});

const Root = createAppContainer(Navigation);

export default Root;
