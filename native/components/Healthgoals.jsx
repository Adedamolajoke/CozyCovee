import React, { useState } from 'react'
import { Pressable, Text, TextInput } from 'react-native'
import { View } from 'react-native'
import tailwind from 'twrnc'
import CheckBox from 'react-native-check-box'
import CustomButton from './utils/Button'

const HealthGoals = ({navigation}) => {
  const [healthRateText, setHealthRateText] = useState(null)

  const goals = [
    {
        id:1,
        desc:"I want to manage anxiety"
    },
    {
        id:2,
        desc:"I want to build my self confidence"
    },
    {
        id:3,
        desc:"I want to cope with depression "
    },
    {
        id:4,
        desc:"I want to enhance mindfullness"
    },
    {
        id:5,
        desc:"I want to improve sleep quality"
    },
  ]
  const onChangeText = (text) => {
    setHealthRateText(text)
  }
  const continueHealth = (n) => {
    console.log(healthRateText)
    navigation.navigate("hobbys")
  }
  const [isChecked, setIsChecked] = useState(null)


  return (
    <View style={tailwind`py-16 px-2 flex flex-col  gap-3`}>
      <View style={tailwind`flex flex-row justify-start items-center gap-3`}>
        <View style={tailwind`h-[3px] w-12 bg-[#027579] `}></View>
        <View style={tailwind`h-[3px] w-12 bg-[#027579] `}></View>
        <View style={tailwind`h-[3px] w-12 bg-[#CCE3E4] `}></View>
      </View>
        <View style={tailwind`flex flex-col gap-3`}>
          <Text style={tailwind`font-semibold text-lg`}>Choose your health goals</Text>
          <Text style={tailwind`font-medium text-[15px] text-gray-500 leading-[30px]`}>What are the mental health goals you would like to achieve on this platform</Text>
        </View>
        <View style={tailwind`flex flex-col gap-4 `}>
           {
            goals.map((item)=>(
                <View key={item.id} style={tailwind`flex flex-row border-[#B0B0B0] border-[0.7px] h-10 items-center px-2 rounded-md gap-4 `}>
                    <CheckBox isChecked={isChecked === item.id} onClick={()=>setIsChecked(item.id)} checkBoxColor='#027579' checkedCheckBoxColor='#027579' />
                    <Text>{item.desc}</Text>
                </View>
            ))
           }
         
        </View>
        <View style={tailwind`flex-col gap-3 my-5`}>
          <Text style={tailwind`font-semibold`}>Others</Text>
          <TextInput 
          value={healthRateText}
          onChangeText={onChangeText}
          placeholder='Tell us about it...' style={tailwind`text-gray-400 px-2  border-[0.9px] border-gray-400 rounded-md h-32`} />
        </View>
        <View>
          <CustomButton title="Continue" onPress={continueHealth}/>
        </View>
    </View>
   
  )
}

export default HealthGoals
