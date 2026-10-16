import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonReduxRequest } from "../../../common/api";
import { appJson } from "../../../common/configurations";

export const getUserBlogs = createAsyncThunk(
  "blogs/getUserBlogs",
  async (searchParams, { rejectWithValue }) => {
    return commonReduxRequest(
      "get",
      `/public/blogs?${searchParams}`,
      null,
      appJson,
      rejectWithValue
    );
  }
);
