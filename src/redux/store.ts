import { configureStore } from '@reduxjs/toolkit';

import selectionReducer from './reducers/selection';

export const store = configureStore({
  reducer: {
    selection: selectionReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type
export type AppDispatch = typeof store.dispatch;
