import React from 'react'
import { View, Text, Image } from 'react-native'
import tailwind from 'twrnc'



const Header = ({title}) => {
  return (
    <View style={tailwind`mt-3 mb-3 `}>
      <View style={tailwind`flex flex-row items-center justify-between px-6 w-full pb-5 border-b-[1.5px] border-slate-100`}>
          <View >
              <Text style={tailwind`text-lg font-bold`}>{title}</Text>
          </View>
          <View style={tailwind`flex flex-row items-center gap-4`}>
              <Image source={require('../../assets/search.png')} />
              <Image source={require('../../assets/notifications.png')} />
              <Image source={require('../../assets/Avatar.png')} />
          </View>
      </View>
    </View>
  )
}

export default Header