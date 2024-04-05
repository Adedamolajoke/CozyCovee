import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatsScreen from '../screens/ChatsScreen';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={ChatsScreen} />
      <Tab.Screen name='Reward' component={ChatsScreen} />
      <Tab.Screen name='Quests' component={ChatsScreen} />
      <Tab.Screen name='Market' component={ChatsScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
