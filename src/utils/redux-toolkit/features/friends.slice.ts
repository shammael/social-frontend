import IFriend from '@/interfaces/friend.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IFriend[] = [];

const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {
    setFriends(state, action: PayloadAction<IFriend[]>) {
      return action.payload;
    },
    addFriend(state, action: PayloadAction<IFriend>) {
      return [...state, action.payload];
    },
    removeFriend(state, action: PayloadAction<string>) {
      return state.filter((friend) => friend.id !== action.payload);
    },
  },
});

export default friendSlice;
