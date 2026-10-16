import { createSlice } from '@reduxjs/toolkit';
import {
  getGalleryByCategory,
} from '../../actions/user/galleryActions';

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    // For public gallery
    items: [],
    
    // UI states
    loading: false,
    error: null,
    
    // Static categories
    activeCategory: 'awards',
    
    // Lightbox state
    lightbox: {
      isOpen: false,
      currentIndex: 0
    }
  },
  reducers: {
    // Clear gallery error
    clearGalleryError: (state) => {
      state.error = null;
    },
    
    // Clear all gallery data
    clearGalleryData: (state) => {
      state.items = [];
      state.error = null;
    },
    
    // Set active category
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    
    // Lightbox actions
    openLightbox: (state, action) => {
      state.lightbox.isOpen = true;
      state.lightbox.currentIndex = action.payload;
    },
    
    closeLightbox: (state) => {
      state.lightbox.isOpen = false;
      state.lightbox.currentIndex = 0;
    },
    
    nextImage: (state) => {
      if (state.items.length > 0) {
        state.lightbox.currentIndex = (state.lightbox.currentIndex + 1) % state.items.length;
      }
    },
    
    prevImage: (state) => {
      if (state.items.length > 0) {
        state.lightbox.currentIndex = state.lightbox.currentIndex === 0 
          ? state.items.length - 1 
          : state.lightbox.currentIndex - 1;
      }
    },
    
    setLightboxIndex: (state, action) => {
      if (action.payload >= 0 && action.payload < state.items.length) {
        state.lightbox.currentIndex = action.payload;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      // Get Gallery by Category (Public Gallery)
      .addCase(getGalleryByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGalleryByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items || [];
        state.error = null;
      })
      .addCase(getGalleryByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to load gallery images';
        state.items = [];
      });
  }
});

// Export actions
export const {
  clearGalleryError,
  clearGalleryData,
  setActiveCategory,
  openLightbox,
  closeLightbox,
  nextImage,
  prevImage,
  setLightboxIndex
} = gallerySlice.actions;

// Export reducer
export default gallerySlice.reducer;