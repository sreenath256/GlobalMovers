import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getGalleryCategories } from '../../redux/actions/admin/galleryActions';

const AdminGallery = () => {

  // Static categories data
  const staticCategories = [
    {
      name: 'moving',
      displayName: 'Moving',
      icon: '🏆'
    },
    {
      name: 'storage',
      displayName: 'Storage',
      icon: '✂️'
    },
   
  ];




  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Gallery Management</h1>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {staticCategories.map((category) => (
          <Link
            key={category.name}
            to={`/admin/gallery/${category.name}`}
            className="block"
          >
            <div className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {/* <span className="text-2xl">{category.icon}</span> */}
                  <h2 className="text-xl font-semibold text-gray-800">
                    {category.displayName}
                  </h2>
                </div>
               
              </div>
              
              
              
              <div className="flex justify-between items-center">
                <span className="text-main text-sm font-medium hover:text-mainhvr">
                  View and Manage →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      
    </div>
  );
};

export default AdminGallery;