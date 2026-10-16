import { createAsyncThunk } from '@reduxjs/toolkit';
import { commonReduxRequest } from '../../../common/api';

// Get gallery items by category (for public gallery)
export const getGalleryByCategory = createAsyncThunk(
  'gallery/getByCategoryPublic',
  async (category, { rejectWithValue }) => {
    return commonReduxRequest('get', `/public/gallery/${category}`, null, null, rejectWithValue);
  }
);
