import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate = useNavigate()

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold text-gray-800 mb-8'>Admin Dashboard</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl'>
        {/* Blogs Tile */}
        <div 
          className='bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:transform  border border-gray-200'
          onClick={() => navigate('/admin/blogs')}
        >
          <div className='flex items-center space-x-4'>
            <div className='bg-blue-100 p-3 rounded-lg'>
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div>
              <h2 className='text-xl font-semibold text-gray-800'>Blogs</h2>
              <p className='text-gray-600 mt-1'>Manage blog posts and articles</p>
            </div>
          </div>
          <div className='mt-4 pt-4 border-t border-gray-100'>
            <span className='text-blue-600 font-medium hover:text-blue-700 transition-colors'>
              Manage Blogs →
            </span>
          </div>
        </div>

        {/* Gallery Tile */}
        {/* <div 
          className='bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:transform  border border-gray-200'
          onClick={() => navigate('/admin/gallery')}
        >
          <div className='flex items-center space-x-4'>
            <div className='bg-green-100 p-3 rounded-lg'>
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className='text-xl font-semibold text-gray-800'>Gallery</h2>
              <p className='text-gray-600 mt-1'>Manage images and media</p>
            </div>
          </div>
          <div className='mt-4 pt-4 border-t border-gray-100'>
            <span className='text-green-600 font-medium hover:text-green-700 transition-colors'>
              Manage Gallery →
            </span>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default AdminDashboard