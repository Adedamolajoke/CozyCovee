import React, { useEffect, useRef, useState } from 'react'
import { ImageBackground, View, Text,Pressable, FlatList, TextInput, Image } from 'react-native'
import tailwind from 'twrnc'
import { Layout } from '../../screens/Layout'
import Header from '../quests/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SvgXml } from 'react-native-svg'
import { curlLeft, curlRight } from '../../assets/Icons'

const data = [
  {
    msg: 'Hello',
    time: '7: 20pm',
    reciever: true,
    id: 1 
  },
  {
    msg: 'Hello, Adedamolajoke',
    time: '7: 45pm',
    reciever: false,
    id: 2 
  },
  {
    msg: 'Hey, whats up',
    time: '7: 46pm',
    reciever: true,
    id: 3 
  },
  {
    msg: 'Hello',
    time: '7: 20pm',
    reciever: true,
    id: 4 
  },
  {
    msg: 'Hello, Adedamolajoke',
    time: '7: 45pm',
    reciever: false,
    id: 5 
  },
  {
    msg: 'Hey, whats up',
    time: '7: 46pm',
    reciever: true,
    id: 6 
  },
  {
    msg: 'Hello',
    time: '7: 20pm',
    reciever: true,
    id: 7 
  },
  {
    msg: 'Hello, Adedamolajoke',
    time: '7: 45pm',
    reciever: false,
    id: 8 
  },
  {
    msg: 'Hey, whats up',
    time: '7: 46pm',
    reciever: true,
    id: 9 
  },
]

console.log(data.length)

const ChatDetails = () => {
    const route = useRoute()
    const messageRef = useRef()
    const [message, onChangeMessage] = useState(null)
    const navigation = useNavigation()
    let routeName = navigation.getState().routes[navigation.getState().index].name;
    
    useEffect(() => {
      if (routeName === 'chat-details'){
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
                {/* for counsellor */}
                {/* <View style={tailwind`border-[#E3E4E6] border-[1px] bg-white`}>
                  <View style={tailwind` flex-row gap-2 my-2 w-full items-center justify-between px-3`}>
                    <Text style={tailwind`font-semibold text-[#646D7B]`}>Section Schedule</Text>
                    <Pressable style={tailwind`border-[#E3E4E6] border-[1px] bg-[#F0F1F3] py-2 px-4 rounded-lg`}>
                      <Text style={tailwind`font-bold`}>Mar 24,9:00 pm</Text>
                    </Pressable>
                  </View>
                  <Pressable style={tailwind`bg-[#2377F1] mx-3 mb-2 py-2 px-4 rounded-lg items-center`}>
                      <Text style={tailwind`font-bold text-white`}>Join</Text>
                  </Pressable>
                </View> */}

                <View style={tailwind`flex-1 mt-3 mx-3`}>
                  <FlatList 
                    reinitialNumToRender={3}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                      if (item.reciever) {
                        return (
                          <View key={item.id} style={[tailwind`relative bg-[#2377F1] self-end p-2 rounded-3xl mt-2 p-4 ${item.id === data.length ? 'mb-4':''}`, {maxWidth: '75%'}]}>
                            <View style={tailwind `flex-row gap-3`}>
                                <Text style={tailwind`text-base max-w-[73%] text-white`}>{item.msg}</Text>
                                <Text style={tailwind`text-sm text-white self-end`}>{item.time}</Text>
                            </View>
                            
                            <SvgXml xml={curlRight} width={20} height={20} style={tailwind`absolute bottom-0 right-[-.1rem] z-50`}/>
                          </View>
                        )
                      } else {
                        return (
                          <View style={[tailwind` relative bg-white p-2 rounded-3xl mt-2 p-4 ${item.id === data.length ? 'mb-4':''}`, {maxWidth: '75%', alignSelf: 'flex-start'}]}>
                            <View style={tailwind `flex-row gap-3`}>
                                <Text style={tailwind`text-base max-w-[73%] flex-row`}>{item.msg}</Text>
                                <Text style={tailwind`text-sm self-end`}>{item.time}</Text>
                            </View>
                            
                            <SvgXml xml={curlLeft} width={20} height={20} style={tailwind`absolute bottom-0 left-[-.1rem] z-50`}/>
                          </View>
                        )
                      }
                      
                    }}
                    keyExtractor={item => item.id}
                    style={tailwind`mb-12`}
                  />
                </View>
                {/* for -ai */}
                {/* <View style={tailwind`absolute bottom-12 flex-row gap-2 border-[#E3E4E6] border-[1px] bg-white h-12 w-full items-center justify-between px-3`}>
                  <Pressable style={tailwind`border-[#E3E4E6] border-[1px] py-2 px-4 rounded-lg`}>
                    <Text style={tailwind`font-bold`}>I need more help</Text>
                  </Pressable>
                  <Pressable style={tailwind`border-[#E3E4E6] border-[1px] py-2 px-4 rounded-lg`}>
                    <Text style={tailwind`font-bold`}>I want to take another test</Text>
                  </Pressable>
                </View> */}
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

export default ChatDetails