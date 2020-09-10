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
import webScreen from './screens/webScreen'


const Navigation = createStackNavigator({
  Splash: {
    screen: splashScreen
  },
  Login: {
    screen: loginScreen
  },
  Signup: {
    screen: signupScreen
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
    screen: homeScreen
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
  Web: {
    screen: webScreen
  }
}, {
  initialRouteName: 'Splash',
  headerMode: 'none'
});

const Root = createAppContainer(Navigation);

export default Root;
