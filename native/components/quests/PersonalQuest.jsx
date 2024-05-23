import { View, Text, Image, Pressable } from 'react-native'
import tailwind from 'twrnc'
import Header from './Header'
import { getFocusedRouteNameFromRoute, useNavigation, useRoute } from '@react-navigation/native'
import ProgressBar from '../utils/ProgressBar'
import { useLayoutEffect } from 'react'
import { useEffect } from 'react'

const PersonalQuest = () => {
    const navigation = useNavigation()
    const route = useRoute()
    let routeName = navigation.getState().routes[navigation.getState().index].name;
    console.log(routeName)
    useEffect(() => {
      if (routeName === 'Personal Quests'){
        navigation.getParent()?.setOptions({
          tabBarStyle: {display: 'none'}
        });
      }
      return () => navigation.getParent()?.setOptions({
        tabBarStyle: { height: 58, paddingBottom: 5},
      });
      
    }, [navigation, routeName]);

    return (
      <View style={[tailwind`bg-white h-full`, {zIndex: 100}]}>
      <View style={tailwind`mt-16 mb-6 `}>
        <Header  title={'Daily Quest'}/>
        <View style={tailwind`border-b-[1.5px] border-slate-100 mt-4`}></View>
      </View>
      <View style={tailwind`mx-3 mt-3 border-[1.5px] border-[#DADCDF] rounded-xl`}>
        <Text style={tailwind`text-base font-semibold mx-3 mt-3`}>{route.params.title}</Text>
        <Text style={tailwind`text-slate-400 font-semibold m-3 mt-1`}>Exercise | {route.params.days}</Text>
        <View style={tailwind`mx-3`}>
          <ProgressBar  width={route.params.width} />
        </View>
        <View style={tailwind`border-b-[1.5px] border-[#DADCDF] mt-4`}></View>
        <View style={tailwind`flex-row justify-center mt-12 mb-5`}>
          <View style={tailwind`w-1/2 items-center`}>
            <Image source={require('../../assets/c2.png')} style={tailwind` h-20 w-20 rounded-full mb-4`}/>
            <Text style={tailwind`font-semibold text-lg`}>You</Text>
          </View>
        </View>
        <Pressable style={tailwind`h-14 flex-row mx-3 mt-4 mb-8 border-[1.5px] border-[#DADCDF] shadow-lg rounded-lg bg-white justify-center items-center gap-2 text-center`}>
          <Text style={tailwind`font-semibold text-base`}>Update Activity</Text>
        </Pressable>
      </View>
      <Pressable style={tailwind`absolute bottom-3 w-full p-3 items-center`}>
        <Text style={tailwind`font-semibold text-base text-[rgba(216,0,39,1)]`}>Skip Challange</Text>
      </Pressable>
    </View>
    )
  }
  
  export default PersonalQuest