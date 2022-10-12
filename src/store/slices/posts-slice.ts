import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Posts {
  [key: string]: any;
}
const initialState: Posts = { posts: [] };
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(
      state,
      action: PayloadAction<{
        posts: any;
      }>
    ) {
      const { payload } = action;
      state.posts = payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
