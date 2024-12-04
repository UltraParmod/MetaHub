import {
  Alert,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
// import { Database } from '@firebase/database';
import auth from '@react-native-firebase/auth';
import firestore, {doc} from '@react-native-firebase/firestore';

const {HEIGHT, WIDTH} = Dimensions.get('screen');
const RegistScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const _handelLogin = async () => {
    try {
      if (email && password && name) {
        const isUserCrated = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        console.log('user crated', isUserCrated);
        const useData = {
          id: isUserCrated?.user?.uid,
          name: name,
          email: email,
        };
        const response = await firestore()
          .collection('users')
          .doc(isUserCrated?.user?.uid)
          .set(useData);
        console.log('lll', response);
        if (isUserCrated) {
          Alert.alert('Accout Crated..', isUserCrated?.user?.email);
        }
        await auth().currentUser.sendEmailVerification();
        await auth().signOut();
        alert('please Verify your Email check out link in Your Inbox');
      } else {
        Alert.alert('Please enter email password');
      }
    } catch (error) {
      console.log('error', error);
      Alert.alert(error.message);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: '900', marginVertical: 20}}>
        Register
      </Text>
      <TextInput
        value={name}
        onChangeText={txt => setName(txt)}
        style={styles.input}
        placeholder="Enter  name"
      />
      <TextInput
        value={email}
        onChangeText={txt => setEmail(txt)}
        style={styles.input}
        placeholder="Enter Email"
      />
      <TextInput
        value={password}
        onChangeText={txt => setPassword(txt)}
        style={styles.input}
        placeholder="Enter password"
      />
      <TouchableOpacity
        onPress={() => _handelLogin()}
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
          Register
        </Text>
      </TouchableOpacity>

      <Text style={{marginTop: 20}}>
        If you have accout{' '}
        <Text
          style={{
            color: 'blue',
            textDecorationLine: 'underline',
            fontWeight: '900',
          }}
          onPress={() => navigation.navigate('LoginScreen')}>
          Login
        </Text>
      </Text>
    </View>
  );
};

export default RegistScreen;

const styles = StyleSheet.create({
  input: {
    // width:WIDTH -20,
    width: '90%',
    borderRadius: 5,
    borderWidth: 2,
    marginBottom: 20,
  },
});
