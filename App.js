import { Text, View } from 'react-native'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPostsScreen from './src/screens/MainPostsScreen';


// create an instance of the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='For you page' component={MainPostsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
