import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/posts-slice";

export const store = configureStore({
  reducer: {
    // @ts-ignore

    posts: postsSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
