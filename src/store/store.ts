import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import companyFormReducer from '../features/companyForm/companyFormSlice';

export const store = configureStore({
  reducer: {
    companyForm: companyFormReducer,
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
