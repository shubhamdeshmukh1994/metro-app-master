'use strict';
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, ToastAndroid} from "react-native";

import { TabNavigator, TabBarBottom } from "react-navigation";

import Ionicons from 'react-native-vector-icons/Ionicons';

import Transaction from './Transaction';

class Wallet extends Component {


    constructor(props){
        super(props)
        this.state = {
            money: 0,
            
            debug: '',
        }

        const { params } = this.props.navigation.state;
        const uuid = params ? params.uuid : null;
        


        this.authenticCustomer(uuid)
    }

    static navigationOptions ={
        title : 'Wallet',
    }

    authenticCustomer(uuid){
        
        ToastAndroid.show("UUID is  "+ uuid, ToastAndroid.SHORT)
        return fetch('http://metrobiometric.herokuapp.com/wallet/'+uuid)
        .then((response) => response.json()) 
        .then((responseJson) => {
            ToastAndroid.show("Your balance is "+ responseJson, ToastAndroid.SHORT)
            this.setState({
                money : JSON.stringify(responseJson)
            })
        })
        .catch((error) => {
            
            
        })
    }


    render(){
        
        return (
            <View>
                <Text style = {styles.description } >
                    Your balance is {this.state.money}
                </Text>
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});

export default TabNavigator(
    {
        Wallet:{
        screen: Wallet,
        },
        Transaction:{
        screen: Transaction,
        },
    },
    {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Wallet') {
              iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Transaction') {
              iconName = `ios-options${focused ? '' : '-outline'}`;
            }
    
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Ionicons name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
        },
        // tabBarComponent: TabBarBottom,
        // tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
      },
)
  
  