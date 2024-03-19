import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

// reactions emojis
const reactionsEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

const ReactionButton = ({ post }) => {
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <TouchableOpacity key={name} style={styles.reactionButton}>
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