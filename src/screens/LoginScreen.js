import {
    Alert,
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  // import firestore from '@react-native-firebase/firestore';
  // import { Database } from '@firebase/database';
  import auth from '@react-native-firebase/auth';
  
  const {HEIGHT, WIDTH} = Dimensions.get('screen');
  const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
  
   const _handelLogin=async()=>{
      try {
        if(email && password){
        const isUserCrated=await auth().signInWithEmailAndPassword(email,password)
        console.log('user crated',isUserCrated)
          if(isUserCrated?.user?.emailVerified){
            Alert.alert('Login Succefully..',isUserCrated?.user?.email)
            navigation.navigate('HomeScreen',{
              email:isUserCrated?.user?.email,
              uid:isUserCrated?.user?.uid
            })
          }else{
            alert('Please verify your email please check you email.')
          }
        }else{
          Alert.alert('Please Enter email and password')
        } 
      } catch (error) {
        console.log('error',error)
        Alert.alert(error.message)
      }
    }
  
  
   
   
  
    return (
      <View style={{flex: 1, alignItems: 'center',justifyContent:'center'}}>
        <Text style={{fontSize: 24, fontWeight: '900', marginVertical: 20}}>
         Login
        </Text>
        <TextInput
          value={email}
          onChangeText={txt => setEmail(txt)}
          style={styles.input}
          placeholder="Enter  eamil"
        />
              <TextInput
          value={password}
          onChangeText={txt => setPassword(txt)}
          style={styles.input}
          placeholder="Enter password"
        />
          <TouchableOpacity
            onPress={() =>_handelLogin()}
            style={{
              backgroundColor: 'blue',
              borderRadius: 10,
              width: '40%',
              padding: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
            Login
            </Text>
          </TouchableOpacity>
        
          <Text style={{marginTop:20}}> you don't have accout <Text style={{color:'blue',textDecorationLine:'underline',fontWeight:'900'}} onPress={()=>navigation.navigate('RegistScreen')}>Register.</Text></Text>
          <Text style={{marginTop:20}}> Login with Mobile No <Text style={{color:'blue',textDecorationLine:'underline',fontWeight:'900'}} onPress={()=>navigation.navigate('MobileVerify')}>Mobile No.</Text></Text>
          <Text style={{marginTop:20}}> Login with Mobile No <Text style={{color:'blue',textDecorationLine:'underline',fontWeight:'900'}} onPress={()=>navigation.navigate('ImageUpload')}>Upload Img.</Text></Text>

  
  
      </View>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    input: {
      // width:WIDTH -20,
      width: '90%',
      borderRadius: 5,
      borderWidth: 2,
      marginBottom: 20,
    },
  });
  