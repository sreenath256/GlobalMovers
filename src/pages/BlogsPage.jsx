import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image12 } from '../assets';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BlogSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full animate-pulse">
                <div className="h-56 bg-gray-200" />
                <div className="p-6 flex flex-col flex-grow">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
                    <div className="space-y-3 mb-6">
                        <div className="h-4 bg-gray-100 rounded w-full" />
                        <div className="h-4 bg-gray-100 rounded w-5/6" />
                        <div className="h-4 bg-gray-100 rounded w-4/6" />
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mt-auto" />
                </div>
            </div>
        ))}
    </div>
);

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const postsPerPage = 15;

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://lemonchiffon-whale-379446.hostingersite.com/wp-json/wp/v2/pages?author=4&_embed&per_page=${postsPerPage}&page=${currentPage}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }

                // Get total pages from WP headers
                const totalPagesHeader = response.headers.get('X-WP-TotalPages');
                if (totalPagesHeader) {
                    setTotalPages(parseInt(totalPagesHeader, 10));
                }

                const data = await response.json();
                setPosts(data);

                // Scroll to top of the content section when page changes
                window.scrollTo({ top: 400, behavior: 'smooth' });
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    if (isLoading) {
        return <BlogSkeleton />;
    }

    if (error) {
        return (
            <div className="py-20 text-center">
                <p className="text-xl text-red-500 font-medium">Error: {error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 inline-block">
                <h2 className="text-2xl text-gray-400 font-medium uppercase tracking-widest">No blogs found</h2>
                <p className="text-gray-400 mt-2 text-sm">Check back later for updates!</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {posts.map((post) => {
                    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

                    return (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow"
                        >
                            {featuredImage && (
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={featuredImage}
                                        alt={post.title.rendered}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3
                                    className="text-xl font-bold text-gray-900 mb-3 line-clamp-2"
                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                />
                                <div
                                    className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                />
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
                                >
                                    Read More
                                    <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Pagination UI */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-2 py-2 rounded-lg border transition-all ${currentPage === 1
                            ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                            : 'text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
                            }`}
                    >
                        <ChevronLeft />
                    </button>

                    <div className="flex gap-2">
                        {[...Array(totalPages)].map((_, index) => {
                            const pageNumber = index + 1;
                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => handlePageChange(pageNumber)}
                                    className={`w-10 h-10 rounded-lg border transition-all ${currentPage === pageNumber
                                        ? 'bg-primary hover:bg-primaryHover border-primary text-white shadow-lg shadow-primary/20'
                                        : 'text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
                                        }`}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-2 py-2 rounded-lg border transition-all ${currentPage === totalPages
                            ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                            : 'text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
                            }`}
                    >
                        <ChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
};

const BlogsPage = () => {
    return (
        <>
            <title>Global Icon Movers Blog: Moving Tips, Insights, News</title>
            <meta name="description" content="Discover top moving blogs, industry insights, and helpful tips from Global Icon Movers. Learn how to make your next move smooth." />
            <link rel="canonical" href="https://globaliconmovers./blog" />

            <div className="font-poppins bg-white flex flex-col min-h-screen">

                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${Image12})`
                        }}
                    ></div>

                    <div className="relative z-20 w-11/12 md:w-3/4 mx-auto text-left md:text-center pt-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold uppercase leading-tight tracking-wide"
                        >
                            Our Blog
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-300  leading-relaxed text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed"
                        >
                            Insights, tips, and news from the world of moving and storage.
                        </motion.p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="flex-grow py-24 bg-gray-50">
                    <div className="w-11/12 max-w-7xl mx-auto text-center">
                        <BlogList />
                    </div>
                </section>

            </div>
        </>
    );
};

export default BlogsPage;
