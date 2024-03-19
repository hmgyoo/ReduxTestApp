import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postSlice'
import {Picker} from '@react-native-picker/picker'

const AddPostsForm = () => {

  // use state variables
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [selectedUserId, setSelectedUserId] = useState('');

  // create dispatch const
  const dispatch = useDispatch()

  const users = useSelector(state => state.users)
  
  // event triggers when text is updated
  const onTitleChange = text => setTitle(text);
  const onContentChange = text => setContent(text);
  const onAuthorChange = itemValue => setSelectedUserId(itemValue);

  // function for saving post
  const onSavePost = () => {

    // print into the console
    console.log('Post title:', title);
    console.log('Post content:', content);

    if (title && content) {
      dispatch(
        postAdded(title, content, selectedUserId))

      // empty the text input once button is clicked 
      setTitle('')
      setContent('')
      setSelectedUserId('')
    }
  }

  // user logic
  const canSave = Boolean(title) && Boolean(content) && Boolean(selectedUserId)

  const usersOptions = users.map(user => (
    <Picker.Item key={user.id} label={user.name} value={user.id} />
  ));

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
        <Text style={styles.label}>Author</Text>
        <Picker
          selectedValue={selectedUserId}
          onValueChange={onAuthorChange}
        >
          <Picker.Item label="" value="" />
          {usersOptions}
        </Picker>
        <TouchableOpacity style={styles.button} onPress={onSavePost} disabled={!canSave}>
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