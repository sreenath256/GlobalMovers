import { createSlice } from "@reduxjs/toolkit";
import { getUserBlogs } from "../../actions/user/userBlogActions";

const userBlogSlice = createSlice({
  name: "userBlogs",
  initialState: {
    loading: false,
    userBlogs: [],
    totalAvailableBlogs: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserBlogs.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.userBlogs = payload.blogs;
        state.totalAvailableBlogs = payload.totalAvailableBlogs;
      })
      .addCase(getUserBlogs.rejected, (state, { payload }) => {
        state.loading = false;
        state.userBlogs = null;
        state.error = payload;
      });
  },
});

export default userBlogSlice.reducer;
