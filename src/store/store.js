import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import postsReducer from "../features/posts/postSlice";
import userReducer from '../features/users/usersSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    posts: postsReducer,
    users: userReducer,
  },
})