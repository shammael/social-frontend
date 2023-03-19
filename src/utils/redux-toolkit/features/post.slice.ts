import IPost from '@/interfaces/post.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IPost[] = [];

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<IPost[]>) {
      return action.payload;
    },
    addPost(state, action: PayloadAction<IPost>) {
      return [...state, action.payload];
    },
    deletePost(state, action: PayloadAction<string>) {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export default postSlice;
