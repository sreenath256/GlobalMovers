import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const BlogPage = () => {
    const { slug } = useParams();
    const [pageData, setPageData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPageData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://lemonchiffon-whale-379446.hostingersite.com/wp-json/wp/v2/pages?slug=${slug}&_embed`);
                if (!response.ok) {
                    throw new Error('Failed to fetch blog post');
                }
                const data = await response.json();

                if (data.length > 0) {
                    setPageData(data[0]);
                } else {
                    setError('Blog post not found');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPageData();
        window.scrollTo(0, 0);
    }, [slug]);

    // Accordion Logic for Elementor Content
    useEffect(() => {
        if (!pageData) return;

        const handleAccordionToggle = (e) => {
            const title = e.currentTarget;
            const item = title.closest('.elementor-accordion-item');
            const content = item.querySelector('.elementor-tab-content');
            const isOpen = item.classList.contains('active');

            if (isOpen) {
                item.classList.remove('active');
                title.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = null;
            } else {
                item.classList.add('active');
                title.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        };

        const titles = document.querySelectorAll('.elementor-tab-title');
        titles.forEach(title => {
            title.addEventListener('click', handleAccordionToggle);
        });

        return () => {
            titles.forEach(title => {
                title.removeEventListener('click', handleAccordionToggle);
            });
        };
    }, [pageData]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white pt-20 flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-white pt-20 flex flex-col items-center justify-center text-center p-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Oops!</h2>
                <p className="text-gray-600 mb-8 max-w-md">{error}</p>
                <Link to="/blog" className="text-primary font-semibold hover:underline flex items-center gap-2">
                    <ChevronLeft size={20} /> Back to Blogs
                </Link>
            </div>
        );
    }

    const featuredImage = pageData._embedded?.['wp:featuredmedia']?.[0]?.source_url;

    // This removes HTML tags from WordPress data so it looks clean in Google search results
    const stripHtml = (html) => {
        if (!html) return '';
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    };

    // Get a clean title and limit the description to 160 characters (SEO best practice)
    const cleanTitle = stripHtml(pageData.title.rendered);
    const cleanDescription = stripHtml(pageData.excerpt?.rendered || pageData.content?.rendered).substring(0, 160) + '...';

    // --- NEW DOMAIN REPLACEMENT LOGIC ---
    const oldUrl = "https://lemonchiffon-whale-379446.hostingersite.com";
    const newUrl = "https://globaliconmovers.com"; // Leaves a relative path so React Router handles it
    const cleanContent = pageData.content.rendered.replaceAll(
        `href="${oldUrl}`,
        `href="${newUrl}`
    );    // ------------------------------------

    return (
        <>
            <title>{cleanTitle}</title>
            <meta name="description" content={cleanDescription} />

            {/* Open Graph Tags for sharing on Facebook, LinkedIn, WhatsApp, etc. */}
            <meta property="og:title" content={cleanTitle} />
            <meta property="og:description" content={cleanDescription} />
            <meta property="og:type" content="article" />
            {featuredImage && <meta property="og:image" content={featuredImage} />}

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={cleanTitle} />
            <meta name="twitter:description" content={cleanDescription} />
            {featuredImage && <meta name="twitter:image" content={featuredImage} />}
            <div className="font-poppins bg-white min-h-screen">
                {/* Header Navigation */}
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <Link
                        to="/blogs"
                        className="inline-flex items-center text-gray-500 hover:text-primary transition-colors font-medium gap-2 group"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Blogs
                    </Link>
                </div>

                {/* Hero Section */}
                <header className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
                    {featuredImage ? (
                        <img
                            src={featuredImage}
                            alt={pageData.title.rendered}
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
                            dangerouslySetInnerHTML={{ __html: pageData.title.rendered }}
                        />
                    </div>
                </header>

                {/* Content Section */}
                <main className="w-11/12 mx-auto px-4 py-16 md:py-24">
                    <style dangerouslySetInnerHTML={{
                        __html: `
                    /* General Layout & Typography */
                    .blog-content {
                        font-size: 1.125rem;
                        line-height: 1.8;
                        letter-spacing: 0.015em;
                        color: #4b5563;
                        }
                        
                        /* Elementor Headings */
                        .blog-content .elementor-heading-title,
                    .blog-content h2, .blog-content h3, .blog-content h4 {
                        font-weight: 700 !important;
                        color: #111827 !important;
                        margin-top: 2.5rem !important;
                        margin-bottom: 1.25rem !important;
                        letter-spacing: -0.01em !important;
                        text-align: left !important;
                        }
                        .blog-content h1.elementor-heading-title { font-size: 3rem; }
                        .blog-content h2.elementor-heading-title, .blog-content h2 { font-size: 2.25rem; }
                        .blog-content h3.elementor-heading-title, .blog-content h3 { font-size: 1.875rem; }
                        
                    .blog-content p, .blog-content .elementor-text-editor {
                        margin-bottom: 1.5rem;
                    }
                    
                    /* Images and Centering */
                    .blog-content .elementor-widget-image {
                        text-align: center;
                        margin: 3rem 0;
                        }
                        .blog-content img {
                            max-width: 100%;
                            height: auto;
                        border-radius: 1rem;
                        display: inline-block;
                        }
                        
                        /* Elementor Buttons - FIXED PADDING */
                        .blog-content .elementor-button {
                        display: inline-flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        padding: 0.5rem 1.5rem !important;
                        background-color: #18609e !important;
                        color: #ffffff !important;
                        text-decoration: none !important;
                        border-radius: 9999px !important;
                        font-weight: 600 !important;
                        font-size: 1rem !important;
                        transition: all 0.3s ease !important;
                        border: none !important;
                        min-height: unset !important;
                        }
                    .blog-content .elementor-button:hover {
                        background-color: #0a2843ff !important;
                        transform: translateY(-2px);
                        }
                        .blog-content .elementor-button-text {
                        padding: 0 !important;
                        margin: 0 !important;
                        }
                        
                        /* Tables */
                        .blog-content table {
                            width: 100%;
                            max-width: 100%;
                            border-collapse: collapse;
                            margin: 3rem 0;
                            border: 1px solid #e5e7eb;
                            font-size: 1rem;
                            background: #fff;
                        
                            /* MOBILE FIXES BELOW */
                        display: block; /* Allows the table to sit inside the container */
                        overflow-x: auto; /* Adds a horizontal scrollbar ONLY to the table */
                        -webkit-overflow-scrolling: touch; /* Enables smooth swiping on iOS devices */
                        white-space: nowrap; /* Prevents text inside cells from squishing too much */
                    }

                    .blog-content th, .blog-content td {
                        padding: 1.25rem;
                        border: 1px solid #e5e7eb;
                        text-align: left;
                        }
                        .blog-content th {
                            background-color: #f9fafb;
                        font-weight: 700;
                        color: #111827;
                        }
                        .blog-content tr:nth-child(even) {
                            background-color: #fcfcfc;
                    }
                    
                    /* Elementor Accordion / FAQ */
                    .blog-content .elementor-accordion {
                        margin: 2rem 0;
                    }
                    .blog-content .elementor-accordion-item {
                        border: 1px solid #e5e7eb;
                        border-radius: 0.75rem;
                        margin-bottom: 1rem;
                        overflow: hidden;
                        transition: all 0.3s ease;
                    }
                    .blog-content .elementor-tab-title {
                        background: #f9fafb;
                        padding: 1.25rem;
                        cursor: pointer;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        position: relative;
                        transition: background 0.3s ease;
                        }
                        .blog-content .elementor-tab-title:hover {
                            background: #f3f4f6;
                            }
                            .blog-content .elementor-accordion-item.active .elementor-tab-title {
                        background: #fff;
                        border-bottom: 1px solid #e5e7eb;
                        }
                        .blog-content .elementor-accordion-title {
                            font-weight: 700;
                        color: #111827;
                        text-decoration: none !important;
                        }
                    .blog-content .elementor-tab-content {
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.3s ease-out;
                        background: #fff;
                    }
                    .blog-content .elementor-accordion-item.active .elementor-tab-content {
                        padding: 1.5rem;
                        }
                        
                        /* Accordion Icons Fallback (Plus/Minus) */
                        .blog-content .elementor-tab-title::after {
                            content: '+';
                        font-size: 1.25rem;
                        font-weight: bold;
                        color: #18609e;
                        }
                        .blog-content .elementor-accordion-item.active .elementor-tab-title::after {
                            content: '−';
                            }
                    /* Hide Elementor internal Icons if they interfere */
                    .blog-content .elementor-accordion-icon {
                        display: none;
                    }
                    
                    /* Bullet Points and Lists */
                    .blog-content ul {
                        list-style-type: disc !important;
                        padding-left: 1.5rem !important;
                        margin-bottom: 2rem !important;
                    }
                    .blog-content ol {
                        list-style-type: decimal !important;
                        padding-left: 1.5rem !important;
                        margin-bottom: 2rem !important;
                    }
                    .blog-content li {
                        margin-bottom: 1rem !important;
                        padding-left: 0.5rem !important;
                        display: list-item !important;
                    }
                    
                    .blog-content a:not(.elementor-button) {
                        color: #18609e;
                        font-weight: 600;
                        text-decoration: underline;
                        text-underline-offset: 4px;
                        }
                        ` }} />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="blog-content max-w-5xl mx-auto"
                        dangerouslySetInnerHTML={{ __html: cleanContent }}
                    />
                </main>

                {/* Footer Navigation */}
                <footer className="max-w-4xl mx-auto px-4 pb-24 border-t border-gray-100 pt-12 text-center">
                    <p className="text-gray-400 mb-6">Enjoyed reading this?</p>
                    <Link
                        to="/blogs"
                        className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primaryHover transition-all shadow-lg shadow-primary/20"
                    >
                        Explore More Blogs
                    </Link>
                </footer>
            </div>
        </>
    );
};

export default BlogPage;