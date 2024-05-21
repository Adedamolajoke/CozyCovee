import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'twrnc'
import Header from './Header'


const FriendsQuest = () => {
  return (
    <View style={tailwind`bg-white h-full`}>
      <View style={tailwind`mt-16 mb-6 `}>
        <Header  title={'Friends Quests'}/>
      </View>
    </View>
  )
}

export default FriendsQuest