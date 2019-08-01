import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { WebView } from 'react-native-webview';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      isOnline: true,
      connectionInfo: null,
      details: ""
    };

  }


  

  componentDidMount(){
    NetInfo.fetch().then(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      
      this.setState({
        isOnline: state.isConnected,
        details: state.details
      })

    });

    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      
      this.setState({
        isOnline: state.isConnected,
        details: state.details
      })

    });

    // Unsubscribe
    //unsubscribe();
   
  }

  render(){

    if(this.state.isOnline === true){
      return (
          <WebView source={{ uri: 'https://www.google.com/maps' }} />
      );
    }
    else{
      return (
        <React.Fragment>
          <View style={styles.container}>
            <Text style={styles.title}>
              Check internet connection!
            </Text>
          </View>
        </React.Fragment>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
   padding: 30
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red'
  },
  activeTitle: {
    color: 'red',
  },
});

