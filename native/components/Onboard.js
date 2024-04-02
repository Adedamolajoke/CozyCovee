import React, { useState, useRef, useEffect } from 'react'
import { Button, VirtualizedList, Image, Dimensions } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { View,Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import tailwind from 'twrnc'
import CustomButton from './utils/Button'
import tw from 'tailwind-react-native-classnames'
import Paginator from './utils/Paginator'


const data = [
  {
    id: 1,
    title: 'Welcome to mental wellness buddy',
    content: 'Discover a safe & supportive space for your mental wellness journey.',
    img: require(`../assets/auth.png`)
  },
  {
    id: 2,
    title: 'You get to express yourself anonymously',
    content: 'Create a pseudonym & express yourself authentically without revealing personal details.',
    img: require(`../assets/auth2.png`)
  },
  {
    id: 3,
    title: 'Start a conservation with our AI chatbot & Counsellors',
    content: 'Engage in confidental chat sessions with our AI chatbot & chosen counsellor to receive support.',
    img: require(`../assets/auth3.png`)
  }
]

const {width, height} = Dimensions.get('screen') 


const Item = ({title, content, img}) => (
  <View style={[tailwind`mt-5`, ]}>
      <View style={[tailwind`mb-6`, style.imgCon]}>
        <Image style={tailwind`w-[100%]`} source={img} width={50}/>
        
      </View>
      <View style={tailwind`max-w-[80]`}>
      <Text style={tailwind`font-bold text-2xl text-center mb-2`}>{title}</Text>
      <Text style={tailwind`font-medium text-[16px] text-center text-gray-500 leading-[22px]`}>{content}</Text>
      </View>
      
      
  </View>
);

const items = ({item}) => (
  <Item title={item.title} content={item.content} img={item.img}/>
)

const getItemCount = (data) => 3

const Onboard = ({navigation}) => {
    const [text, setText] = useState('')
    const [id, setId] = useState(0)
    let newIndex
    const listRef = useRef(null)
    useEffect(() => {
      var i = setInterval( () => {
        newIndex = id + 1
        // console.log(newIndex, id)
        newIndex <= 2 ? (setId(newIndex)) : setId(0)  
        if (id < 2) {
          listRef.current.scrollToIndex({index: newIndex})
        } else {
          listRef.current.scrollToIndex({index: 0})
        }
  
      }, 10000)
      setTimeout( function() {clearInterval(i)}, 10050)
    }, [id])
    

    const handlePress = () => {
      navigation.navigate('auth')
       
  }
  return (
    <View style={style.container}>
        <View style={[tailwind``, style.imgCon]}>
          <VirtualizedList
            horizontal={true}
            ref={listRef}
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
        
        <View style={tailwind``}>
            <Paginator data={data} index={id} />
            <CustomButton title="Create An Account" onPress={handlePress} />
            <CustomButton title="Login" onPress={handlePress} />

        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
      fontWeight: 'bold',
      fontVariant: 'italic', 
      fontSize: 20,
      gap: 20,
      marginHorizontal: 20,
      marginTop: 35
      // backgroundColor: 'red'
    },
    input:{
        borderWidth:1,
        borderColor:"grey",
        borderRadius: 5,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
    },
    modal : {
      flex: 1,
      backgroundColor: 'yellow'
    },
    imgCon : {
      width: width - 40,
      // marginHorizontal: 12
    }
  })



export default Onboard
