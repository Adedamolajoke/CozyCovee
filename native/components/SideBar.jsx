import React from 'react'
import { View, Text, Pressable, Image} from 'react-native'
import tailwind from 'twrnc'
import Icons from 'react-native-vector-icons/Ionicons' 
import Icon from 'react-native-vector-icons/Foundation'
import IconsM from 'react-native-vector-icons/MaterialCommunityIcons' 


const SideBar = ({setShowMenu}) => {
    const menu = [
        {
            id:1,
            name: 'Profile',
            path: 'profile',
            iconurl: 'person-sharp'
        },
        {
            id:2,
            name: 'Peer Support',
            path: 'megaphone',
            iconurl: 'megaphone'
        },
        {
            id:3,
            name: 'Resources',
            path: 'profile',
            iconurl: 'briefcase'
        },
        {
            id:4,
            name: 'Settings',
            path: 'profile',
            iconurl: 'settings'
        },
    ]
  return (
    <View style={tailwind`h-full relative`}>
        <View style={tailwind`flex-row mt-16 gap-5 items-center px-2`}>
        <Image source={require("../assets/welcome.png")} style={tailwind`h-18 w-18 rounded-full`} />
        <View>
            <Text style={tailwind`font-semibold mb-1`}>Crabby didi</Text>
            <Text style={tailwind`text-gray-500`}>xxxff...xx</Text>
        </View>
        </View>
        <View style={tailwind`flex-col gap-4 justify-center mx-auto mt-10`}>
            {
                menu.map((menuItem)=>(
                    <Pressable key={menuItem.id}>
                        <View style={tailwind`flex-row items-center gap-3`}>
                        <View>{
                            Icon ? (<Icons name={menuItem.iconurl} size={15} color="#027579" />) : 
                            (<IconsM name={menuItem.icons} size={30} color="#027579" />)   
                        }</View>
                            <Text style={tailwind`text-[#027579]`}>{menuItem.name}</Text>
                        </View>
                    </Pressable>
                ))
            }
        </View>
    </View>
  )
}

export default SideBar
