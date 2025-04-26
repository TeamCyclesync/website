"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/nav/Navigation";
import Footer from "@/components/landing/Footer";
import BlogCard from "@/components/BlogCard";
import { blogData } from "./data";
const BlogPage: React.FC = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(blogData.slice(0,7));
  const [hasMore, setHasMore] = useState(true);

  const loadMoreBlogs = () => {
    if (visibleBlogs.length >= blogData.length) {
      setHasMore(false);
      return;
    }
    setVisibleBlogs((prev) => [
      ...prev,
      ...blogData.slice(prev.length, prev.length + 3),
    ]);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    loadMoreBlogs();
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [visibleBlogs]);
  
  return (
    <div className="gradient-bg dotted-grid-mask min-h-screen grid grid-rows-[auto_1fr_auto] relative overflow-x-hidden">
      <Navigation />
      <main className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {visibleBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.4 }}
          >
            <BlogCard
              id={blog.id}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              type={blog.type}
            />
                    
          </motion.div>
        ))}
      </main>
      {/* {hasMore && (
        <button
          className="col-span-full mx-auto mt-4 px-4 py-2 bg-blue-500/30 text-white rounded"
          onClick={loadMoreBlogs}
        >
          Load More
        </button>
      )} */}
      <Footer />
    </div>
  );
};

export default BlogPage;
