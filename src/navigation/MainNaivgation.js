// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistScreen from '../screens/RegistScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import auth, { onAuthStateChanged } from '@react-native-firebase/auth';
import SplashScreen from '../screens/SplashScreen';
import MobileVerify from '../screens/MobileVerify';
import ImageUpload from '../screens/ImageUpload';

onAuthStateChanged
const Stack = createNativeStackNavigator();

function MainNaivgation() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* {!isuserLogin?<Stack.Screen name="LoginScreen" component={LoginScreen} />:null}
        {!isuserLogin?<Stack.Screen name="RegistScreen" component={RegistScreen} />:null} */}

        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegistScreen" component={RegistScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MobileVerify" component={MobileVerify} />
        <Stack.Screen name="ImageUpload" component={ImageUpload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNaivgation;