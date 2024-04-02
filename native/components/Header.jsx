import React from 'react'
import { View, Text, Image } from 'react-native'
import tailwind from 'twrnc'



const Header = ({title}) => {
  return (
    <View style={tailwind`flex flex-row items-center justify-between px-6 w-full pb-6 border-b-[1.5px] border-slate-300`}>
        <View >
            <Text style={tailwind`text-lg font-bold`}>{title}</Text>
        </View>
        <View style={tailwind`flex flex-row items-center gap-4`}>
            <Image source={require('../assets/search.png')} />
            <Image source={require('../assets/notifications.png')} />
            <Image source={require('../assets/Avatar.png')} />
        </View>
    </View>
  )
}

export default Header