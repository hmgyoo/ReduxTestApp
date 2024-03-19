import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const PostAuthor = ({ userId }) => {
  const author = useSelector(state =>
    state.users.find(user => user.id === userId)
  );

  return (
    <View>
      <Text>by {author ? author.name : 'Unknown author'}</Text>
    </View>
  );
};

export default PostAuthor;
