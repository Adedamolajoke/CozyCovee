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
import Welcome from './components/Welcome';
import HealthRate from './components/HealthRate';
import HealthGoals from './components/Healthgoals';
import Hobby from './components/Hobby';
import AllSet from './components/AlllSet';
import PersonalQuest from './components/quests/PersonalQuest';
import FriendsQuest from './components/quests/FriendsQuest';
import { getFocusedRouteNameFromRoute, useRoute } from '@react-navigation/native';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


// for main app screen
export const AppNavigator = () => {
    
    return (
        <Tab.Navigator
        screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'rgba(2 79 111 / 1)',
        tabBarInactiveTintColor: 'rgba(84 104 129 / .5)',
        tabBarStyle: { height: 58, paddingBottom: 5},
        }}
        >
            <Tab.Screen name="Chats" component={Chats} options={{tabBarLabelStyle: {fontWeight: '500', fontSize: 11}, tabBarIcon: ({focused}) => (<SvgXml xml={focused ? chartsIcon : chartsIcon} width={20} height={20} />)}}/>
            <Tab.Screen name="Reward" component={Reward} options={{tabBarLabelStyle: {fontWeight: '500', fontSize: 11}, tabBarIcon: ({focused}) => (<SvgXml xml={focused ? rewardIcon : rewardIcon} width={20} height={20} />)}} />
            <Tab.Screen name="Quest" component={QuestNavigator} options={{tabBarLabelStyle: {fontWeight: '500', fontSize: 11}, tabBarIcon: ({focused}) => (<SvgXml xml={focused ? questIcon : questIcon} width={20} height={20} />)}}/>
            <Tab.Screen name="Marketplace" component={MarketPlace} options={{tabBarLabelStyle: {fontWeight: '500', fontSize: 11}, tabBarIcon: ({focused}) => (<SvgXml xml={focused ? marketIcon : marketIcon} width={20} height={20} />)}}/>
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

// const routeName = getFocusedRouteNameFromRoute(route) ?? 'Auth';

// useEffect(() => {
//   navigation.setOptions({
//     tabBarVisible: ['Auth', 'Settings'].includes(routeName),
//   });
// }, [navigation, routeName]);