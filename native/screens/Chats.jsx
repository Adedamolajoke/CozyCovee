import React from 'react'
import { View, Text, Image, VirtualizedList } from 'react-native'
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
    no: 12
  }
]

// TODO: make this pressable

const Item = ({img, name, msg, time, no, tag, len, id}) => {
  return (
    <View style={tailwind`flex flex-row mt-5 mx-6 items-center gap-3 pb-3 ${id == len -1 ? '' : 'border-b-[1px] border-slate-200'}`}>
        <View>
          <Image source={img} style={tailwind`h-11 w-11`}/>
        </View>
        <View style={tailwind`w-[79%]`}>
          <View style={tailwind`flex flex-row justify-between items-center`}>
            <Text style={tailwind`font-bold text-base`}>{name}{ tag && <Text style={tailwind`text-base text-slate-700 font-normal`}> | {tag}</Text> } </Text>
            <Text style={tailwind` ${ no != null ? `text-blue-500` : `text-slate-800`}`}>{time}</Text>
          </View>
          <View style={tailwind`flex-row justify-between items-center`}>
            <Text style={tailwind`text-slate-500`}>{msg}</Text>
            { no && 
                <View style={tailwind`h-6 w-6 justify-center items-center rounded-full bg-blue-500 `}>
                <Text style={tailwind`text-white font-bold text-xs`}>{no}</Text>
                </View>
            }
          </View>
          
        </View>
      </View>
  )
}


const items = ({item}) => (
  <Item img={item.img} name={item.name} msg={item.msg} time={item.time} tag={item.tag} no={item.no} len={3}/>
)

const getItemCount = (data) => 3

const Chats = () => {

  return (
    <View style={tailwind`bg-white h-full`}>
      <View style={tailwind`mt-18 mb-6 `}>
          <Header title={`Chats`}/>
      </View>

      <View style={tailwind`flex flex-row  bg-slate-300 mx-6 p-1 rounded mb-2`}>
        <View style={tailwind`bg-white border-black rounded w-1/2 py-1`}>
          <Text style={tailwind`text-center text-base font-bold`}>Personal</Text>
        </View>
        <View style={tailwind` rounded w-1/2 py-1`}>
          <Text style={tailwind`text-center text-base text-slate-400`}>Counsellor</Text>
        </View>
      </View>

      <View>
        {/* {
          data.map( (d, idx) => (
            <ChatList img={d.img} name={d.name} msg={d.msg} time={d.time} tag={d.tag} no={d.no} key={idx} id={idx} len={3}/>
            
          ))
        } */}
          <VirtualizedList
              initialNumToRender={1}
              data={data}
              showsHorizontalScrollIndicator={false} 
              renderItem={(props) => items({...props})}
              keyExtractor={item => item.id}
              getItemCount={getItemCount}
              getItem={(data, index) => data[index]}
              pagingEnabled
              snapToAlignment="center"
          />
      </View>

    </View>
  )
}

export default Chats