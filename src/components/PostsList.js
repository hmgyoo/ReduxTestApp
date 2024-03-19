import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export const PostsList = () => {
  const posts = useSelector(state => state.posts);

  const renderedPosts = posts.map(post => (
    <View style={styles.postContainer} key={post.id}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content.substring(0, 100)}</Text>
    </View>
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
  },
  postContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },
});