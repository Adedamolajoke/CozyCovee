import React from 'react'
import { Text, View, Image } from 'react-native'
import tailwind from 'twrnc'


const ChatList = ({img, name, msg, time, no, tag, len, id}) => {
  return (
    <View style={tailwind`flex flex-row mt-5 mx-6 items-center gap-3 pb-3 ${id == len -1 ? '' : 'border-b-[1px] border-slate-200'}`}>
        <View>
          <Image source={img} style={tailwind`h-11 w-11`}/>
        </View>
        <View style={tailwind`w-[79%]`}>
          <View style={tailwind`flex flex-row justify-between items-center`}>
            <Text style={tailwind`font-bold text-base`}>{name}{ tag && <Text style={tailwind`text-base text-slate-700 font-normal`}> | s{tag}</Text> } </Text>
            <Text style={tailwind` ${ no != null ? `text-blue-500` : `text-slate-800`}`}>{time}</Text>
          </View>
          <View style={tailwind`flex-row justify-between items-center`}>
            <Text style={tailwind`text-slate-500`}>{msg}</Text>
            { no && 
                <View style={tailwind`h-6 w-6 justify-center items-center rounded-full bg-blue-500 `}>
                <Text style={tailwind`text-white font-bold text-xs`}>{no}</Text>
                </View>
            }
          </View>
          
        </View>
      </View>
  )
}

export default ChatList