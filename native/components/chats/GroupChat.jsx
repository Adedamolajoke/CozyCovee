import React, { useState } from 'react'
import { View,Text, Image, Pressable } from 'react-native'
import tailwind from 'twrnc'

const GroupChats = () => {
    const chats = [
        {
            id:1,
            name: 'Health Masseurs',
            messsage: "100,000 Members",
            imgurl: require('../../assets/welcome.png'),
        },
        {
            id:2,
            name: 'Yoga Geng',
            messsage: "100,000 Members",
            imgurl: require('../../assets/icon.png'),
        },
        {
            id:3,
            name: 'Health Masseurs',
            messsage: "900,000 Members",
            imgurl: require('../../assets/alarm.png'),
        },
        {
            id:4,
            name: 'Love. Real or Not?',
            messsage: "800,000 Members",
            imgurl: require('../../assets/alarm.png'),
        },
        {
            id:5,
            name: 'Health Masseurs',
            messsage: "900,000 Members",
            imgurl: require('../../assets/alarm.png'),
        },
        {
            id:6,
            name: 'Health Masseurs',
            messsage: "900,000 Members",
            imgurl: require('../../assets/alarm.png'),
        },
        {
            id:7,
            name: 'Health Masseurs',
            messsage: "900,000 Members",
            imgurl: require('../../assets/alarm.png'),
        },
        {
            id:8,
            name: 'Health Masseurs',
            messsage: "900,000 Members",
            imgurl: require('../../assets/alarm.png'),
        },
        {
            id:9,
            name: 'Health Masseurs',
            messsage: "900,000 Members",
            imgurl: require('../../assets/alarm.png'),
        },
        {
            id:10,
            name: 'Health Masseurs',
            messsage: "900,000 Members",
            imgurl: require('../../assets/alarm.png'),
        },
        {
            id:11,
            name: 'Health Masseurs',
            messsage: "900,000 Members",
            imgurl: require('../../assets/alarm.png'),
        },
    ]
    const [isPressed, setIsPressed] = useState(0)
    const gotoChat = () => {
        console.log('GotoChat');
    }
  return (
    <View >
        <View style={tailwind`flex-col gap-3 `}>
           {
            chats.length < 1 ?(
                <Text>No Chats Yet</Text>
            ):(
                chats.map((chat)=>(
                    <Pressable 
                    onPress={gotoChat}
                    onPressIn={() => setIsPressed(chat.id)} // Handle press-in event
                    onPressOut={() => setIsPressed(0)} 
                    key={chat.id}  style={tailwind`flex-row ${isPressed === chat.id && "bg-[#CCE3E4]"} justify-between gap-3 border-b-[0.5px] py-2 px-2 border-gray-300 items-center gap-3`}>
                        <View style={tailwind`flex-row items-center gap-3`}>
                            <View><Image source={chat.imgurl} style={tailwind`h-8 w-8 rounded-full`} /></View>
                            <View>
                                <Text style={tailwind`font-semibold`}>{chat.name}</Text>
                                <Text style={tailwind`font-medium text-gray-500 text-[12px]`}>{chat.messsage}</Text>
                            </View>
                        </View>
                        <View><Text>Now</Text></View>
                    </Pressable>
                ))
            )
           }
        </View>
    </View>
  )
}

export default GroupChats
