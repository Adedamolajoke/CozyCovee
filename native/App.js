import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Register from './components/Register';
import { useEffect, useState } from 'react';
import CustomButton from './components/utils/Button';
import Welcome from './components/Welcome';
import HealthRate from './components/HealthRate';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HealthGoals from './components/Healthgoals';
import Hobby from './components/Hobby';
import AllSet from './components/AlllSet';
import Notification from './components/Notification';
import ChatLineups from './components/chats/ChatLineups';



export default function App() {
  const [isLogin, setisLogin] = useState(false)

  const Stack = createStackNavigator();


  return (
    <>
    {
      !isLogin ? (
        <View style={tw`p-4 py-10 flex items-center h-full`}> 
          <Register setisLogin={setisLogin} />
        </View>
      ):(
        <>
          <NavigationContainer>
          <Stack.Navigator 
          screenOptions={{header: ()=> null}}
          >
            <Stack.Screen name="welcome" component={Welcome} />
            <Stack.Screen name="health" component={HealthRate} />
            <Stack.Screen name="goals" component={HealthGoals} />
            <Stack.Screen name="hobbys" component={Hobby} />
            <Stack.Screen name="allset" component={AllSet} />
            <Stack.Screen name="notify" component={Notification} />
            <Stack.Screen name="chats" component={ChatLineups} />
          </Stack.Navigator>
        </NavigationContainer>
       </>
      )
    }
     </>
   
  );
}

