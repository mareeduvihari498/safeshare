import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator,StyleSheet, Text, View, Button, SafeAreaView, Image, TouchableHighlight,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions'
import { FlatList } from 'react-native-gesture-handler';
//import * as rootnavigation from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';





const  Photogallery = props => {


  const width= Dimensions.get('screen').width;
  function dummy()
  {
    const [s,ss] =  useState()
    console.log("onlong press working")
  }

  
  const [p,sp]=useState(10);
  const [s,ss] =useState()
  const[alb,setalb]= useState([])
  const[load,setload] = useState('f')
  const[bid,setbid] = useState([])
  const[select,setselect]=useState([])
  const[press,setpress]=useState(true)
  //const {navigate} = props.navigation
  const navigation =useNavigation();
  //const st =stack

 
    
  
  async function albums(id,title){
    setload('t')
    
   
   
    let video = await MediaLibrary.getAlbumAsync(title)

  
    const ac= video.assetCount    
  
    const firs = await MediaLibrary.getAssetsAsync({album:id,first:ac,})
   
    setalb(firs.assets)
    
    
     
console.log("finished")



    
     }

     function collectphotos(ph1){
      console.log(ph1)
      
        const ph ={
          
          id:ph1,
          bid:1,
        }
  
          setbid(currentfile => [...currentfile,ph])
          
        
      
     }

     function bdwidth (id){
       setpress(false)
       console.log(id)
       if(select.indexOf(id)!==-1){
        
         console.log("deleting id")
        let newarr = [...select]
        let index = newarr.indexOf(id)
      newarr.splice(index,1);
      
        setselect(newarr)
       
        console.log(select)
       }
       
       
       else
       {
         
         setselect((currentid) =>  [...currentid,id])

       }
      
    }

    function encrypt(){
      console.log("encrypting")
    }

    

  
    if(load=='f')

   {
     albums(props.id,props.title,props.type);
     return(
       <View>
         <Text>
           runiing
         </Text>
       </View>
     )
   }
   else{
     if(press)
     {
   return(

       <View  style={{flex:1}}>
  <FlatList   numColumns={4} data={alb} style={{flex:1}} keyExtractor={(item)=> item.id} extraData={select}  renderItem={({ item, index }) => (
    <View>
  <TouchableHighlight onPress={()=>{bdwidth(item.id)}}  >
   <Image  source={item} key={item} style={{ width: width/4,
      height: 100,
      borderWidth: select.indexOf(item.id)!==-1 ? 10:1, 
      borderColor: 'grey',}}   />
   </TouchableHighlight>
   </View>
   )} />
     </View>
   
   )
     }
     else{
       return(
      <View  style={{flex:1}}>
      <FlatList   numColumns={4} data={alb} style={{flex:1}} keyExtractor={(item)=> item.id} extraData={select}  renderItem={({ item, index }) => (
        <View>
      <TouchableHighlight onPress={()=>{bdwidth(item.id)}}  >
       <Image  source={item} key={item} style={{ width: width/4,
          height: 100,
          borderWidth: select.indexOf(item.id)!==-1 ? 10:1, 
          borderColor: 'grey',}}   />
       </TouchableHighlight>
       </View>
       )} />
         
         <View>
           <Button title="save" onPress={()=>{encrypt();navigation.navigate('Home');}} />
         </View>
         </View>
       )
     }
   }
  }
  




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container1:{

   flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  }
});




export default Photogallery