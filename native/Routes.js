import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SvgXml } from "react-native-svg";
import { chartsIcon, marketIcon } from './assets/Icons';
import { questIcon } from './assets/Icons';
import { counsellorIcon } from './assets/Icons';
import Chats from './screens/Chats';
import Reward from './screens/Reward';
import MarketPlace from './screens/MarketPlace';
import { rewardIcon } from './assets/Icons';
import Quest from './screens/Quest';
// imports for onboarding 
import Welcome from './components/onboarding/Welcome';
import HealthRate from './components/onboarding/HealthRate';
import HealthGoals from './components/onboarding/Healthgoals';
import Hobby from './components/onboarding/Hobby';
import AllSet from './components/onboarding/AlllSet';
import PersonalQuest from './components/quests/PersonalQuest';
import FriendsQuest from './components/quests/FriendsQuest';
import ChatDetails from './components/chats/ChatDetails';
import ChatDetailsAi from './components/chats/ChatDetailsAi';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


// for main app screen
export const AppNavigator = () => {
    
    return (
        <Tab.Navigator
        screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#105FD2',
        tabBarInactiveTintColor: 'rgba(84 104 129 / .5)',
        tabBarStyle: { height: 58, paddingBottom: 5},
        tabBarLabelStyle: {fontWeight: '500', fontSize: 11}
        }}
        >
            <Tab.Screen name="Chats" component={ChatsNavigator} options={{ tabBarIcon: ({focused}) => (<SvgXml xml={focused ? chartsIcon : chartsIcon} width={20} height={20} />)}}/>
            <Tab.Screen name="Reward" component={Reward} options={{ tabBarIcon: ({focused}) => (<SvgXml xml={focused ? rewardIcon : rewardIcon} width={20} height={20} />)}} />
            <Tab.Screen name="Quest" component={QuestNavigator} options={{ tabBarIcon: ({focused}) => (<SvgXml xml={focused ? questIcon : questIcon} width={20} height={20} />)}}/>
            <Tab.Screen name="Marketplace" component={MarketPlace} options={{ tabBarIcon: ({focused}) => (<SvgXml xml={focused ? marketIcon : marketIcon} width={20} height={20} />)}}/>
        </Tab.Navigator>
    )
};

export const OnboardNavigator = () => (
    <Stack.Navigator 
        screenOptions={{header: ()=> null}}
    >
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="health" component={HealthRate} />
        <Stack.Screen name="goals" component={HealthGoals} />
        <Stack.Screen name="hobbys" component={Hobby} />
        <Stack.Screen name="allset" component={AllSet} />
    </Stack.Navigator>
)

export const QuestNavigator = () => (
    <Stack.Navigator 
        screenOptions={{header: ()=> null}}
        initialRouteName='Quests'
    >
        <Stack.Screen name="Quests" component={Quest} />
        <Stack.Screen name="Friends Quests" component={FriendsQuest} />
        <Stack.Screen name="Personal Quests" component={PersonalQuest} />
    </Stack.Navigator>
)

export const ChatsNavigator = () => (
    <Stack.Navigator 
        screenOptions={{header: ()=> null}}
        initialRouteName='chats'
    >
        <Stack.Screen name="chats" component={Chats} />
        <Stack.Screen name="chat-details" component={ChatDetails} />
        <Stack.Screen name="chat-ai" component={ChatDetailsAi} />
        
    </Stack.Navigator>
)