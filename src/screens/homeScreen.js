import React from 'react';
import { Container, Header, Footer, FooterTab, Button, Text, Content } from 'native-base';
import { View, TouchableOpacity, StyleSheet, Image, BackHandler } from 'react-native';
import Icon from "react-native-feather1s"
import { FlatGrid } from 'react-native-super-grid';
var s = require('../assets/css/styles');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      active: false
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

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

  renderItem = (data) => {
    return (
      <TouchableOpacity style={[styles.card, s.shadowStyle]} onPress={this.onDetail}>
        {/* <Image resizeMode="contain" style={{width: 100, height: 100, borderRadius: 8}} source={{uri: imageURL + data.item.image_path}} /> */}
        <View style={{flex: 1, paddingLeft: 20}}>
          <Text style={[s.ft14BoldBlack, s.mb5]}>hi</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <Container style={s.container}>
        <Header style={s.headerContent}>
          
        </Header>
         <Content style={s.mainContainer}>
          <FlatGrid
            itemDimension={130}
            data={[1,2,3,4,5,6]}
            renderItem={(item) => this.renderItem(item)}
          />
        </Content>
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
  card: {
    padding: 15,
    borderRadius: 8,    
    marginBottom: 18,
    flexDirection: 'row',
    width: '100%', 
    backgroundColor: '#fff',
    shadowColor: "rgba(157, 157, 157, 0.2);",
    shadowOffset: {
      width: 1,
      height: 5
    },
    shadowRadius: 8,
    shadowOpacity: 1.0,
    elevation: 2
  },
})
