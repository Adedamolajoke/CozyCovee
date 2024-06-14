import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Animated, Image, Pressable, SectionList } from 'react-native'
import tailwind from 'twrnc'
import Header from '../components/onboarding/Header'
import {LinearGradient} from 'expo-linear-gradient'
import ProgressBar from '../components/utils/ProgressBar'
import { Layout } from './Layout'



const FROM_COLOR = 'rgba(188, 36, 242, 1)';
const TO_COLOR = 'rgba(36, 120, 242, 1)';


const data1 = [
  {
    title: 'Personal Quests',
    data: [
      {
        category: 'Exercise',
        title: 'Monthly 50 Push ups',
        days: '7 of 30',
        progress: 80,
        id: 1
      },
      {
        category: 'Exercise',
        title: 'Monthly 50 Push ups',
        days: '7 of 30',
        progress: 50,
        id: 2
      },
      // {
      //   category: 'Exercise',
      //   title: 'Monthly 50 Push ups',
      //   days: '7 of 30',
      //   progress: 30,
      //   id: 3
      // },
      // {
      //   category: 'Exercise',
      //   title: 'Monthly 50 Push ups',
      //   days: '7 of 30',
      //   progress: 70,
      //   id: 4
      // }
    ]
  }
]

const data2 = [
  {
    title: 'Friends Quests',
    data:  [
      {
        category: 'Exercise',
        title: 'Yoga',
        progress: 10,
        id: 1
      },
      {
        category: 'Exercise',
        title: 'Amala Spots',
        progress: 50,
        id: 2
      },
      // {
      //   category: 'Exercise',
      //   title: 'Aerobics',
      //   progress: 25,
      //   id: 3
      // },
      // {
      //   category: 'Exercise',
      //   title: 'Deadlifts',
      //   progress: 30,
      //   id: 4
      // }
    ]
    
  }
]



const Quest = ({ navigation }) => {
  return (
    <Layout>
      <View  style={tailwind`bg-white h-full`}>
          <Header title={`Quest`}/>

        <View style={[tailwind`mx-3 mt-3 rounded-xl bg-red-500`]}>
          <LinearGradient
            start={{x: 0.0, y: 0.25}} end={{ x: 1, y: 1 }}
            colors={[FROM_COLOR, TO_COLOR]}
            style={tailwind`w-full rounded-xl pl-7 py-6` }
          >
            <Text style={tailwind`text-white font-bold text-3xl mb-1`}>
              2 / 4
            </Text>
            <Text style={tailwind`text-white mb-4`}>
              Challenges completed
            </Text>
            <View style={tailwind`w-[90%] h-2 bg-[rgba(255,255,255,0.14)] rounded`}>
              <Animated.View  style={[StyleSheet.absoluteFill, tailwind`rounded`, {backgroundColor: "#8BED4F", width: '50%'}]}/>
            </View>
          </LinearGradient>
        </View>

        <View style={[tailwind`mt-3 flex-1`, {height: 'fit-content'}]}>
          <SectionList 
            sections={[...data1, ...data2]}
            renderItem={({item, section}) => {
              if (section.title === 'Personal Quests') {
                return (
                  <>
                  <Pressable 
                    style={tailwind`flex flex-row ${item.id != 1 ? 'mt-5': 'mt-1'} mx-3 mb-4 gap-4 w-[80%]`}
                    onPress={() => {
                      navigation.navigate('Personal Quests', {title: item.title, width: item.progress, days: item.days})
                    }}
                  >
                    <View>
                      <Image source={require('../assets/quests.png')} style={tailwind`h-18 w-18 rounded-lg`}/>
                    </View>
                    <View style={tailwind`w-[70%]`}>
                      <View>
                        <Text style={tailwind`text-base font-semibold mb-1`}>
                          {item.title}
                        </Text>
                        <View style={tailwind`mb-2`}>
                          <Text style={tailwind`text-base text-[rgba(100,109,123,1)]`}>
                            {item.category} | Days {item.days}
                          </Text>
                        </View>
                        <ProgressBar width={item.progress} />
                      </View>
                    </View>
                  </Pressable>
                  {item.id !== section['data'].length && (
                    <View style={tailwind`border-b-[1.5px] border-slate-100`}></View>
                  )}
                </>
                )
              } else {
                return (
                  <>
                    <Pressable 
                      style={tailwind` flex flex-row ${item.id != 1 ? 'mt-4': 'mt-1'} mx-3 mb-1 gap-4 w-[80%]`}
                      onPress={() => {
                        navigation.navigate('Friends Quests', {title: item.title, width: item.progress})
                      }}
                    >
                      <View style={tailwind``}>
                        <Image source={require('../assets/quests.png')} style={tailwind`h-18 w-18 rounded-lg`}/>
                      </View>
                      <View style={tailwind`w-[70%]`}>
                        <View>
                          <Text style={tailwind`text-base font-semibold mb-1`}>
                            {item.title}
                          </Text>
                          <View style={tailwind`mb-2`}>
                            <Text style={tailwind`text-base text-[rgba(100,109,123,1)]`}>
                              {item.category}
                            </Text>
                          </View>
                          <ProgressBar width={item.progress} />
                        </View>
                      </View>
                    </Pressable>
                    {item.id !== section['data'].length && (
                      <View style={tailwind`border-b-[1.5px] border-slate-100`}></View>
                    )}
                  </>
                )
              }
              }
            }
            renderSectionHeader={({section})=>(
              <View style={tailwind`bg-white`}>
                <Text style={tailwind`text-lg font-bold ml-3 mb-1`}>
                  {section.title}
                </Text>
              </View>
            )}
            style={tailwind`mb-5`}
            showsVerticalScrollIndicator = {false}
            keyExtractor={item=>item.id}
            stickySectionHeadersEnabled
          
          />
        </View>
         {/* <ScrollView nestedScrollEnabled={true} style={tailwind`mt-3`}>
          <View>
            <Text style={tailwind`text-lg font-bold ml-3 mb-1`}>
              Personal Quests
            </Text>
            <View style={tailwind`max-h-[13rem]`}>
              <VirtualizedList
                  data={data}
                  initialNumToRender={4}
                  showsVerticalScrollIndicator={false} 
                  renderItem={({item}) => (
                    <>
                    <Pressable 
                      style={tailwind`flex flex-row ${item.id != 1 ? 'mt-4': 'mt-1'} mx-3 mb-4 gap-4 w-[80%]`}
                      onPress={() => {
                        navigation.navigate('Personal Quests', {title: item.title, width: item.progress, days: item.days})
                      }}
                    >
                      <View>
                        <Image source={require('../assets/quests.png')} style={tailwind`h-20 w-20 rounded-lg`}/>
                      </View>
                      <View style={tailwind`w-[70%]`}>
                        <View>
                          <Text style={tailwind`text-base font-semibold mb-1`}>
                            {item.title}
                          </Text>
                          <View style={tailwind`mb-3`}>
                            <Text style={tailwind`text-base text-[rgba(100,109,123,1)]`}>
                              {item.category} | Days {item.days}
                            </Text>
                          </View>
                          <ProgressBar width={item.progress} />
                        </View>
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
          <View>
            <Text style={tailwind`text-lg font-bold ml-3 mb-1`}>
              Friends Quests
            </Text>
            <View style={tailwind`max-h-[10rem]`}>
              <VirtualizedList
                  data={friendsQuestData}
                  initialNumToRender={4}
                  showsVerticalScrollIndicator={false} 
                  renderItem={({item}) => (
                    <>
                    <Pressable 
                      style={tailwind` flex flex-row ${item.id != 1 ? 'mt-4': 'mt-1'} mx-3 mb-4 gap-4 w-[80%]`}
                      onPress={() => {
                        navigation.navigate('Friends Quests', {title: item.title, width: item.progress})
                      }}
                    >
                      <View style={tailwind``}>
                        <Image source={require('../assets/quests.png')} style={tailwind`h-20 w-20 rounded-lg`}/>
                      </View>
                      <View style={tailwind`w-[70%]`}>
                        <View>
                          <Text style={tailwind`text-base font-semibold mb-1`}>
                            {item.title}
                          </Text>
                          <View style={tailwind`mb-3`}>
                            <Text style={tailwind`text-base text-[rgba(100,109,123,1)]`}>
                              {item.category}
                            </Text>
                          </View>
                          <ProgressBar width={item.progress} />
                        </View>
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
        </ScrollView> */}
      </View>
    </Layout>
  )
}

export default Quest

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    marginTop: 18,
    marginBottom: 3,
  },
  questContainer: {
    backgroundColor: 'green',
  },
  questText: {
    fontSize: 'lg',
    fontWeight: 'bold',
  },
});
