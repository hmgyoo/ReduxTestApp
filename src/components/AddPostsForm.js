import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from '../features/posts/postSlice'

const AddPostsForm = () => {

  // use state variables
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  // create dispatch const
  const dispatch = useDispatch()
  
  // event triggers when text is updated
  const onTitleChange = text => setTitle(text);
  const onContentChange = text => setContent(text)

  // function for saving post
  const onSavePost = () => {

    // print into the console
    console.log('Post title:', title);
    console.log('Post content:', content);

    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      )

      // empty the text input once button is clicked 
      setTitle('')
      setContent('')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add a New Post</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Post Title:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onTitleChange}
          value={title}
          placeholder="Enter post title"
        />
        <Text style={styles.label}>Content:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          onChangeText={onContentChange}
          value={content}
          multiline
          placeholder="Enter post content"
        />
        <TouchableOpacity style={styles.button} onPress={onSavePost}>
          <Text style={styles.buttonText}>Save Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddPostsForm

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
  form: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#000'
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