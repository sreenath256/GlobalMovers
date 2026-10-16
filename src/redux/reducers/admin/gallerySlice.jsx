import { createSlice } from '@reduxjs/toolkit';
import {
  getGalleryCategories,
  getGalleryByCategory,
  addGalleryItems,
  deleteGalleryItem
} from '../../actions/admin/galleryActions';

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    categories: [],
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    clearGalleryError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Get Categories
      .addCase(getGalleryCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGalleryCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.categories;
      })
      .addCase(getGalleryCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get by Category
      .addCase(getGalleryByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGalleryByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(getGalleryByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add Item
      .addCase(addGalleryItems.fulfilled, (state, action) => {
        state.items.push(action.payload.item);
      })
      // Delete Item
      .addCase(deleteGalleryItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item._id !== action.meta.arg);
      });
  }
});

export const { clearGalleryError } = gallerySlice.actions;
export default gallerySlice.reducer;
