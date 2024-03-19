import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postSlice'

// reactions emojis
const reactionsEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

const ReactionButton = ({ post }) => {

  // call dispatch to carry out event triggers
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionsEmoji).map(([name, emoji]) => {
    return (
      <TouchableOpacity key={name} style={styles.reactionButton} 
        onPress={() => dispatch(reactionAdded({postId: post.id, reaction: name}))
        }>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.count}>{post.reactions[name]}</Text>
      </TouchableOpacity>
    );
  });

  return <View style={styles.container}>{reactionButtons}</View>;
}

export default ReactionButton

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  emoji: {
    fontSize: 20,
  },
  count: {
    marginLeft: 5,
    fontSize: 16,
  },
})