import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postUpdated } from './postSlice'
import { useNavigation } from '@react-navigation/native'

const EditPostForm = ({ route }) => {

  // get post id
  const { postId } = route.params;

  // initialize useSelector
  const post = useSelector(
    state => state.posts.find(post => post.id === postId)
  );

  // create variables to be modified
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  // initialize dispatch and navigation
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // listeners for when texts are updated
  const onTitleChange = text => setTitle(text);
  const onContentChange = text => setContent(text);

  const onSavePost = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content}));
      navigation.navigate('Post Info', { postId: postId});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Post</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Post Title:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onTitleChange}
          value={title}
          placeholder="What's on your mind?"
        />
        <Text style={styles.label}>Content:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          onChangeText={onContentChange}
          value={content}
          multiline
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onSavePost}>
        <Text style={styles.buttonText}>Save Post</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EditPostForm

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
  form: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  textArea: {
    height: 120,
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})