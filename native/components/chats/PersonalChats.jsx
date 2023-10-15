import React, { useState } from 'react'
import { View,Text, Image, Pressable } from 'react-native'
import tailwind from 'twrnc'

const PersonalChats = () => {

    const chats = [
        {
            id:1,
            name: 'John',
            messsage: "Sure Thing, i'll get back to you",
            imgurl: require('../../assets/welcome.png'),
        },
        {
            id:2,
            name: 'My AI',
            messsage: "Sure Thing, i'll get back to you",
            imgurl: require('../../assets/icon.png'),
        },
        {
            id:3,
            name: 'Esesiri',
            messsage: "Sure Thing, i'll get back to you",
            imgurl: require('../../assets/alarm.png'),
        },
        {
            id:4,
            name: 'Esesiri',
            messsage: "Sure Thing, i'll get back to you",
            imgurl: require('../../assets/alarm.png'),
        },
    ]
    const [isPressed, setIsPressed] = useState(0)
    const gotoChat = () => {
        console.log('GotoChat');
    }
  return (
    <View style={tailwind`flex-col `}>
        <View style={tailwind`flex-col gap-3 `}>
           {
            chats.length < 1 ?(
                <Text>No Chats Yet</Text>
            ):(
                chats.map((chat)=>(
                    <Pressable 
                    onPress={gotoChat}
                    onPressIn={() => { 
                        setIsPressed(chat.id)
                        openInBrowser('Chat.html')
                    }} // Handle press-in event
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

export default PersonalChats
