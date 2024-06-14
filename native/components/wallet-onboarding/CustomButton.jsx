import React from 'react'
import { Pressable, Text } from 'react-native'
import tailwind from 'twrnc'

const CustomButton = ({text}) => {
  return (
    <>
      <Pressable style={tailwind`p-3 flex-row mt-2 mb-3 border-[1.5px] border-[rgba(16,95,210,.3)] shadow-sm rounded-lg bg-[rgba(16,95,210,1)] justify-center items-center`}>
        <Text style={tailwind`font-semibold text-base text-white`}>{text}</Text>
      </Pressable>
    </>
  )
}

export default CustomButton