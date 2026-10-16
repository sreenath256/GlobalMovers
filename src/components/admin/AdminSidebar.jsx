import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    FiHome,
    FiFolder,
    FiTag,
    FiSettings,
    FiBarChart,
    FiUser,
    FiLogOut,
    FiX,
    FiImage
} from 'react-icons/fi';
import { GlobalLogo } from '../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';
import { IoMdImages } from "react-icons/io";


const AdminSidebar = ({ isOpen, onToggle }) => {
    const location = useLocation();
    const { user } = useSelector((state) => state.user)

    const dispatch = useDispatch();


    const sidebarItems = [
        { id: 'dashboard', label: 'Dashboard', icon: FiHome, path: '/admin' },
        { id: 'blogs', label: 'Blogs', icon: FiFolder, path: '/admin/blogs' },
        // { id: 'gallery', label: 'Gallery', icon: IoMdImages , path: '/admin/gallery' },
    ];

    const isActiveRoute = (path) => {
        if (path === '/admin') {
            return location.pathname === '/admin' || location.pathname === '/admin/dashboard';
        }
        return location.pathname.startsWith(path);
    };

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                    onClick={onToggle}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-200 ease-out lg:translate-x-0 lg:static lg:inset-0`}>

                {/* Header */}
                <div className="flex items-center justify-center h-16 px-6 border-b border-gray-50">
                    <div className="flex items-center space-x-3">
                        <div className="w-ful rounded-md flex items-center justify-center">
                            <img className="w-16 object-contain" src={GlobalLogo} alt="Avicen" />
                        </div>
                    </div>
                    <button
                        onClick={onToggle}
                        className="lg:hidden p-1.5 text-gray-400 hover:text-gray-600"
                    >
                        <FiX className="h-5 w-5" />
                    </button>
                </div>


                {/* Navigation */}
                <nav className="p-4">
                    <ul className="space-y-1">
                        {sidebarItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${isActiveRoute(item.path)
                                        ? 'bg-slate-100 text-slate-900'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                        }`}
                                    onClick={() => {
                                        if (window.innerWidth < 1024) {
                                            onToggle();
                                        }
                                    }}
                                >
                                    <item.icon className="h-5 w-5 mr-3" />
                                {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* User Profile */}
                <div className="absolute bottom-0 w-full p-4 border-t border-gray-50">
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3 px-3 py-2">
                            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                                <FiUser className="h-4 w-4 text-slate-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-900 truncate capitalize">{user.username}</p>
                            </div>
                        </div>
                        <button className="w-full flex items-center justify-center px-3 py-2 text-sm font-medium text-white hover:text-red-white bg-red-500  hover:bg-red-400 rounded-lg transition-colors" onClick={handleLogout} >
                            <FiLogOut className="h-4 w-4 mr-2" />
                            Sign Out
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AdminSidebar;
