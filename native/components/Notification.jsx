import React, { useState } from 'react'
import { Image, Pressable, Text, TextInput } from 'react-native'
import { View } from 'react-native'
import tailwind from 'twrnc'
import CheckBox from 'react-native-check-box'
import CustomButton from './utils/Button'
import tw from 'tailwind-react-native-classnames'

const Notification = ({navigation}) => {
  const continueHealth = () => {
    navigation.navigate("chats")
  }
  const SkipNotification = (n) => {

  }


  return (
    <View style={tailwind`py-16 px-2 flex flex-col  gap-3`}>
        <View style={tailwind`flex flex-col gap-3`}>
          <Text style={tailwind`font-semibold text-lg`}>Push Notification</Text>
          <Text style={tailwind`font-medium text-[15px] text-gray-500 leading-[30px]`}>We want to keep you on the loop of activities and ensure that you are engaged on our platform.</Text>
        </View>
        <View style={tailwind`flex items-center my-4 gap-4 `}>
          <Image source={require("../assets/alarm.png")} style={tailwind`rounded-xl h-[23rem]`} />
        </View>
        <View style={tailwind`flex-col gap-3`}>
          <CustomButton title="Continue" onPress={continueHealth} variant="Next"  />
          <CustomButton title="Not Right Now" onPress={SkipNotification} variant="Skip" />
        </View>
    </View>
   
  )
}

export default Notification
