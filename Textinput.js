import Constants from 'expo-constants';
import React, { useState } from 'react';
import { StyleSheet,  View, TextInput,Keyboard} from 'react-native';
import firebaseConfig from './firebase';
import * as firebase from 'firebase';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useNavigation } from '@react-navigation/native';

const Textinput = props =>{
  if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

    const navigation= useNavigation();
    
  function pintest(entertext){
    
    
    console.log('entered pintest')
    
    
    const s = entertext.nativeEvent.text;
    Keyboard.dismiss
    this.textInput.clear()
    
    if(s=="1234"){
      console.log("correct PIN")
      navigation.navigate('Home')
    
      
    
    }
    else{
      
      console.log("wrong PIN")
      
    }
  }
   
    return(
        <View style={styles}>
<TextInput ref={input => { this.textInput = input }} placeholder="enter PIN" style={{borderBottomColor:"black",borderBottomWidth:1 }} textAlign={'center'} keyboardType="number-pad" maxLength={6} secureTextEntry={true}  onSubmitEditing={pintest} autoFocus={true}   />
 
</View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


  export default Textinput