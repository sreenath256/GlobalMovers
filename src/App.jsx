import { Route, Routes } from "react-router-dom"
import UserLayouts from "./components/layout/UserLayouts.jsx"

import HomePage from "./pages/HomePage"
import AboutUs from "./pages/Aboutus.jsx"
import Services from "./pages/Services.jsx"
import GalleryPage from "./pages/GalleryPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import BlogsPage from "./pages/BlogsPage.jsx"
import OfficeRelocationPage from "./pages/services/OfficeReloaction.jsx"
import HouseRelocationPage from "./pages/services/HouseRelocation.jsx"
import FurnitureHandymanPage from "./pages/services/FurnitureHandyman.jsx"
import CorporateServicesPage from "./pages/services/CorporateServices.jsx"
import ShortTermStoragePage from "./pages/services/ShortTermStorage.jsx"
import LongTermStoragePage from "./pages/services/LongTermStorage.jsx"
import CommercialSpacePage from "./pages/services/CommercialSpace.jsx"

import ScrollToTop from "./components/ScrollToTop.jsx"
import BlogPage from "./pages/BlogPage.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"

function App() {

  return (
    <div className='flex flex-col gap-20 '>
      <ScrollToTop />
      <Routes>
        <Route element={<UserLayouts />}>
          <Route path="/" element={<HomePage />} />
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
          <Route path="/services/furniture-handyman" element={<FurnitureHandymanPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
