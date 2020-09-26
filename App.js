import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput, Keyboard, Dimensions, Alert,Modal,TouchableHighlight,FlatList } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FirebaseRecaptchaVerifier, FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import * as MediaLibrary from 'expo-media-library';
import * as firebase from 'firebase';
import Textinput from './Textinput';
import * as Cellular from 'expo-cellular';
import * as SecureStore from 'expo-secure-store';
import countrycode from './countrycode';
import Photogallery  from './photogallery';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import firebaseConfig from './firebase';
import Album from './album';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';




export default function App() {
  
  const [type,settype]= useState()
  const [modalVisible, setModalVisible] = useState(false);
  const [dummy,setdummy]=useState('set')
  const phonecode = countrycode[Cellular.isoCountryCode]
  const [privatepin, setprivatepin]=useState();
  const [cprivatepin, setcprivatepin]=useState();
  const [publicpin, setpublicpin]=useState();
  const [cpublicpin, setcpublicpin]=useState();
  const [klogin,setklogin]=useState(true);
  const[ksignin,setksignin]=useState('set')
  
  const ref = React.useRef(null);
  const apno =async()=>{ 
    if(ksignin!=='set')
    return ksignin;

     const s=await SecureStore.getItemAsync('phonenumber') ; 
     
     console.log(s)
    
     if(s===null){
      setksignin(true)
      
     }

      else{
        setksignin(false)
        
      }
 
console.log(ksignin)
  }
  

 
  const stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const [PhoneNumber,setPhoneNumber] = useState();
  const [verificationId, setVerificationId] = React.useState(null);
  /*const firebaseConfig = {
    apiKey: "AIzaSyASIpf_30vDDtR9KiMA-56dNwlTlVbLwBA",
    authDomain: "sigin-ab7f5.firebaseapp.com",
    databaseURL: "https://sigin-ab7f5.firebaseio.com",
    projectId: "sigin-ab7f5",
    storageBucket: "sigin-ab7f5.appspot.com",
    messagingSenderId: "585396266885",
    appId: "1:585396266885:web:6f3db85ca88f309d4d46ec",
    measurementId: "G-6FVELMMY6F"
  };*/
  if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);
 
  //const navigation=useNavigation();

  async function dumy(){
    const s = await SecureStore.setItemAsync('phonenumber','9494382039')
    //const s =  await firebase.database().ref('Users/+91 9494382039').child('user')
    console.log(s)
    
    
  }


  function setphotos(id,data){
    setpid(id)
    setptitle(data)
  }









  async function sendotp(){

    Keyboard.dismiss();
    console.log(phonecode)
    const pp = new firebase.auth.PhoneAuthProvider();
    console.log(Cellular.mobileNetworkCode)
    console.log(Cellular.mobileCountryCode)
    console.log(Cellular.isoCountryCode)
    const vid =await pp.verifyPhoneNumber('+91'+PhoneNumber,ref.current).then(setVerificationId);
    

}

const confirmcode = () => {
  const credential = firebase.auth.PhoneAuthProvider.credential(
    verificationId,
    code
  );

  
  
  
  
  firebase
    .auth()
    .signInWithCredential(credential)
    .then((result) => {
      console.log(result)
      SecureStore.setItemAsync('phonenumber',PhoneNumber)
      /*SecureStore.setItemAsync('user',result.user)*/
      if(result.additionalUserInfo.isNewUser){

        setklogin(!klogin)


      }
      else{
        setksignin(false)
      }


      


      // Do something with the results here
      
      
    });
    
    
}


const [code, setCode] = useState('');


  function asignin(){
    return(
      <View>

      </View>
    )
    

  }

  function createpublicpin({navigation}){
    return(
      <View>
        <TextInput maxLength={6} placeholder='enter number' style={{borderBottomColor:"black",borderBottomWidth:1 }} keyboardType="phone-pad" onChangeText={(publicpin) => setpublicpin(publicpin)}  />
        <TextInput maxLength={6} placeholder='enter number' style={{borderBottomColor:"black",borderBottomWidth:1 }} keyboardType="phone-pad" onChangeText={(cpublicpin) => setcpublicpin(cpublicpin)}  />
        <Button title='setpin' onPress={()=>
        {
          if(publicpin===cpublicpin){
            navigation.navigate('private')


          }
          else{
            Alert.alert("pin not match","the pin did not match",[{text:"cancel",style:"cancel"},{text:"ok"}], {cancelable: false})
          }
        }
        } />
        
      </View>
    )

  }
 function createprivatepin(){
  return(
    <View>
    <TextInput maxLength={6} placeholder='enter number' style={{borderBottomColor:"black",borderBottomWidth:1 }} keyboardType="phone-pad" onChangeText={(privatepin) => setprivatecpin(privatepin)}  />
    <TextInput maxLength={6} placeholder='enter number' style={{borderBottomColor:"black",borderBottomWidth:1 }} keyboardType="phone-pad" onChangeText={(cprivatepin) => setcprivatepin(cprivatepin)}  />
    <Button title='setpin' onPress={()=>
    {
      if(publicpin===privatepin){
        Alert.alert("private public same","the public and private pin can not be same",[{text:"cancel",style:"cancel"},{text:"ok"}], {cancelable: false})
        


      }
      else if(cprivatepin===privatepin){
          try
        {
          firebase.database().ref(phno).child('privatepin').set(ppin)
        firebase.database().ref(phno).child('privatepin').set(pupin)
       setksignin(false) 
      }
        catch(e){
          console.log(e)
        }
        
      }
      else{
        Alert.alert("pin not match","the pin did not match",[{text:"cancel",style:"cancel"},{text:"ok"}], {cancelable: false})
      }
    }
    } />
    
  </View>
  )

 }

function Home(){
return(
  <View style={styles.container}>
  <AdMobBanner
bannerSize="smartBannerLandscape"
adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
servePersonalizedAds // true or false
onDidFailToReceiveAdWithError={this.bannerError} />
</View>
 )
}



function pin ({navigation}){
  
 
return (

<Textinput />

)
 
  

}



function photos({navigation}){
  <Photogallery  id={pid} title={ptitle} type={type} />
}

function albums({navigation}){
  return(
    <Album />
  )

  
}

 function Homescreen({navigation}){
  return(
    
      <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
     <Tab.Screen name="options" component={options} />
     <Tab.Screen name="camera" component={camera} />
   </Tab.Navigator>
    
  )

 }
 function options({navigation}){
  return (
  <View style={styles.container}>
   <Button title={'upload photo'} onPress={()=>{
     settype('photo');navigation.navigate('albums')
   }} />
   <Button title={'upload video'}  onPress={()=>{
     settype('video');navigation.navigate('albums')
   }} />
   <Button title={'upload audio'}  onPress={()=>{
     settype('audio');navigation.navigate('albums')
   }} />
   <Button title={'upload others'}  onPress={()=>{
     settype('unknown');navigation.navigate('albums')
   }} />
   <Button title='change pin' />
   <Button title='signout' />
   </View>
   )

 }

 function camera(){
  return(
    <View>
      
    </View>
  )

 }





  function signin({navigation}){
    return
   ( 
   <View>

   </View>
   )
 
}

function login(){
  if(klogin!='set'){
    return klogin
  }

  
  return false
}

async function genratealbums(){
  //const {sp}= await Permissions.askAsync(Permissions.CAMERA_ROLL)
      
      
      
      
      try
      {
        const albums= await MediaLibrary.getAlbumsAsync()
        const listOfTitles = albums.map(album => album.title);
      
        const listofid = albums.map(album => album.id);

        console.log(listOfTitles)
      }
      catch(e){
        console.log(e)
      }
}

  
 /* apno()
  if(ksignin){
    if(klogin){
      return(
        <View style={styles.container}>
  <FirebaseRecaptchaVerifierModal  ref={ref} firebaseConfig={firebase.app().options} />
 <TextInput placeholder='enter number' style={{borderBottomColor:"black",borderBottomWidth:1 }} keyboardType="phone-pad" onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)} />
 <Button title='send otp' onPress={sendotp}/>
 <TextInput  placeholder="Confirmation Code"
          onChangeText={setCode}
          keyboardType="number-pad"/>
  <Button title='verify otp' onPress={confirmcode}/>
  
 </View>
        
      )

    }
    else{
      return(
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen name="public" component={publicpin} />
      <stack.Screen name="private" component={privatepin} />
      </stack.Navigator>

    </NavigationContainer>
      )
    }
  }
  return (
 <NavigationContainer>
   <stack.Navigator>
     <stack.Screen name='pin' component={pin} options={{headerShown: false}} />
     <stack.Screen name='Home' component={Homescreen} options={{headerShown: false}} />
     <stack.Screen name='albums' component={albums} />
     <stack.Screen name='photos' component={photos} />
   </stack.Navigator>

   
 </NavigationContainer>
 );*/
 
 return(
   <View style={styles.container}>
     <Button title='pics' onPress={genratealbums} />
   </View>
 )
 
 
  
 

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   padding:30,
   paddingTop:40,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  
});
