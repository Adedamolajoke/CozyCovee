import React from 'react'
import { View, Text, Image } from 'react-native'
import tailwind from 'twrnc'
import BackButton from '../utils/BackButton'


const Header = ({title, type, name, img}) => {
  return (
    <>
    <View style={tailwind`flex-row ml-4 gap-8 justify-between items-center `}>
       <BackButton />
       <View style={tailwind`w-[100%]`}>
        {
          type === 'chats' ? (
            <View style={tailwind` flex-row ml-8 items-center gap-4`}>
              <Image source={require('../../assets/ai.png')} style={tailwind`h-10 w-10`}/>
              <Text style={tailwind` text-lg font-bold text-[#07172D]`}>{name}</Text>
            </View>
          ) : (
            <Text style={tailwind`text-center text-xl font-bold text-[#07172D]`} >{title}</Text>
          )
        }
       </View>
       
    </View>
    </>
  )
}

export default Header