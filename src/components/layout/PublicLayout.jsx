import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useLocation, Navigate, Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const PublicLayout = () => {
  const location = useLocation()
  const { user } = useSelector((state) => state.user)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // If user is admin, redirect to admin dashboard
  if (user && (user.role === 'admin' || user.role === 'superAdmin')) {
    return <Navigate to="/admin" replace />
  }

  return (
    <div className='relative bg-white w-full min-h-screen'>
      <div className='absolute w-full z-50'>
        <Header />
      </div>
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout
