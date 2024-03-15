import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice';

const CounterScreen = () => {

  // initilize the selector
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      {/* button style */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button
          title='Increment value'
          onPress={() => dispatch(increment())}
        />
        <Text style={{ marginHorizontal: 10 }}>{count}</Text>
        <Button 
          title='Decrement value'
          onPress={() => dispatch(decrement())}
        />
      </View>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})