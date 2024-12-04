import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DocumentPicker from 'react-native-document-picker'
import storage from '@react-native-firebase/storage';

const ImageSelect = () => {
  const [ImageData,setImageData]=useState(null)
  const pickImage=async()=>{
    try {
    const res=await DocumentPicker.pickSingle({
        type:[DocumentPicker.types.images]
      })
      setImageData(res)
      console.log('data..',res)
    } catch (error) {
      console.log(error)
    }
  }
  const ImageUpload=async()=>{
    try {
    const res=await DocumentPicker.pickSingle({
        type:[DocumentPicker.types.images]
      })
      setImageData(res)
      console.log('data..',res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
      {
        ImageData ?(
            <Image source={{uri:ImageData?.uri}} style={{width:200,height:200,borderRadius:100,}}/>
        ):<Text style={{color:'black'}}>No image Found...</Text>
      }
      <View>

<View style={{flexDirection:'row',justifyContent:'space-between',width:'60%',marginVertical:20}}>
      <Text onPress={()=>ImageSelect()} style={{backgroundColor:'blue',padding:10,borderRadius:5,color:'white',fontWeight:'600'}}>Select Image</Text>
      <Text onPress={()=>ImageUpload()} style={{backgroundColor:'blue',padding:10,borderRadius:5,color:'white',fontWeight:'600'}}>Upload Image</Text>
</View>

      </View>
    </View>
  )
}

export default ImageUpload

const styles = StyleSheet.create({})