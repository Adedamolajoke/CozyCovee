import React from 'react'
import { View, Text, Pressable, Image, VirtualizedList, Button } from 'react-native'
import tailwind from 'twrnc'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'


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

  return (
    <View style={tailwind`bg-white h-full`}>
      <View style={tailwind`mt-14 mb-3 `}>
        <Header title={`Rewards`}/>
      </View>

      <View style={tailwind`mx-3 mt-3 `}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}} end={{ x: 1, y: 1 }}
          colors={[FROM_COLOR, TO_COLOR]}
          style={tailwind`w-full rounded-xl pl-7 py-4` }
        >
          <View style={tailwind`flex flex-row justify-between`}>
            <View style={tailwind`flex flex-row items-center`}>
              <Image source={require('../assets/star.png')} style={tailwind`w-6 h-6`}/>
              <Text style={tailwind`text-4xl font-bold text-[#FFFDFD]`}> 45</Text>
            </View>
            <Pressable style={tailwind`p-3 bg-[rgba(255,253,253,0.14)] items-center rounded-lg mt-3  mr-6`}>
              <Text style={tailwind`text-base text-[#FFFDFD]`}>View Insights</Text>
            </Pressable>
          </View>
          <Text style={tailwind`text-[rgba(255,253,253,0.66)] text-base`}>Points Earned</Text>
        </LinearGradient>
      </View>
      <View style={tailwind`bg-[rgba(240,241,243,1)] p-3 m-3 rounded-lg flex-row justify-center items-center gap-2`}>
        <Image source={require('../assets/people.png')} style={tailwind`w-5 h-5`}/>
        <Text style={tailwind`text-[rgba(35,119,241,1)]`}>Earn more Points by inviting your friends</Text>
      </View>

      <View style={tailwind`mx-3 border-[1.5px] border-[#DADCDF] rounded-xl`}>
        <Text style={tailwind`text-base font-semibold mx-3 mt-3 w-full text-center`}>Daily Reward</Text>
        <View style={tailwind`border-b-[1.5px] border-[#DADCDF] mt-4`}></View>
        <View style={tailwind`flex-row justify-center mt-7 mb-2`}>
          <View style={tailwind` justify-center items-center gap-1 flex-row`}>
            <Image source={require('../assets/star.png')} style={tailwind` h-6 w-6 rounded-full`}/>
            <Text style={tailwind`font-semibold text-4xl`}>5</Text>
          </View>
        </View>
        <Pressable style={tailwind`h-14 flex-row mx-3 mt-4 mb-5 border-[1.5px] border-[#DADCDF] shadow-lg rounded-lg bg-white justify-center items-center gap-2 text-center`}>
          <Text style={tailwind`font-semibold text-base`}>Claim in: 12hrs 32mins</Text>
        </Pressable>
      </View>
      <View>
        <Text style={tailwind`text-lg font-bold ml-3 mb-1 mt-3`}>Completed challenges</Text>
        <View style={tailwind`max-h-30`}>
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
  )
}

export default Reward