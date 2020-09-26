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