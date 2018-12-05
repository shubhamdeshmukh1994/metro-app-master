'use strict';
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, FlatList, SectionList, ActivityIndicator } from "react-native";

import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/Home';
import Wallet  from "./src/Wallet";
import Transaction from './src/Transaction';



const RootStack = StackNavigator({
    Home:{
      screen: HomeScreen,
    },
    Wallet:{
      screen: Wallet,
    },
    Transaction:{
      screen: Transaction,
    },
  },
  {
    initialRouteName: 'Home',
  }
)
export default class App extends Component{
  render() {
    return <RootStack />
  };
}


  
  