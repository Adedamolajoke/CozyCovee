import React, { useEffect } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import tailwind from 'twrnc'
import Header from './Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import ProgressBar from '../utils/ProgressBar'
// border

const FriendsQuest = () => {
  const route = useRoute()
  const navigation = useNavigation()
  let routeName = navigation.getState().routes[navigation.getState().index].name;
  console.log(routeName)
  useEffect(() => {
    if (routeName === 'Friends Quests'){
      navigation.getParent()?.setOptions({
        tabBarStyle: {display: 'none'}
      });
    }
    return () => navigation.getParent()?.setOptions({
      tabBarStyle: { height: 58, paddingBottom: 5},
    });
    
  }, [navigation, routeName]);

  return (
    <View style={tailwind`bg-white h-full`}>
      <View style={tailwind`mt-16 mb-6 `}>
        <Header  title={'Friends Quests'}/>
        <View style={tailwind`border-b-[1.5px] border-slate-100 mt-4`}></View>
      </View>
      <View style={tailwind`mx-3 mt-3 border-[1.5px] border-[#DADCDF] rounded-xl`}>
        <Text style={tailwind`text-base font-semibold m-3`}>{route.params.title}: 15 Palates</Text>
        <View style={tailwind`mx-3`}>
          <ProgressBar  width={route.params.width} />
        </View>
        <View style={tailwind`border-b-[1.5px] border-[#DADCDF] mt-4`}></View>
        <View style={tailwind`flex-row justify-center mt-12 mb-5`}>
          <View style={tailwind`w-1/2 items-center border-r-[1.5px] border-[#DADCDF]`}>
            <Image source={require('../../assets/c2.png')} style={tailwind` h-20 w-20 rounded-full mb-4`}/>
            <Text style={tailwind`font-semibold text-lg`}>You</Text>
          </View>
          <View style={tailwind`w-1/2 items-center`}>
            <Image source={require('../../assets/friend.png')} style={tailwind` h-20 w-20 rounded-full mb-4`}/>
            <Text style={tailwind`font-semibold text-lg`}>Dunmola</Text>
          </View>
        </View>
        <Pressable style={tailwind`h-14 flex-row mx-3 mt-4 mb-8 border-[1.5px] border-[#DADCDF] shadow-lg rounded-lg bg-white justify-center items-center gap-2 text-center`}>
          <Image source={require('../../assets/bell.png')} style={tailwind` h-10 w-10 rounded-full`}/>
          <Text style={tailwind`font-semibold text-base`}>Send reminder</Text>
        </Pressable>
      </View>
      <Text style={tailwind`font-semibold text-base text-slate-400 mx-3 mt-5`} >Location:<Text style={tailwind`text-black`}> 24, Yanawaro, Twin tower</Text></Text>
    </View>
  )
}

export default FriendsQuest