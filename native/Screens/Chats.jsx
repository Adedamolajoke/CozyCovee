import React from 'react'
import { View, Text, Image } from 'react-native'
import Header from '../components/Header'
import tailwind from 'twrnc'
import ChatList from '../components/chats/ChatList.JSX'

const data = [
  {
    img: require('../assets/ai.png'),
    name: 'My AI',
    msg: "Sure thing, i'll have a look today",
    time: '2:45 PM'
  },
  {
    img: require('../assets/c1.png'),
    name: 'Dumzy',
    msg: "There's a meeting soon",
    time: '1:15 PM',
    tag: 'Massage Expert'
  },
  {
    img: require('../assets/c2.png'),
    name: 'Revenant',
    msg: 'Did you start the raid?',
    time: '1:45 PM',
    tag: 'Art curators',
    no: 2
  }
]

const Chats = () => {

const data = [
  {
    img: require('../assets/ai.png'),
    name: 'My AI',
    msg: "Sure thing, i'll have a look today",
    time: '2:45 PM'
  },
  {
    img: require('../assets/c1.png'),
    name: 'Dumzy',
    msg: "There's a meeting soon",
    time: '1:15 PM',
    tag: 'Massage Expert'
  },
  {
    img: require('../assets/c2.png'),
    name: 'Revenant',
    msg: 'Did you start the raid?',
    time: '1:45 PM',
    tag: 'Art curators',
    no: '2'
  }
]
  return (
    <View style={tailwind`bg-white h-full`}>
      <View style={tailwind`mt-18 mb-6 `}>
          <Header title={`Chats`}/>
      </View>

      <View style={tailwind`flex flex-row  bg-slate-300 mx-6 p-1 rounded mb-2`}>
        <View style={tailwind`bg-white border-1 border-black rounded w-1/2 py-1`}>
          <Text style={tailwind`text-center text-base font-bold`}>Personal</Text>
        </View>
        <View style={tailwind` rounded w-1/2 py-1`}>
          <Text style={tailwind`text-center text-base text-slate-400`}>Counsellor</Text>
        </View>
      </View>

      <View>
        {
          data.map( (d, idx) => (
            <ChatList img={d.img} name={d.name} msg={d.msg} time={d.time} tag={d.tag} no={d.no} key={idx} id={idx} len={3}/>
            
          ))
        }
      </View>

    </View>
  )
}

export default Chats