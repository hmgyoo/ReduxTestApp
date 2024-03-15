import { Text, View } from 'react-native'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterScreen from './src/screens/CounterScreen';


// create an instance of the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Counter' component={CounterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
