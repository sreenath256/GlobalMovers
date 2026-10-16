import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonReduxRequest } from "../../../common/api";
import { appJson, multiForm } from "../../../common/configurations";

// Function to create new blog
export const createBlog = createAsyncThunk(
  "blogs/createBlog",
  async (formData, { rejectWithValue }) => {
    return commonReduxRequest(
      "post",
      `/admin/blog`,
      formData,
      multiForm,
      rejectWithValue
    );
  }
);

// Function to get the blog details
export const getBlogs = createAsyncThunk(
  "blogs/getBlogs",
  async (queries, { rejectWithValue }) => {
    return commonReduxRequest(
      "get",
      `/admin/blogs${queries ? `?${queries}` : ''}`,
      null,
      appJson,
      rejectWithValue
    );
  }
);



export const updateBlog = createAsyncThunk(
  "blogs/updateBlog",
  async ({ id, formData }, { rejectWithValue }) => {
    return commonReduxRequest(
      "patch",
      `/admin/blog/${id}`,
      formData,
      multiForm,
      rejectWithValue
    );
  }
);

// Function to delete a blog
export const deleteBlog = createAsyncThunk(
  "blogs/deleteBlog",
  async (id, { rejectWithValue }) => {
    return commonReduxRequest(
      "delete",
      `/admin/blog/${id}`,
      null,
      null,
      rejectWithValue
    );
  }
);
