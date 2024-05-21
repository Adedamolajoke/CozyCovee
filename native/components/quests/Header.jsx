import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'twrnc'
import BackButton from '../utils/BackButton'


const Header = ({title}) => {
  return (
    <>
    <View style={tailwind`flex-row ml-4 justify-between items-center`}>
       <BackButton />
       <View style={tailwind`w-[100%]`}>
        <Text style={tailwind`text-center text-xl font-bold`} >{title}</Text>
       </View>
       
    </View>
    </>
  )
}

export default Header