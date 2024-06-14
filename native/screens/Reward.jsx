import React from 'react'
import { View, Text, Pressable, Image, VirtualizedList, useWindowDimensions } from 'react-native'
import tailwind from 'twrnc'
import Header from '../components/onboarding/Header'
import { LinearGradient } from 'expo-linear-gradient'
import { Layout } from './Layout'



const Reward = () => {
  const FROM_COLOR = 'rgba(188, 36, 242, 1)';
  const TO_COLOR = 'rgba(36, 120, 242, 1)';
  const data = [
    {
      title: '50 Push ups',
      id: 1
    },
    {
      title: '50 Press ups',
      id: 2
    },
    {
      title: '10 Squats',
      id: 3
    },
    {
      title: '5 Sit ups',
      id: 4
    }
  ]

  const isTall = useWindowDimensions().height >= 700

  return (
    <Layout>
      <View style={tailwind`bg-white h-full`}>
        <Header title={`Rewards`}/>
        {/* <Text>{height} & {width} height and width</Text> */}
        <View style={tailwind`mx-3  ${isTall ? 'mt-3' : 'mt-0'} `}>
          <LinearGradient
            start={{x: 0.0, y: 0.25}} end={{ x: 1, y: 1 }}
            colors={[FROM_COLOR, TO_COLOR]}
            style={tailwind`w-full rounded-xl pl-7 ${isTall ? 'py-5': 'py-3'}`}
          >
            <View style={tailwind`flex flex-row justify-between`}>
              <View style={tailwind`flex flex-row items-center`}>
                <Image source={require('../assets/star.png')} style={tailwind`w-6 h-6`}/>
                <Text style={tailwind`${isTall ? 'text-4xl ': 'text-3xl'} font-bold text-[#FFFDFD] `}> 45</Text>
              </View>
              <Pressable style={tailwind`bg-[rgba(255,253,253,0.14)] items-center rounded-lg  mr-6 ${isTall ? 'mt-3 p-3' : 'p-2 px-3 mt-2'} `}>
                <Text style={tailwind` text-[#FFFDFD]  text-base`}>View Insights</Text>
              </Pressable>
            </View>
            <Text style={tailwind`text-[rgba(255,253,253,0.61)]  ${isTall ? 'text-base' : 'text-sm'} text-base`}>Points Earned</Text>
          </LinearGradient>
        </View>
        <View style={tailwind`bg-[rgba(240,241,243,1)] p-3 m-3 rounded-lg flex-row justify-center items-center gap-2`}>
          <Image source={require('../assets/people.png')} style={tailwind`w-5 h-5`}/>
          <Text style={tailwind`text-[rgba(35,119,241,1)]`}>Earn more Points by inviting your friends</Text>
        </View>

        <View  style={tailwind`mx-3 border-[1.5px] border-[#DADCDF] rounded-xl`}>
          <Text style={tailwind`text-base font-semibold mx-3  ${isTall ? 'mt-3' : 'mt-1'} w-full text-center`}>Daily Reward</Text>
          <View style={tailwind`border-b-[1.5px] border-slate-100 ${isTall ? 'mt-4' : 'mt-2' }`}></View>
          <View style={tailwind`flex-row justify-center  ${isTall ? 'mt-7' : 'mt-3'} mb-2`}>
            <View style={tailwind`justify-center items-center gap-1 flex-row`}>
              <Image source={require('../assets/star.png')} style={tailwind` ${isTall ? 'h-6 w-6' : 'h-5 w-5'} rounded-full`}/>
              <Text style={tailwind`font-semibold  ${isTall ? 'text-4xl' : 'text-2xl'}`}>5</Text>
            </View>
          </View>
          <Pressable style={tailwind`h-12 flex-row mt-2 mx-3 mb-3 border-[1.5px] border-[#DADCDF] shadow-lg rounded-lg bg-white justify-center items-center`}>
            <Text style={tailwind`font-semibold text-base`}>Claim in: 12hrs 32mins</Text>
          </Pressable>
        </View>
        <View>
          <Text style={tailwind` font-bold ml-3 mb-1 ${isTall ? 'mt-3' : 'mt-1'} text-lg`}>Completed challenges</Text>
          <View style={tailwind` ${isTall ? 'max-h-30' : 'max-h-18'}`}>
              <VirtualizedList
                  data={data}
                  initialNumToRender={4}
                  showsVerticalScrollIndicator={false} 
                  renderItem={({item}) => (
                    <>
                    <Pressable 
                      style={tailwind`flex flex-row items-center ${item.id != 1 ? 'mt-2': 'mt-1'} mx-3 mb-2 gap-4`}
                    >
                      <View style={tailwind``}>
                        <Image source={require('../assets/quests.png')} style={tailwind`h-10 w-10 rounded-lg`}/>
                      </View>
                      <View style={tailwind`flex-row justify-between w-[82%]`}>
                        <View style={tailwind`flex-row items-center gap-1`}>
                          <Text style={tailwind`text-base font-semibold mb-1`}>{item.title}</Text>
                          <Image source={require('../assets/check.png')} style={tailwind`h-5 w-5 rounded-lg`}/>
                        </View>
                        <Pressable style={tailwind`h-full flex items-center bg-white py-2 px-3 rounded-lg border-[1.5px] border-[#DADCDF] shadow-lg`}>
                          <Text style={tailwind`text-base font-semibold`}>Claim 15pts</Text>
                        </Pressable>
                      </View>
                    </Pressable>
                    {item.id !== data.length && (
                      <View style={tailwind`border-b-[1.5px] border-slate-100`}></View>
                    )}
                    </>

                  )}
                  keyExtractor={item => item.id}
                  getItemCount={(data) => data.length}
                  getItem={(data, index) => data[index]}
                  vertical
                  style={tailwind``}
              />
            </View>
          </View>

      </View>
    </Layout>
    
  )
}

export default Reward