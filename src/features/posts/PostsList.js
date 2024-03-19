import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export const PostsList = () => {

  // target the post in the slice
  const posts = useSelector(state => state.posts);

  // initialize the navigation
  const navigation = useNavigation();

  const renderedPosts = posts.map(post => (
    <TouchableOpacity 
        style={styles.postContainer} 
        key={post.id}
        onPress={() => navigation.navigate('Post Info', {postId: post.id})}
    >
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content.substring(0, 100)}</Text>
      <Text style={styles.button}>View Post</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Posts</Text>
      {renderedPosts}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000'
  },
  postContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    padding: 16
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  content: {
    fontSize: 16,
    color: '#525152'
  },
  button: {
    color: 'blue',
  },
});