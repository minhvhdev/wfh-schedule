import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dateFilterReducer from '../features/DateFilter/dateFilterSlice';

export const store = configureStore({
  reducer: {
    dateFilter: dateFilterReducer,
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
