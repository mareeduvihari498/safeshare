import * as firebase from 'firebase';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput, Keyboard } from 'react-native';
/*import * as firebase from 'firebase';
/*export function updatekey(phno,ppin,pupin){
    const firebaseConfig = {
        apiKey: "AIzaSyASIpf_30vDDtR9KiMA-56dNwlTlVbLwBA",
        authDomain: "sigin-ab7f5.firebaseapp.com",
        databaseURL: "https://sigin-ab7f5.firebaseio.com",
        projectId: "sigin-ab7f5",
        storageBucket: "sigin-ab7f5.appspot.com",
        messagingSenderId: "585396266885",
        appId: "1:585396266885:web:6f3db85ca88f309d4d46ec",
        measurementId: "G-6FVELMMY6F"
      };
      if(!firebase.apps.length)
      firebase.initializeApp(firebaseConfig);
      phno='Users/'+phno
      try{

firebase.database().ref(phno).child('privatepin').set(ppin)
firebase.database().ref(phno).child('privatepin').set(pupin)
return true
      }
      catch(e){
        console.log(e)
        return false
      }

}
*/
const firebaseConfig = {
    apiKey: "AIzaSyASIpf_30vDDtR9KiMA-56dNwlTlVbLwBA",
    authDomain: "sigin-ab7f5.firebaseapp.com",
    databaseURL: "https://sigin-ab7f5.firebaseio.com",
    projectId: "sigin-ab7f5",
    storageBucket: "sigin-ab7f5.appspot.com",
    messagingSenderId: "585396266885",
    appId: "1:585396266885:web:6f3db85ca88f309d4d46ec",
    measurementId: "G-6FVELMMY6F"
  };

  export default firebaseConfig
