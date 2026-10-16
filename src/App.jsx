import { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import UserLayouts from "./components/layout/UserLayouts.jsx"

const HomePage = lazy(() => import("./pages/HomePage"))
const AboutPage = lazy(() => import("./pages/AboutPage.jsx"))
const AboutUs = lazy(() => import("./pages/Aboutus.jsx"))
const Services = lazy(() => import("./pages/Services.jsx"))
const GalleryPage = lazy(() => import("./pages/GalleryPage.jsx"))
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"))
const BlogsPage = lazy(() => import("./pages/BlogsPage.jsx"))
const OfficeRelocationPage = lazy(() => import("./pages/services/OfficeReloaction.jsx"))
const HouseRelocationPage = lazy(() => import("./pages/services/HouseRelocation.jsx"))
const FurnitureHandymanPage = lazy(() => import("./pages/services/FurnitureHandyman.jsx"))
const CorporateServicesPage = lazy(() => import("./pages/services/CorporateServices.jsx"))
const ShortTermStoragePage = lazy(() => import("./pages/services/ShortTermStorage.jsx"))
const LongTermStoragePage = lazy(() => import("./pages/services/LongTermStorage.jsx"))
const CommercialSpacePage = lazy(() => import("./pages/services/CommercialSpace.jsx"))

// Admin
const AdminLayout = lazy(() => import("./components/layout/AdminLayout.jsx"))
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard.jsx"))
const AdminBlogs = lazy(() => import("./pages/admin/AdminBlogs.jsx"))
const AddBlog = lazy(() => import("./pages/admin/AddBlog.jsx"))
const EditBlog = lazy(() => import("./pages/admin/EditBlog.jsx"))
const AdminGallery = lazy(() => import("./pages/admin/AdminGallery.jsx"))
const AdminGalleryCategory = lazy(() => import("./pages/admin/AdminGalleryCategory.jsx"))
const Login = lazy(() => import("./pages/admin/Login.jsx"))
const BlogInner = lazy(() => import("./pages/BlogInner.jsx"))



import ScrollToTop from "./components/ScrollToTop.jsx"
import BlogPage from "./pages/BlogPage.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getUserDataFirst } from "./redux/actions/userActions.jsx"
import { Toaster } from "react-hot-toast"
import LandingPage from "./pages/LandingPage.jsx"

// Route Protection
const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user } = useSelector((state) => state.user)

  if (!user) {
    return <Navigate to="/login" />
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />
  }

  return children
}

const PublicRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user)

  // If user is logged in and tries to access public routes like login
  if (user) {
    if (user.role === 'admin' || user.role === 'superAdmin') {
      return <Navigate to="/admin" />
    }
    return <Navigate to="/" />
  }

  return children
}

function App() {
  const { user, loading } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user) {
      dispatch(getUserDataFirst())
    }
  }, [dispatch, user])

  return (
    <div className='flex flex-col gap-20 '>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route element={<UserLayouts />}>
          {/* Home route */}
          <Route
            path="/"
            element={
              user && (user.role === 'admin' || user.role === 'superAdmin') ? (
                <Navigate to="/admin" replace />
              ) : (
                <HomePage />
              )
            }
          />

          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/storage-solutions-in-abu-dhabi" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/services/office-movers-in-abu-dhabi" element={<OfficeRelocationPage />} />
          <Route path="/services/house-movers-in-abu-dhabi" element={<HouseRelocationPage />} />
          <Route path="/services/corporate-services" element={<CorporateServicesPage />} />
          <Route path="/services/short-term-storage-solutions-in-abu-dhabi" element={<ShortTermStoragePage />} />
          <Route path="/services/long-term-storage-solutions-in-abu-dhabi" element={<LongTermStoragePage />} />
          <Route path="/services/commercial-space" element={<CommercialSpacePage />} />
          <Route path="/services/handyman" element={<FurnitureHandymanPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/moving-packing-and-storage-in-abu-dhabi" element={<LandingPage />} />
          {/* <Route path="/blogs/:id" element={<BlogInner />} /> */}
        </Route>

        {/* Auth Routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          element={
            <ProtectedRoute allowedRoles={['admin', 'superAdmin']}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/blogs" element={<AdminBlogs />} />
          <Route path="/admin/blogs/add" element={<AddBlog />} />
          <Route path="/admin/blogs/edit/:id" element={<EditBlog />} />
          <Route path="/admin/blog/:id" element={<BlogInner />} />


          <Route path="/admin/gallery" element={<AdminGallery />} />
          <Route path="/admin/gallery/:category" element={<AdminGalleryCategory />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
