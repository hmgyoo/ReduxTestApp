import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const now = new Date();

const initialState = [
  { id: '1', title: 'First post!', content: 'Hello!', date: new Date(now.getTime() - 10 * 60000).toISOString()},
  { id: '2', title: 'Second post', content: 'More texts!', date: new Date(now.getTime() - 5 * 60000).toISOString()},
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // postAdded(state, action) {
    //   state.push(action.payload)
    // },
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId
          }
        }
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
  }
});

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer