import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from "react-native-svg";
import { chartsIcon, marketIcon } from './assets/Icons';
import { questIcon } from './assets/Icons';
import { counsellorIcon } from './assets/Icons';
import Chats from './Screens/Chats';
import Reward from './Screens/Reward';
import Counsellor from './Screens/Counsellor';
import MarketPlace from './Screens/MarketPlace';
import { rewardIcon } from './assets/Icons';
import Quest from './Screens/Quest';




const Tab = createBottomTabNavigator();


const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: 'rgba(2 79 111 / 1)',
    tabBarInactiveTintColor: 'rgba(84 104 129 / .5)',
    tabBarStyle: { height: 58, paddingBottom: 5 },
    }}
  >
      <Tab.Screen name="Chats" component={Chats} options={{tabBarLabelStyle: {fontWeight: '500', fontSize: 11}, tabBarIcon: ({focused}) => (<SvgXml xml={focused ? chartsIcon : chartsIcon} width={20} height={20} />)}}/>
      <Tab.Screen name="Reward" component={Reward} options={{tabBarLabelStyle: {fontWeight: '500', fontSize: 11}, tabBarIcon: ({focused}) => (<SvgXml xml={focused ? rewardIcon : rewardIcon} width={20} height={20} />)}} />
      <Tab.Screen name="Quest" component={Quest} options={{tabBarLabelStyle: {fontWeight: '500', fontSize: 11}, tabBarIcon: ({focused}) => (<SvgXml xml={focused ? questIcon : questIcon} width={20} height={20} />)}}/>
      <Tab.Screen name="Counsellor" component={Counsellor} options={{tabBarLabelStyle: {fontWeight: '500', fontSize: 11}, tabBarIcon: ({focused}) => (<SvgXml xml={focused ? counsellorIcon : counsellorIcon} width={20} height={20} />)}} />
      <Tab.Screen name="Marketplace" component={MarketPlace} options={{tabBarLabelStyle: {fontWeight: '500', fontSize: 11}, tabBarIcon: ({focused}) => (<SvgXml xml={focused ? marketIcon : marketIcon} width={20} height={20} />)}}/>
  </Tab.Navigator>
);



export default function Main() {
     
  return (
    <>
        <AppNavigator />
      
    </>
  );
}

