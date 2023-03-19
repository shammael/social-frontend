import { User } from '@/graphql/generated/types';
import IUser from '@/interfaces/user.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  user: Partial<User> | null;
} = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      return { ...state, user: action.payload };
    },
    setLogout(state) {
      null;
    },
  },
});

export const { setLogout, setUser } = userSlice.actions;

export default userSlice.reducer;
