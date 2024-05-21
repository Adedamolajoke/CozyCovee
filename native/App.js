import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HealthGoals from './components/Healthgoals';
import Hobby from './components/Hobby';
import AllSet from './components/AlllSet';
import Onboard from './components/Onboard';
import { AppNavigator, OnboardNavigator } from './Routes';



export default function App() {

  const Stack = createStackNavigator();

 
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{header: ()=> null}}
      >
        <Stack.Screen name="main" component={AppNavigator} />
        <Stack.Screen name="onboard" component={Onboard} />
        <Stack.Screen name="auth" component={OnboardNavigator} />
        {/* */}
      </Stack.Navigator>
      </NavigationContainer>
  
     </>
   
  );
}

