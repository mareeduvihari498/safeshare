apno()
 if(klogin)
   {
 return(
   
     <View style={styles.container}>
     <Button title="trysecurestore" onPress={apno} />

   </View>
 );
  }

  else
  {
    return(
      <View style={styles.container}>
        <Button title='get other view' onPress={()=>
        setklogin(!klogin)
      } />
      </View>
    )
  }

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











  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
  
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
  
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );


  <Button title='upload' onPress={
    Alert.alert('','',[{text:'photos'},{text:'videos'},{text:'audio'},{text:'others'}])
  }  />


  /*async function generatealbum(){
  if(load){
    return;
  }
  console.log("genrating albums")
//const {sp}= await Permissions.askAsync(Permissions.CAMERA_ROLL)



const albums = await MediaLibrary.getAlbumsAsync()
console.log(albums)
const listOfTitles = albums.map(album => album.title);

const listofid = albums.map(album => album.id);


for(let i=0;i<listOfTitles.length;i++){
 
const firs = await MediaLibrary.getAssetsAsync({album:listofid[i],first:1,sortBy:[[MediaLibrary.SortBy.creationTime,false]] })
//console.log(firs.assets[0].uri)
//const firs = await MediaLibrary.getAssetsAsync({album:listofid[i],first:1,})
if(firs.totalCount>0){
console.log(firs.assets[0].uri)
const tt= listOfTitles[i]

const ph={
  uri:firs.assets[0].uri,
  title:tt,
  id:listofid[i],
  
}

settitles(currentitle => [...currentitle,ph]);
setload(true)
}
}


}*/



const [type,settype]= useState()
const[pic,setpic] =useState({uri:'file:///storage/emulated/0/Download/IMG_20190706_162737.jpg'})
const [alb,setalb]=useState([])
const width= Dimensions.get('screen').width;
const heigth= Dimensions.get('screen').height;
const [titles,settitles]= useState([])
const [ptitle,setptitle]=useState();
const [pid,setpid] = useState();
const [load,setload] = useState(false);
const [pload,setpload] = useState('f');





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













 import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);
useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => {
        setCameraRef(ref) ;
  }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end'
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end'
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => {
            if(cameraRef){
              let photo = await cameraRef.takePictureAsync();
              console.log('photo', photo);
            }
          }}>
            <View style={{ 
               borderWidth: 2,
               borderRadius:"50%",
               borderColor: 'white',
               height: 50,
               width:50,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'}}
            >
              <View style={{
                 borderWidth: 2,
                 borderRadius:"50%",
                 borderColor: 'white',
                 height: 40,
                 width:40,
                 backgroundColor: 'white'}} >
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}