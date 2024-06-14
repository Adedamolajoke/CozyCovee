import React from 'react'
import { View, Image, Text, useWindowDimensions } from 'react-native'
import tailwind from 'twrnc'
import CustomButton from './CustomButton'




const Payment = () => {
  const isTall = useWindowDimensions().height >= 700

  return (
    <View style={tailwind`h-10/12 items-center justify-center`}>
      <View style={tailwind`w-[80%]`}>
        <Image source={require('../../assets/connect.png')} style={[tailwind` w-full ${isTall ? 'h-40' : 'h-35'} rounded-lg`, {objectFit: 'contain'}]} />
        <View style={tailwind`my-5 items-center`} >
          <Text style={tailwind`font-bold text-lg text-[rgba(7,22,45,1)]`}>Match with a counsellor</Text>
          <Text style={tailwind`mt-2 text-[rgba(82,92,108,1)] text-center`}>Fill out a questionnaire to get the best match for your needs</Text>
        </View>
        <CustomButton text={"Pay 10 USDC to continue"} />
      </View>
    </View>
   
  )
}

export default Payment