import React, {useState} from 'react'
import { View, Text, Image, VirtualizedList, Pressable } from 'react-native'
import Header from '../components/onboarding/Header'
import tailwind from 'twrnc'
import { Layout } from './Layout'
import ConnectWallet from '../components/wallet-onboarding/ConnectWallet'

const data = [
  {
    img: require('../assets/ai.png'),
    name: 'My AI',
    msg: "Sure thing, i'll have a look today",
    time: '2:45 PM',
    id: 1
  },
  {
    img: require('../assets/c1.png'),
    name: 'Dumzy',
    msg: "There's a meeting soon",
    time: '1:15 PM',
    tag: 'Massage Expert',
    id: 2
  },
  {
    img: require('../assets/c2.png'),
    name: 'Revenant',
    msg: 'Did you start the raid?',
    time: '1:45 PM',
    tag: 'Art curators',
    no: 2,
    id: 3
  }
]

const getItemCount = (data) => 3

const Chats = ({navigation}) => {
  const [isCounsellor, setIsCounsellor] = useState(true)

  return (
    <Layout>
      <View style={tailwind`h-full bg-white`}>
        <Header title={`Chats`}/>
        <View style={tailwind`flex flex-row  bg-[rgba(60,60,67,0.08)] mx-6 p-[2px] rounded mb-2`}>
          <Pressable onPress={() => setIsCounsellor(false)} style={tailwind`${ !isCounsellor ? 'bg-white border-black rounded w-1/2 py-1' : 'rounded w-1/2 py-1'}` }>
            <Text style={tailwind`text-center text-base ${!isCounsellor ? 'font-bold text-[rgba(7,22,45,1)]' : 'text-[rgba(82,92,108,1)]'}`}>Personal</Text>
          </Pressable>
          <Pressable onPress={() => setIsCounsellor(true)} style={tailwind` ${isCounsellor ? 'bg-white border-black rounded w-1/2 py-1' : 'rounded w-1/2 py-1'}`}>
            <Text style={tailwind`${isCounsellor ? 'font-bold text-[rgba(7,22,45,1)]' : 'text-[rgba(82,92,108,1)]'} text-center text-base`}>Counsellor</Text>
          </Pressable>
        </View>
        {
          isCounsellor ? (
            <ConnectWallet />
          ) : (
           
            <View>
                <VirtualizedList
                    initialNumToRender={3}
                    data={data}
                    showsHorizontalScrollIndicator={false} 
                    renderItem={({item}) => (
                      <Pressable 
                        key={item.id} 
                        onPress={ () =>  item.id === 1 ? navigation.navigate('chat-ai', {name: item.name, img: item.img}) : navigation.navigate('chat-details', {name: item.name, img: item.img}) } 
                        style={tailwind`flex flex-row mt-5 mx-6 items-center gap-3 pb-3 ${item.id == data.len -1 ? '' : 'border-b-[1px] border-slate-200'}`}
                      >
                        <View>
                          <Image source={item.img} style={tailwind`h-11 w-11`}/>
                        </View>
                        <View style={tailwind`w-[79%]`}>
                          <View style={tailwind`flex flex-row justify-between items-center`}>
                            <Text style={tailwind`font-bold text-base`}>{item.name}{ item.tag && <Text style={tailwind`text-base text-slate-700 font-normal`}> | {item.tag}</Text> } </Text>
                            <Text style={tailwind` ${ item.no != null ? `text-blue-500` : `text-slate-800`}`}>{item.time}</Text>
                          </View>
                          <View style={tailwind`flex-row justify-between items-center`}>
                            <Text style={tailwind`text-slate-500`}>{item.msg}</Text>
                            { item.no && 
                                <View style={tailwind`h-6 w-6 justify-center items-center rounded-full bg-blue-500 `}>
                                <Text style={tailwind`text-white font-bold text-xs`}>{item.no}</Text>
                                </View>
                            }
                          </View>
                          
                        </View>
                      </Pressable>
                    ) }
                    keyExtractor={item => item.id}
                    getItemCount={getItemCount}
                    getItem={(data, index) => data[index]}
                    pagingEnabled
                    snapToAlignment="center"
                />
            </View>
          )
        }
        

      </View>
    </Layout>
    
  )
}

export default Chats