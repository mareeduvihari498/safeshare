import React, { useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput, Keyboard, Dimensions, Alert,Modal,TouchableHighlight,FlatList } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import { NavigationContainer, useNavigation } from '@react-navigation/native';



const album = props =>{

    const [type,settype]= useState()
  //const[pic,setpic] =useState({uri:'file:///storage/emulated/0/Download/IMG_20190706_162737.jpg'})
  const[pic,setpic]= useState()
  const [alb,setalb]=useState([])
  const width= Dimensions.get('screen').width;
  const heigth= Dimensions.get('screen').height;
  const [titles,settitles]= useState([])
  const [ptitle,setptitle]=useState();
  const [pid,setpid] = useState();
  const [load,setload] = useState(false);
  const [pload,setpload] = useState('f');

    async function generatealbum(){
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
      
}

generatealbum();
  return(
    <View style={{flex:1}}>
      <FlatList numColumns={2} data={titles} style={{flex:1}} keyExtractor={(item) => item.id}  renderItem={ ({item,index}) => (
        <View style={{flex:0.5,borderWidth:1}}>
          <TouchableHighlight onPress={() => {setphotos(item.id,item.title); navigation.navigate('photos');}}>
      <ImageBackground source={item} style={{width:width/2,height:width/2,borderWidth:1,borderColor: 'grey'}}  resizeMode='cover'  >
      <View style={styles.aname} >
        <Text  >{item.title}</Text>
      </View>
      </ImageBackground>
      </TouchableHighlight>
      </View>
      

      )}/>
    </View>
    
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:Constants.statusBarHeight,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center',
      
      
    },
    aname:{
      flex:1,
      width:Dimensions.get('screen').width/2,
      position:'absolute',
      bottom:-5,
      backgroundColor:'grey',
    },
  });


  export default album;