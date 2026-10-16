import { useEffect, useState } from "react"
import { useLocation, Outlet } from "react-router-dom"
import AdminSidebar from "../admin/AdminSidebar"
import Logo from "../../assets/logos/logo.webp"

const AdminLayout = () => {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <AdminSidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col pt-5">
        {/* Mobile Header */}
        <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-40 flex items-center px-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-gray-600 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="ml-4">
            <img className="h-8 w-auto" src={Logo} alt="Avicen" />
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 pt-16 lg:pt-0 p-4 lg:p-6 overflow-auto">

          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout;
