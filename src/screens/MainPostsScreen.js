import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PostsList } from '../components/PostsList'
import AddPostsForm from '../components/AddPostsForm'

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