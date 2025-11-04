import { configureStore } from '@reduxjs/toolkit';
import professionalsReducer from './slices/professionalsSlice';
import authReducer from './slices/auth.slice'; // ✅ add this

export const store = configureStore({
  reducer: {
    professionals: professionalsReducer,
    auth: authReducer, // ✅ add this
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {},
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
