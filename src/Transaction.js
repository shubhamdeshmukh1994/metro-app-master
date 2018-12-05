"use strict";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
  FlatList,
  SectionList,
  ActivityIndicator
} from "react-native";

export default class Transaction extends Component {


  constructor(props){
    super(props)
    this.state = ({
      uuid: 0,
      jsonData: []
    })

    this.getTransactionDetails(1)

  }

  static navigationOptions = {
    title: "Transaction"
  };

  getTransactionDetails(uuid = 1) {
    return fetch(
      "http://metrobiometric.herokuapp.com/validateCustomer/" +uuid
    )
    .then(response => {
      ToastAndroid.show("in response ", ToastAndroid.SHORT)
      this.setState({
        // status: response.status
        // uuid: response.status,
      });
      // if (this.state.status == 200) {
      //   this.props.navigation.navigate("Wallet", {
      //     uuid: this.state.uuid
      //   });
      // } else {
      //   ToastAndroid.show("Please Enter a Valid UUID", ToastAndroid.SHORT);
      // }
      // return Promise.all(response.json())
    })
    .then(responseJson => {
      // this.setState({
      //     debug: 'response Json '+JSON.stringify(responseJson )
      // })
    })
    .catch(error => {
      this.setState({
        status: "error"
      });
    });
  }

  render() {
    return (
      <View>
        <Text>Currently Working on this.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: "center",
    color: "#656565",
    marginTop: 65
  }
});
