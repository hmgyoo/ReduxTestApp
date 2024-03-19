import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButton from './ReactionButton'

const SinglePostPage = ({ route }) => {
  
  // params
  const { postId } = route.params;

  const navigation = useNavigation();

  // navigate to previous post
  const handleEditPost = () => {
    navigation.navigate('Edit Post', { postId: post.id})
  };

  const post = useSelector(state => state.posts.find(post => post.id === postId));

  if ( !post ) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Post not found!
        </Text>
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <PostAuthor userId={post.user}/>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.content}>{post.content}</Text>
        <TimeAgo timestamp={post.date}/>
        <ReactionButton post={post}/>
        <TouchableOpacity style={styles.button} onPress={handleEditPost}>
          <Text style={styles.buttonText}>
            Edit post
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SinglePostPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000'
  },
  postContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
    marginTop: 12,
  },
  content: {
    fontSize: 16,
    color: '#525152'
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})