"use client";

import Navigation from "@/components/nav/Navigation";
import Footer from "@/components/landing/Footer";
import { blogData } from "../data";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Activity } from "@/components/Activity";

const BlogDetailPage: React.FC = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  const [stats, setStats] = useState({
    likes: 123,
    views: 15794,
    liked: false,
  });

  const handleLike = () => {
    setStats((prev) => ({
      ...prev,
      likes: prev.liked ? prev.likes - 1 : prev.likes + 1,
      liked: !prev.liked,
    }));
  };

  if (!blog) {
    return <p>Blog not found</p>;
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen gradient-bg flex flex-col">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <Navigation />
      <main className="flex-grow container mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
          className="max-w-4xl mx-auto bg-gray-600/80 rounded-lg shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2"
        >
          <div className="relative w-full h-full">
            <img
              src={blog.image}
              alt={`Image for ${blog.title}`}
              className="w-full h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
              style={{
                clipPath:
                  "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)",
              }}
            />
          </div>
          <div className="p-4 md:p-6 flex flex-col justify-center">
            <div className="grid grid-cols-2 mb-4 items-center">
              <p className="text-gray-200 font-poppins text-base">
                {formattedDate}
              </p>
              <div className="flex items-center justify-end">
                <span className="text-purple-500 mr-1 text-3xl">•</span>
                <span className="text-base text-gray-200 font-poppins">
                  {blog.type}
                </span>
              </div>
            </div>
            <h1 className="text-2xl text-start md:text-3xl tracking-wide font-space font-semibold mb-4 text-gray-100">
              <span className="text-3xl md:text-4xl text-purple-500 font-cat mr-2">
                “
              </span>
              {blog.title}
              <span className="text-3xl md:text-4xl text-purple-500 font-cat ml-2">
                ”
              </span>
            </h1>
            <div className="flex items-center mb-4 group">
              <img
                src={blog.authorImage}
                alt={`Image of ${blog.author}`}
                className="w-10 h-10 rounded-full mr-2 grayscale group-hover:grayscale-0"
              />
              <p className="text-gray-300 font-play group-hover:text-white">
                {blog.author}
              </p>
            </div>
            <Activity
              likes={stats.likes}
              views={stats.views}
              liked={stats.liked}
              onLike={handleLike}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 1.2 }}
          className="max-w-4xl mx-auto bg-white/50 backdrop-blur-md rounded-lg shadow-md overflow-hidden mt-6 p-6"
        >
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="prose prose-lg font-poppins"
          ></div>
        </motion.div>
        <div className="text-center mt-8">
          <h1 className="text-3xl md:text-6xl tracking-extra-widest hover:tracking-widest transition-all duration-300 ease-in-out font-cat text-white">
            CYCLESYNC
          </h1>
        </div>
      </main>
    </div>
  );
};

export default BlogDetailPage;