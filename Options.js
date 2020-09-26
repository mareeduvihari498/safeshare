import React, { useState,useEffect } from 'react';
import { Button, StyleSheet, Text, View,TextInput, Keyboard, Dimensions, Alert,Modal,TouchableHighlight,FlatList,Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';
import firebaseConfig from './firebase';
import * as ImagePicker from 'expo-image-picker';
const Options = props =>{
    const [image, setImage] = useState(null);

    if(!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
        const f = await fetch(result.uri);
        const b = await f.blob();
        const k =firebase.storage().ref('images/confues.jpg').put(b).on(
            'state_changed', async()=>{
                const k1 =await firebase.storage().ref('images/confues.jpg').getDownloadURL()
                console.log(k1)
                setImage(k1)
            }
        )
      }
    };
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }
  
export default Options