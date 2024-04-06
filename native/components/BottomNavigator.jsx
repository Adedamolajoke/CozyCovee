import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatsScreen from '../screens/ChatsScreen';
import {
  ChatBubbleClear,
  ChatBubbles,
  FilledStar,
  PeopleFilled,
  PeopleIcon,
  StarIcon,
  StoreFilled,
  StoreFront,
} from './utils/images';
import QuestScreen from '../screens/QuestScreen';
import RewardScreen from '../screens/RewardScreen';
import MarketPlace from '../screens/MarketPlace';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Chats'
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={ChatBubbles} />
            ) : (
              <Image source={ChatBubbleClear} />
            ),
        }}
      />
      <Tab.Screen
        name='Reward'
        component={RewardScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={FilledStar} />
            ) : (
              <Image source={StarIcon} />
            ),
        }}
      />
      <Tab.Screen
        name='Quests'
        component={QuestScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={PeopleFilled} />
            ) : (
              <Image source={PeopleIcon} />
            ),
        }}
      />
      <Tab.Screen
        name='Market'
        component={MarketPlace}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={StoreFilled} />
            ) : (
              <Image source={StoreFront} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
