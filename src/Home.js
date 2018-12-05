'use strict';
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, ToastAndroid} from "react-native";

// import Child from './Child';

export default class HomeScreen extends Component {


    constructor(props){
        super(props);
        this.state ={ 
            uuid: 0,
            status: 0,
        }
    }



    static navigationOptions = {
        title: 'Home',
    }




    authenticCustomer(){
        
        
        return fetch('http://metrobiometric.herokuapp.com/validateCustomer/'+this.state.uuid)
        .then(response =>{
                this.setState({
                    status: response.status,
                    // uuid: response.status,
                })
                if(this.state.status == 200){
                    this.props.navigation.navigate('Wallet', {
                        uuid: this.state.uuid
                    })
                }
                else{
                    ToastAndroid.show("Please Enter a Valid UUID", ToastAndroid.SHORT)
                }
                // return Promise.all(response.json())
            }
            
        ) 
        .then((responseJson) => {
            
            // this.setState({
            //     debug: 'response Json '+JSON.stringify(responseJson ) 
            // })
        })
        .catch((error) => {
            this.setState({
                status: 'error'
            })
            
        })
    }

    render(){
        return(
        <View>
            <Text style = { styles.description }>Welcome to Metro App</Text>
            <View style = {[ styles.container, styles.buttonStylecontainer ]} >
                <TextInput 
                    autoFocus = {true}
                    placeholder = {"Enter your UUID"}
                    keyboardType = {'numeric'}
                    onChangeText ={(uuid) => this.setState({uuid})}
                />
                <View style = {styles.container}> 
                    
                    <Button 
                    title = "Login"
                    onPress = {()=>{this.authenticCustomer()}}
                    
                    
                    />
                </View>
                

                
            </View>
            
            
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

  container:{
    
    padding: 10,
    margin: 10,
  },

  buttonStylecontainer:{
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#444',
    
  }

});
  
  