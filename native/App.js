import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HealthGoals from './components/Healthgoals';
import Hobby from './components/Hobby';
import AllSet from './components/AlllSet';
import Onboard from './components/Onboard';
import Index from './Index';
import Main from './Main';



export default function App() {

  const Stack = createStackNavigator();

 
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{header: ()=> null}}
      >
        {/* <Stack.Screen name="main" component={Main} /> */}
        <Stack.Screen name="onboard" component={Onboard} />
        <Stack.Screen name="auth" component={Index} />
        <Stack.Screen name="main" component={Main} />
      </Stack.Navigator>
      </NavigationContainer>
  
     </>
   
  );
}

