// redux/actions/admin/galleryActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { commonReduxRequest } from '../../../common/api';

export const getGalleryCategories = createAsyncThunk(
  'gallery/getCategories',
  async (_, { rejectWithValue }) => {
    return commonReduxRequest('get', '/admin/gallery/categories', null, null, rejectWithValue);
  }
);

export const getGalleryByCategory = createAsyncThunk(
  'gallery/getByCategory',
  async (category, { rejectWithValue }) => {
    return commonReduxRequest('get', `/admin/gallery/${category}`, null, null, rejectWithValue);
  }
);

export const addGalleryItems = createAsyncThunk(
  'gallery/addItems',
  async (formData, { rejectWithValue }) => {
    return commonReduxRequest('post', '/admin/gallery', formData, null, rejectWithValue);
  }
);

export const updateGalleryOrder = createAsyncThunk(
  'gallery/updateOrder',
  async (items, { rejectWithValue }) => {
    return commonReduxRequest('put', '/admin/gallery/order', { items }, null, rejectWithValue);
  }
);

export const deleteGalleryItem = createAsyncThunk(
  'gallery/deleteItem',
  async (id, { rejectWithValue }) => {
    return commonReduxRequest('delete', `/admin/gallery/${id}`, null, null, rejectWithValue);
  }
);