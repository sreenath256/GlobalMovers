import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";

// Admin
import blogsReducer from "./reducers/admin/blogSlice";
import categoriesReducer from "./reducers/admin/categoriesSlice";
import galleryReducer from "./reducers/admin/gallerySlice";

// Super Admin
import adminReducer from "./reducers/superAdmin/adminSlice";

// User
import userBlogsReducer from "./reducers/user/userBlogSlice";
import userGalleryReducer from "./reducers/user/gallerySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,

    // User Side
    userBlogs: userBlogsReducer,
    userGallery: userGalleryReducer,

    // Admin Side
    blogs: blogsReducer,
    gallery: galleryReducer,
    categories: categoriesReducer,

    // Super Admin
    admins: adminReducer,
  },
});
