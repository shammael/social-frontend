import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user.slice';
import modeReducer from './features/mode.slice';
import tokenReducer from './features/token.slice';
import friendSlice from './features/friends.slice';
import postSlice from './features/post.slice';

const reducers = combineReducers({
  user: userReducer,
  mode: modeReducer,
  token: tokenReducer,
  friend: friendSlice.reducer,
  post: postSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
