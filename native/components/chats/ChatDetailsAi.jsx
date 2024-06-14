import React, { useEffect, useRef, useState } from 'react'
import { ImageBackground, View, Text,Pressable, ScrollView, TextInput, Image } from 'react-native'
import tailwind from 'twrnc'
import { Layout } from '../../screens/Layout'
import Header from '../quests/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SvgXml } from 'react-native-svg'
import { curlLeft, curlRight } from '../../assets/Icons'



const ChatDetailsAi = () => {
    const route = useRoute()
    const messageRef = useRef()
    const [message, onChangeMessage] = useState(null)
    const navigation = useNavigation()
    let routeName = navigation.getState().routes[navigation.getState().index].name;
    
    useEffect(() => {
      if (routeName === 'chat-ai'){
        navigation.getParent()?.setOptions({
          tabBarStyle: {display: 'none'}
        });
      }
      return () => navigation.getParent()?.setOptions({
        tabBarStyle: { height: 58, paddingBottom: 5},
      });
      
    }, [navigation, routeName]);

  return (
    <>
    <Layout>
        <View style={tailwind`flex flex-1`}>
            <ImageBackground source={require(`../../assets/chat-bg.png`)} resizeMode="cover" style={tailwind`bg-slate-300 -z-10 w-full h-full`}>
                <View style={tailwind`py-2 bg-white w-full`}>
                    <Header  title={'Daily Quest'} type='chats' img={route.params.img} name={route.params.name} />   
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={tailwind`mt-3 mx-3 mb-28`}>
                    <View  style={[tailwind`relative bg-[#2377F1] self-end p-2 rounded-3xl mt-2 p-4`, {maxWidth: '75%'}]}>
                        <View style={tailwind `flex-row gap-3`}>
                            <Text style={tailwind`text-base max-w-[73%] text-white`}>Hello</Text>
                            <Text style={tailwind`text-sm text-white self-end`}>7: 35 pm</Text>
                        </View>
                        
                        <SvgXml xml={curlRight} width={20} height={20} style={tailwind`absolute bottom-0 right-[-.1rem] z-50`}/>
                    </View>
                    
                    <View style={[tailwind` relative bg-white p-2 rounded-3xl mt-2 p-4`, {maxWidth: '75%', alignSelf: 'flex-start'}]}>
                        <View style={tailwind `flex-row gap-3`}>
                            <Text style={tailwind`text-base max-w-[73%] flex-row`}>Hello, adedamolajoke</Text>
                            <Text style={tailwind`text-sm self-end`}>7: 35 pm</Text>
                        </View>
                        
                        <SvgXml xml={curlLeft} width={20} height={20} style={tailwind`absolute bottom-0 left-[-.1rem] z-50`}/>
                    </View>

                    <View style={[tailwind` relative bg-white p-2 rounded-3xl mt-2 p-4`, {maxWidth: '75%', alignSelf: 'flex-start'}]}>
                        <View style={tailwind `flex-row gap-3`}>
                            <Text style={tailwind`text-base max-w-[73%] flex-row`}>Rate how you feel today</Text>
                            <Text style={tailwind`text-sm self-end`}>7: 35 pm</Text>
                        </View>
                        
                        <SvgXml xml={curlLeft} width={20} height={20} style={tailwind`absolute bottom-0 left-[-.1rem] z-50`}/>
                    </View>

                    <View style={[tailwind` relative bg-white p-2 rounded-3xl mt-2 p-4`, {width: '85%', alignSelf: 'flex-start'}]}>
                        <View style={tailwind `flex gap-3`}>
                            <Text style={tailwind`text-base w-full flex-row`}>How do you feel today?</Text>
                            <View style={tailwind`w-full justify-center items-center mt-3`}>
                            <View style={tailwind``}>
                                <Image source={require('../../assets/neutral.png')} style={tailwind`h-20 w-20`}/>
                                <Text style={tailwind`self-center font-bold`}>Neutral</Text>
                            </View>

                            <View style={tailwind`w-full h-5 bg-[#ECEDEF] rounded-lg mt-4`}>
                                <View style={tailwind`w-5 h-5 bg-[#2377F1] rounded-full ml-[48%]`}></View>
                            </View>

                            <View style={tailwind`w-full flex-row mt-2 justify-between`}>
                                <Text style={tailwind`font-semibold text-[#646D7B] `}>Very unpleasant</Text>
                                <Text style={tailwind`font-semibold text-[#646D7B] `}>Very pleasant</Text>
                            </View>
                        </View>
                        </View>
                        
                        
                        <SvgXml xml={curlLeft} width={20} height={20} style={tailwind`absolute bottom-0 left-[-.1rem] z-50`}/>
                    </View>

                    <View style={[tailwind` relative bg-[#2377F1] p-2 self-end rounded-3xl mt-2 p-4`, {width: '85%'}]}>
                        <View style={tailwind `flex gap-3`}>
                            <Text style={tailwind`text-base w-full text-white flex-row`}>I am feeling</Text>
                            <View style={tailwind`w-full justify-center items-center mt-3`}>
                            <View style={tailwind``}>
                                <Image source={require('../../assets/sad.png')} style={tailwind`h-20 w-20`}/>
                                <Text style={tailwind`self-center font-bold text-white`}>Unpleasant</Text>
                            </View>

                            <View style={tailwind`w-full h-5 bg-[rgba(236,237,239,0.45)] rounded-lg mt-4`}>
                                <View style={tailwind`w-5 h-5 bg-white rounded-full ml-[18%]`}></View>
                            </View>

                            <View style={tailwind`w-full flex-row mt-2 justify-between`}>
                                <Text style={tailwind`font-semibold text-white `}>Very unpleasant</Text>
                                <Text style={tailwind`font-semibold text-white `}>Very pleasant</Text>
                            </View>
                        </View>
                        </View>
                        
                        
                        <SvgXml xml={curlRight} width={20} height={20} style={tailwind`absolute bottom-0 right-[-.1rem] z-50`}/>
                    </View>

                    <View style={[tailwind` relative bg-white p-2 rounded-3xl mt-2 p-4`, {maxWidth: '75%', alignSelf: 'flex-start'}]}>
                        <View style={tailwind `flex-row gap-3`}>
                            <Text style={tailwind`text-base max-w-[73%] flex-row`}>What activity would you like to eangage in?</Text>
                            <Text style={tailwind`text-sm self-end`}>7: 35 pm</Text>
                        </View>
                        
                        <SvgXml xml={curlLeft} width={20} height={20} style={tailwind`absolute bottom-0 left-[-.1rem] z-50`}/>
                    </View>
                
                </ScrollView>

                <View style={tailwind`absolute bottom-12 flex-row gap-2 border-[#E3E4E6] border-[1px] bg-white h-12 w-full items-center justify-between px-3`}>
                  <Pressable style={tailwind`border-[#E3E4E6] border-[1px] py-2 px-4 rounded-lg`}>
                    <Text style={tailwind`font-bold`}>I need more help</Text>
                  </Pressable>
                  <Pressable style={tailwind`border-[#E3E4E6] border-[1px] py-2 px-4 rounded-lg`}>
                    <Text style={tailwind`font-bold`}>I want to take another test</Text>
                  </Pressable>
                </View>
                <View style={tailwind`absolute bottom-0 flex-row gap-2 bg-white h-12 w-full items-center justify-between px-3`}>
                  <Image  source={require('../../assets/add.png')}/>
                  <TextInput
                    ref={messageRef}
                    placeholder='Message'
                    onChangeText={onChangeMessage}
                    style={tailwind`border-[#E3E4E6] border-2 bg-[#F0F1F3] w-3/4 rounded-2xl px-5`}
                  />
                  <Pressable onPress={() => {
                    message && data.push({msg: message, time: '7: 50 pm', reciever: true, id: data.length + 1})
                    messageRef.current.clear()
                  }}>
                    <Image source={require('../../assets/send.png')}/>
                  </Pressable>
                  
                </View>
                
            </ImageBackground>
        </View>
    </Layout>
    
    </>
  )
}

export default ChatDetailsAi