import React, {Component, useState, useRef } from 'react';
import { Container, Header, Footer, FooterTab, Button, Text } from 'native-base';
import { View, TouchableOpacity, StyleSheet, Image, BackHandler } from 'react-native';
import Icon from "react-native-feather1s"
import { WebView } from 'react-native-webview';
var ClinicInfo = require('../config/ClinicInfo.json');
var s = require('../assets/css/styles');

export default class HomeScreen extends React.Component {
  webviewRef = null;
  constructor(props) {
    super(props);
    this.state = {  tab: 1, 
                    active: false, 
                    webviewKey: 0,
                    backButton: false
                    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentDidAppear() {
    console.log("didAppear");
  }
  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  // }

  handleBackButtonClick = () => {
    // this.props.navigation.goBack(null);
    return true;
  };

  onCheckIn =()=> {
    this.props.navigation.navigate('CheckedIn', {});
  }

  onHome =()=> {
    this.props.navigation.navigate('Home', {});
  }

  onAnnounce =()=> {
    this.props.navigation.navigate('Announce', {});
  }

  onCalendar =()=> {
    this.props.navigation.navigate('Calendar', {});
  }

  onChat =()=> {
    this.props.navigation.navigate('Chat', {});
  }

  onDoc =()=> {
    this.props.navigation.navigate('Doc', {});
  }

  onAll =()=> {
    this.setState({
      tab: 1,
    })
  }

  onCare =()=> {
    this.setState({
      tab: 2,
    })
  }

  onService =()=> {
    this.setState({
      tab: 3,
    })
  }

  onProfile =()=> {
    this.setState({
      active: false
    });
    this.props.navigation.navigate('ProfileDetail')
  }

  onWeb =()=> {
    this.setState({
      active: false
    });
    this.props.navigation.navigate('Web');
  }

  inject() {
    this._webView.injectJavascript("alert('test')");
  }

  onMessage(event) {
    console.log('event : ', event) 
    // (event) => {
    //       console.log('event: ', event)
    //      }

  }

  onBack() {
    console.log("onBACK");
    this.webviewRef.goBack();
    //this.webview.goBack();
  }

  webViewNavigation(navState) {
    console.log("navigation " + navState.url.toString());
    if (navState.loading == false) {
      if (navState.url.toString() === "https://4smile.com/education-mobile-app/") {
        console.log("HIDE");
        this.setState({backButton: false});
      } else {
        console.log("SHOW");
        this.setState({backButton: true});
      }
    }
  }

  _refWebView = (webview) => {
    console.log("test");
    this.webviewRef = webview;
    if (webview != null)
      this.webviewRef = webview;
}

handleLoadEnd() {
  console.log("LOAD END");
}

  reload() {
    this.setState({
       webviewKey: this.state.webviewKey + 1  
    })
    console.log("RELOAD");
  }

  render() {
    const alertJS = 'alert("test");';
    let elementHiderJS =  'function hideElement(style) { var el = document.querySelectorAll(style); el[0].style.display="none";} var styles = [".dc-header", ".dc-innerbanner-holder", ".dc-breadcrumbarea", ".dc-my-20", ".dc-card-review", ".dc-footer"]; styles.forEach(hideElement);'
    let iJS = '';
    return (
      <Container style={s.container}>
        <Header style={s.headerContent}>
          <View style={s.spaceBetween}>
          <TouchableOpacity
              activeOpacity={1}
              style={styles.backPadding}
              onPress={this.onBack.bind(this)}
              >
            { this.state.backButton ? 
            //<Button onPress={this.onBack.bind(this)} style={ s.transparentBg }>
              <Icon name="arrow-left-circle" size={30} style= {s.transparentBg} />
            //</Button>

            : null}
            </TouchableOpacity>
            <Image source={require('../assets/clinic_logo_text.png')}
            style={{ width: 200, height: 60 }}
            resizeMode='contain' />
            {/* <Text style={s.title}>{ClinicInfo.clinic_name}</Text> */}
            <TouchableOpacity
              style={s.checkInEm}
              activeOpacity={1}>
            </TouchableOpacity>
          </View>            
        </Header>
        <View style={{ flex: 1 }}>
          <WebView 
          source={{ uri: 'https://4smile.com/education-mobile-app/' }} style={s.margin20}
          onNavigationStateChange={ this.webViewNavigation.bind(this)}
          injectedJavaScript = {elementHiderJS}
          onMessage = {event => {}}
          key={this.state.webviewKey}
          onContentProcessDidTerminate={this.reload.bind(this)} 
          ref={WEBVIEW_REF => (this.webviewRef = WEBVIEW_REF)}
          onLoadEnd={this.handleLoadEnd.bind(this)} 
          />
         </View>
        <Footer>
          <FooterTab style={s.footerContent}>
            
            <Button onPress={this.onHome}>
              <Icon name="home" size={30} color={'rgba(37,175,217, 1)'} />
            </Button>
            <Button onPress={this.onAnnounce}>
              <Icon name="flag" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
            <Button onPress={this.onCalendar}>
              <Icon name="calendar" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
            <Button onPress={this.onChat}>
              <Icon name="message-circle" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
            <Button onPress={this.onDoc}>
              <Icon name="info" size={30} color={'rgba(0, 0, 0, .80)'} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },

  transparentBg: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },

  backPadding: {
    width: 77,
    height: 40,
    padding: 3,
  }

})
