import React, { useEffect, useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser } from 'react-icons/fi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { GlobalLogo, LongTermStorageImage } from '../../assets'; // ✅ Import the banner
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateError } from '../../redux/reducers/userSlice';
import { loginUser } from '../../redux/actions/userActions';

const Login = () => {
    const { user, loading, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
        if (error) {
            dispatch(updateError(""));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        else if (formData.username.length < 3)
            newErrors.username = 'Username must be at least 3 characters';
        else if (formData.username.length > 20)
            newErrors.username = 'Username must be less than 20 characters';
        else if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(formData.username))
            newErrors.username = 'Username must start with a letter and contain only letters, numbers, and underscores';

        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 6)
            newErrors.password = 'Password must be at least 6 characters';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        dispatch(updateError(""));
        dispatch(loginUser(formData));
    };

    useEffect(() => {
        if (user) {
            navigate("/admin");
        }
        return () => {
            dispatch(updateError(""));
        };
    }, [user, navigate, dispatch]);

    return (
        <div
            className="relative min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${LongTermStorageImage})`
            }}
        >

            {/* 🔥 Black tint overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-slate-200">
                <div className="text-center mb-8">
                    <div className="mx-auto w-56 h-24 rounded-xl flex items-center justify-center mb-4">
                        <img className="w-full object-contain " src={GlobalLogo} alt="Global Icon Movers" />
                    </div>
                    <h1 className="text-2xl mt-10 font-bold text-slate-900 mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-slate-600 text-sm">
                        Sign in to your admin dashboard
                    </p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 text-sm text-center">{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Username */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 block">
                            Username
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiUser className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                disabled={loading}
                                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${errors.username
                                    ? 'border-red-300 bg-red-50'
                                    : 'border-slate-300 hover:border-slate-400'
                                    }`}
                                placeholder="Enter your username"
                            />
                        </div>
                        {errors.username && (
                            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 block">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiLock className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                disabled={loading}
                                className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${errors.password
                                    ? 'border-red-300 bg-red-50'
                                    : 'border-slate-300 hover:border-slate-400'
                                    }`}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                disabled={loading}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center disabled:opacity-50"
                            >
                                {showPassword ? (
                                    <FiEyeOff className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                                ) : (
                                    <FiEye className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-primaryHover focus:ring-4 focus:ring-slate-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        {loading ? (
                            <>
                                <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                                Signing in...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
