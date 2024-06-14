import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, getFocusedRouteNameFromRoute, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboard from './components/onboarding/Onboard';
import { AppNavigator, OnboardNavigator } from './Routes';


{/* TODO: Make onboard responsive */}

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
        
      </Stack.Navigator>
      </NavigationContainer>
  
     </>
   
  );
}

