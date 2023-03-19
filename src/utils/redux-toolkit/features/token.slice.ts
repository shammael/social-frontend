import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  token: string | null;
} = {
  token: null,
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      return { ...state, token: action.payload };
    },
  },
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
