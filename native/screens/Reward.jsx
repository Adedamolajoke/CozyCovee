import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'twrnc'
import Header from '../components/Header'


const Reward = () => {
  return (
    <View style={tailwind`bg-white h-full`}>
      <View style={tailwind`mt-18 mb-6 `}>
        <Header title={`Rewards`}/>
      </View>
    </View>
  )
}

export default Reward