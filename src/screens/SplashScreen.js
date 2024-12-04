import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import auth, { onAuthStateChanged } from '@react-native-firebase/auth';
import { StackActions, useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation=useNavigation()
    const [isuserLogin,setIsUserLogin]=React.useState(false)
   const unsubscribe= auth().onAuthStateChanged(user => {
        console.log(user)
        if(user !==null){
          setIsUserLogin(true)
        }
    });

    useEffect(()=>{
        setTimeout(() => {
         navigation.dispatch( StackActions.replace(isuserLogin?'HomeScreen':'LoginScreen'))
         unsubscribe()
        }, 3000);
    },[])
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'gray'
    }}>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})