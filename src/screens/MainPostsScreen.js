import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PostsList } from '../components/PostsList'

const MainPostsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* render the posts lists */}
      <PostsList/>
    </View>
  )
}

export default MainPostsScreen

const styles = StyleSheet.create({})