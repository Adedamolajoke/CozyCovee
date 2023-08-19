import React, { useState } from 'react'
import { Pressable, Text, TextInput } from 'react-native'
import { View } from 'react-native'
import tailwind from 'twrnc'
import CheckBox from 'react-native-check-box'
import CustomButton from './utils/Button'

const Hobby = ({navigation}) => {
  const [healthRateText, setHealthRateText] = useState(null)
  const [isChecked, setIsChecked] = useState(null)

  const goals = [
    {
        id:1,
        desc:"Reading"
    },
    {
        id:2,
        desc:"Yoga"
    },
    {
        id:3,
        desc:"Speaking to someone"
    },
    {
        id:4,
        desc:"Meditation"
    },
    {
        id:5,
        desc:"Listening to music"
    },
  ]
  const onChangeText = (text) => {
    setHealthRateText(text)
  }
  const continueHealth = (n) => {
    console.log(healthRateText)
    navigation.navigate("allset")
  }


  return (
    <View style={tailwind`py-16 px-2 flex flex-col  gap-3`}>
      <View style={tailwind`flex flex-row justify-start items-center gap-3`}>
        <View style={tailwind`h-[3px] w-12 bg-[#027579] `}></View>
        <View style={tailwind`h-[3px] w-12 bg-[#027579] `}></View>
        <View style={tailwind`h-[3px] w-12 bg-[#027579] `}></View>
      </View>
        <View style={tailwind`flex flex-col gap-3`}>
          <Text style={tailwind`font-semibold text-lg`}>Choose your hobbies of interest</Text>
          <Text style={tailwind`font-medium text-[15px] text-gray-500 leading-[30px]`}>This would help us suggest relevant context and communities that align with your preference</Text>
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

export default Hobby
