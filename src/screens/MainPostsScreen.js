import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PostsList } from '../features/posts/PostsList'
import AddPostsForm from '../features/posts/AddPostsForm'

const MainPostsScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      {/* render the posts lists */}
      <AddPostsForm/>
      <PostsList/>
    </ScrollView>
  )
}

export default MainPostsScreen

const styles = StyleSheet.create({})