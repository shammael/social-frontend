import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TMode = 'light' | 'dark';

const initialState: Record<'mode', TMode> = {
  mode: 'light',
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMode(state) {
      return state.mode === 'light' ? { mode: 'dark' } : { mode: 'light' };
    },
  },
});

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;
