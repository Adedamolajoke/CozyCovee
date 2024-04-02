import React from 'react'
import { View, Text, Animated} from 'react-native'
import tailwind from 'twrnc'

const Paginator = ({data, index}) => {
  return (
    <View style={tailwind`flex flex-row gap-4 justify-center mb-4`}>
        {data.map((_, idx) => (
            <Animated.View key={idx} style={tailwind`h-2 w-2 mb-2 rounded ${idx === index ? 'bg-blue-500' :'bg-slate-300'}`} />
        ))}
    </View>
  )
}

export default Paginator