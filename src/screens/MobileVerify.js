import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const MobileVerify = () => {
  const [mobileNo, setMobileNo] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmData, setConfirmData] = useState('');

  const sendOtp = async() => {
    try {
        const countryCode='+91' + mobileNo
        const res=await auth().signInWithPhoneNumber(countryCode)

        setConfirmData(res)
        console.log('res...',res)
        alert('Otp send your enter no please verify Otp')
    } catch (error) {
      console.log('eorr', error);
    }
  };
  const vetifyOtp =async () => {
    try {
        const res=await confirmData.confirm(otp)
        console.log('reslll',res)
        alert('oTP match Done')
        } catch (error) {
      console.log('eorr', error);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'balck', fontSize: 18}}>MobileVerify</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Mobile No"
        placeholderTextColor={'black'}
        value={mobileNo}
        onChangeText={(txt)=>setMobileNo(txt)}
        maxLength={10}
      />
      <TouchableOpacity
        onPress={() => sendOtp()}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginBottom: 20,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>
          Registe with Mobile No
        </Text>
      </TouchableOpacity>
      <TextInput
        style={[styles.inputStyle]}
        placeholder="Enter Otp"
        placeholderTextColor={'black'}
        value={otp}
        onChangeText={(txt)=>setOtp(txt)}
      />
      <TouchableOpacity
        onPress={() => vetifyOtp()}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Enter OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MobileVerify;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    borderRadius: 10,
    marginVertical: 10,
  },
});
