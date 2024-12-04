import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import auth, { onAuthStateChanged } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = ({route}) => {
  const navigation=useNavigation()
  // const {email,uid}=route.params

  // console.log(email,uid)
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1,}}>
      <Text>user Email : {auth().currentUser?.email}</Text>
      <Text>user UID : {auth().currentUser?.uid}</Text>
      <TouchableOpacity
        onPress={async()=>{
          await auth().signOut()
          navigation.navigate('LoginScreen')
        }}
      style={{
    backgroundColor:'red',
    padding:10,
    borderRadius:5,
    marginTop:10
    
    }}>
    <Text style={{color:'white',fontWeight:'bold'}}>Logout</Text>
  </TouchableOpacity>
  
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})