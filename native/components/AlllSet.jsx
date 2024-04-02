import React, { useState } from 'react'
import { Image, Pressable, Text, TextInput } from 'react-native'
import { View } from 'react-native'
import tailwind from 'twrnc'
import CheckBox from 'react-native-check-box'
import CustomButton from './utils/Button'

const AllSet = ({navigation}) => {
  const continueHealth = (n) => {
    navigation.navigate("main")
  }


  return (
    <View style={tailwind`py-16 px-2 flex flex-col mx-5 gap-3 items-center justify-center`}>
        <View style={tailwind`flex flex-col gap-4 mt-20 mb-8`}>
          <Image source={require('../assets/allset.png')} />
        </View>
        <View style={tailwind`flex flex-col gap-3`}>
          <Text style={tailwind`font-semibold text-center text-xl`}>You are all set, David</Text>
          <Text style={tailwind`font-medium text-[15px] text-center text-gray-500 leading-[30px]`}>You have succesfully completed all the neccary steps required. We are  glad to have you on board</Text>
        </View>
        
        <View style={tailwind`w-full mt-4`}>
          <CustomButton title="Continue" onPress={continueHealth}/>
        </View>
    </View>
   
  )
}

export default AllSet
