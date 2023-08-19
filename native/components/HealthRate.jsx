import React, { useState } from 'react'
import { Pressable, Text, TextInput, Touchable } from 'react-native'
import { View } from 'react-native'
import tailwind from 'twrnc'
import CustomButton from './utils/Button'

const HealthRate = ({navigation}) => {
  const [healthRate, setHealthRate] = useState(null)
  const [healthRateIndex, setHealthRateIndex] = useState(null)
  const [healthRateText, setHealthRateText] = useState(null)

  const selectHealth  = (n) => {
    setHealthRate(n)
    let healthIndex =  0
    if(n===0){
      healthIndex = 1
    } else if(n===1){
      healthIndex = 2
    }
    else if(n===2){
      healthIndex = 3
    }
    else if(n===3){
      healthIndex = 4
    }
    else if(n===4){
      healthIndex = 5
    }else{
      healthIndex =0
    }
    setHealthRateIndex(healthIndex)
  }
  const onChangeText = (text) => {
    setHealthRateText(text)
  }
  const continueHealth = (n) => {
    console.log(healthRateText, healthRateIndex)
    navigation.navigate('goals')
  }
  return (
    <View style={tailwind`py-16 px-2 flex flex-col  gap-3`}>
      <View style={tailwind`flex flex-row justify-start items-center gap-3`}>
        <View style={tailwind`h-[3px] w-12 bg-[#027579] `}></View>
        <View style={tailwind`h-[3px] w-12 bg-[#CCE3E4] `}></View>
        <View style={tailwind`h-[3px] w-12 bg-[#CCE3E4] `}></View>
      </View>
        <View style={tailwind`flex flex-col gap-3`}>
          <Text style={tailwind`font-semibold text-lg`}>Rate your current health</Text>
          <Text style={tailwind`font-medium text-[15px] text-gray-500`}>How would you rate your current mental wellbeing?</Text>
        </View>
        <View style={tailwind`flex flex-row gap-4 `}>
          
           {
            [...Array(5)].map((_,n)=>{
              const  num = n+1
              return (
                <Pressable
                onPress={() =>selectHealth(n)}
                key={n}
                style={{
                  backgroundColor: healthRate === n ? '#027579':'rgba(204, 227, 228, 0.2)', // Here, 0.2 represents 20% opacity
                  borderWidth: 0.5,
                  borderColor: '#027579',
                  borderRadius: 8, // Rounded corners (adjust as needed)
                  width: 50, // Adjust width as needed
                  height: 50, // Adjust height as needed
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: healthRate === n ? "#ffff" :'#027579' }}>
                  {num}
                </Text>
              </Pressable>
              
              )
            })
           }
         
        </View>
        <View style={tailwind`flex flex-row  justify-between pr-10 pl-1 -mt-2`}>
          <Text style={tailwind`text-[#027579] text-[10px] font-semibold`}>Just fine</Text>
          <Text style={tailwind`text-[#027579] text-[10px] font-semibold`}>Excellent</Text>
        </View>
        <View style={tailwind`flex-col gap-3 my-5`}>
          <Text style={tailwind`font-semibold`}>Not Specified</Text>
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

export default HealthRate
