import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { URL } from '../common/api';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';


const BlogInner = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState(null);
  const abortControllerRef = useRef(null);

  const fetchData = async () => {
    // Cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller
    abortControllerRef.current = new AbortController();

    try {
      setLoading(true);
      console.log("Fetching blog with ID:", id);
      const res = await axios.get(`${URL}/public/blog/${id}`, {
        signal: abortControllerRef.current.signal,
        timeout: 10000 // 10 second timeout
      });

      // Log response size
      const responseSize = new TextEncoder().encode(JSON.stringify(res.data)).length;
      console.log(`📦 Response size: ${(responseSize / 1024 / 1024).toFixed(2)} MB`);

      console.log("Blog data:", res.data.blog);
      setBlog(res.data.blog);
    } catch (err) {
      if (err.name !== 'CanceledError') {
        console.error("Error fetching blog:", err);
      }
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (id) {
      fetchData();
    }

    return () => {
      // Cleanup: abort request if component unmounts
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [id]);

  // Rest of your component remains the same...
  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20 flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-7xl mx-auto pt-28 flex justify-center items-center min-h-64">
        <p className="text-gray-500">Blog not found</p>
      </div>
    );
  }

  return (
    <>
      <title>{blog?.title}</title>
      <meta name="description" content={blog?.metaDescription} />
      <div className="font-poppins bg-white min-h-screen pt-28">

        <header className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
          {blog.primaryImage ? (
            <img
              src={blog.primaryImage}
              alt={blog.imageAltText}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-primary" />
          )}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl text-center text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
              dangerouslySetInnerHTML={{ __html: blog.title }}
            />
          </div>
        </header>



        {/* Blog Content */}
        <div className="w-9/12 mx-auto px-4 py-16 md:py-24">
          <div
            className="rich-text-content max-w-none text-left"
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          />
        </div>
      </div>
    </>
  );
};

export default BlogInner;