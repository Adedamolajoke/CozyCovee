import React, { useState } from 'react'
import { View, Text, VirtualizedList, Pressable, Image } from 'react-native'
import Header from '../components/Header'
import tailwind from 'twrnc'




const tagData = [
  {
    id: 1,
    title: 'Top Deals',
  },
  {
    id: 2,
    title: 'Travels',
  },
  {
    id: 3,
    title: 'Gym',
  },
  {
    id: 4,
    title: 'Events',
  },
  {
    id: 5,
    title: 'Work',
  },
]

const data = [
  {
    cost: 4000,
    content: '10% Discount on Trip to Botswana',
    slot: 4,
    usdc: 2000,
    id: 1
  },
  {
    cost: 4000,
    content: '10% Discount on Trip to Botswana',
    slot: 4,
    usdc: 2000,
    id: 2
  },
  {
    cost: 4000,
    content: '10% Discount on Trip to Botswana',
    slot: 4,
    usdc: 2000,
    id: 3
  },
  {
    cost: 4000,
    content: '10% Discount on Trip to Botswana',
    slot: 4,
    usdc: 2000,
    id: 4
  },
  {
    cost: 4000,
    content: '10% Discount on Trip to Botswana',
    slot: 4,
    usdc: 2000,
    id: 5
  },
  {
    cost: 4000,
    content: '10% Discount on Trip to Botswana',
    slot: 4,
    usdc: 2000,
    id: 6
  },
  {
    cost: 4000,
    content: '10% Discount on Trip to Botswana',
    slot: 4,
    usdc: 2000,
    id: 7
  },
]




const getItemCount = (data) => data.length


const MarketPlace = () => {
  const [selected, setSelected] = useState(1)

  const handlePress = (id) => {

    setSelected(id)
  }

  const items = ({item}) => {
    return (
      <Pressable onPress={() => handlePress(item.id)} key={item.id} style={[tailwind`w-22 mr-2 h-10 flex justify-center items-center rounded`, selected === item.id && { backgroundColor : 'rgba(231, 241, 255, 1)'} ]}>
        <Text style={[tailwind`text-base ${selected === item.id ? 'font-bold' : null}`, selected === item.id ? {color: 'rgba(35, 119, 241, 1)'} : {color: 'rgba(136, 136, 137, 1)'} ]}>{item.title}</Text>
      </Pressable>
    )
  }

  return (
    <View  style={tailwind`bg-white h-full`}>
        <View style={tailwind`mt-14 mb-3 `}>
          <Header title={`Marketplace`}/>
        </View>

        <View style={tailwind`mx-3`}>
          <VirtualizedList
                horizontal={true}
                data={tagData}
                showsHorizontalScrollIndicator={false} 
                renderItem={items}
                keyExtractor={item => item.id}
                getItemCount={(tagData) => tagData.length}
                getItem={(tagData, index) => tagData[index]}
                pagingEnabled
                snapToAlignment="center"
            />
        </View>

        <View style={tailwind`flex-1 mt-3`}>
          <VirtualizedList
                data={data}
                initialNumToRender={4}
                showsVerticalScrollIndicator={false} 
                renderItem={({item}) => (
                  <>
                  <View style={tailwind`flex flex-row mt-2 mx-5 mb-3 gap-3 w-[80%]`}>
                    <View style={tailwind`w-[40%] h-24`}>
                      <Image source={require('../assets/marketplace.png')} style={tailwind`h-full w-full`}/>
                    </View>
                    <View style={tailwind`w-[60%]`}>
                      <Text style={[tailwind`text-sm mt-1`, {color: 'rgba(151, 157, 167, 1)'}]}>AVI Travels.  <Text style={{color: 'rgba(7, 22, 45, 1)'}}>USDC 2000</Text> </Text>
                      <Text style={[{fontWeight: 500, color: 'rgba(7, 22, 45, 1)'}, tailwind`text-[1.09rem] mb-1`]}>{item.content}</Text>
                      <Text style={tailwind`text-base`}>Cost : <Text style={{color: 'rgba(35, 119, 241, 1)', fontWeight: 500}}>{item.cost}</Text></Text>
                    </View>
                  </View>
                  <View style={tailwind`border-b-[1.5px] border-slate-100`}></View>
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
  )
}

export default MarketPlace