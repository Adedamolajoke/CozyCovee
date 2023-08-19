import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native'
import tailwind from 'twrnc'
import PersonalChats from './PersonalChats'
import GroupChats from './GroupChat'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/EvilIcons' 
import SideBar from '../SideBar'

const ChatLineups = () => {
    const chatButton = [
        {
            id:1,
            title: 'Personal Chat',
        },
        {
            id:2,
            title: 'Group Chat',
        },
    ]
    const [chatType, setChatType] = useState(1)
    const [showMenu, setShowMenu] = useState(false)
    const choosePersonal = (n) => {
        setChatType(n)
    }
    const showMenuBar = () => {
        setShowMenu(!showMenu)
    }
  return (
    <Pressable style={tailwind`py-16 px-2 flex-col gap-7`} onPress={()=>setShowMenu(false)}>
        <View  style={tailwind`flex-row justify-between `}>
        <Pressable onPress={showMenuBar}><Icon name="menu-outline" size={30} color="black" /></Pressable>
            <Text style={tailwind`font-bold`}>Chats</Text>
            <View><Icon name="notifications-outline" size={30} color="black" /></View>
        </View>
        <View style={tailwind`relative`}>
            <View style={tailwind`absolute top-[10%] z-30`}><Icons name="search" size={30} color="black" /></View>
            <TextInput style={tailwind`bg-[#CCE3E4] h-10 rounded-sm px-5 pl-10 font-semibold`} placeholder='Search' />
        </View>
        <View style={tailwind`bg-[#CCE3E4] h-10 rounded-sm shadow-sm flex-row justify-between  items-center px-5`}>
          {
            chatButton.map((button)=>(
                <Pressable key={button.id} onPress={()=>choosePersonal(button.id)} style={tailwind`${chatType === button.id ? "bg-white shadow-md"  : ""}  h-8  flex items-center justify-center w-36 rounded-md transition-all `}><Text style={tailwind`${chatType === button.id ? "text-[#027579]":"text-gray-500"} font-semibold`}>{button.title}</Text></Pressable>
            ))
          }
        </View>
        <View>
            {
                chatType === 1 ? (
                    <PersonalChats />
                ):(
                    <GroupChats />
                )
            }
        </View>
        <ScrollView style={[tailwind`bg-white absolute top-16 bottom-0 rounded-r-md h-[680px] z-50`, showMenu ?tailwind`w-[230px]` : tailwind`w-0`]} horizontal={false} contentContainerStyle={tailwind`px-2 py-6`} showsHorizontalScrollIndicator={false}>
                <SideBar setShowMenu={setShowMenu} />
        </ScrollView>
   </Pressable>
  )
}

export default ChatLineups
