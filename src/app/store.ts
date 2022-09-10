import { newsReducer } from './components/reducer/newsreducer';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { userReducer } from './components/reducer/userreducer';

// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    news: newsReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
