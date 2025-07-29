/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { Activity } from "@/components/Activity";
import { useState } from "react";
import { useStoryblokRichText, convertAttributesInElement } from "@storyblok/react";
import Footer from "@/components/landing/Footer";

interface BlogDetailClientProps {
  story: {
    content: {
      Author: string;
      Title: string;
      Description: string;
      Image: string;
      AuthorImage: string; // Use this for Author image
      Content: {
        type: string;
        content: any[];
      };
      Published: string;
      Type: string;
    };
  };
}

export default function BlogDetailClient({ story }: BlogDetailClientProps) {
  const [stats, setStats] = useState({
    likes: Math.floor(Math.random() * 1000),
    views: Math.floor(Math.random() * 10000),
    liked: false,
  });

  const handleLike = () => {
    setStats((prev) => ({
      ...prev,
      likes: prev.liked ? prev.likes - 1 : prev.likes + 1,
      liked: !prev.liked,
    }));
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString.split(' ')[0]);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Storyblok-provided rich text rendering logic
  const { render } = useStoryblokRichText({});
  const jsx = story.content.Content ? render(story.content.Content as any) : null;
  let formatted: React.ReactNode = <p>No content available.</p>;

  if (jsx) {
    if (Array.isArray(jsx)) {
      formatted = jsx.map((el, i) =>
        typeof el === "object" && el !== null && "type" in el
          ? convertAttributesInElement(el)
          : el
      );
    } else if (typeof jsx === "object" && jsx !== null && "type" in jsx) {
      formatted = convertAttributesInElement(jsx);
    } else if (typeof jsx === "string") {
      formatted = jsx;
    }
  }

  return (
    <div className="min-h-screen gradient-bg dotted-grid-mask relative overflow-hidden">
      <div className="relative z-10">
        <main className="flex-grow container mx-auto p-4 mt-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-gray-600/80 rounded-lg shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2"
          >
            <div className="relative w-full h-full border-1 border-white/60">
              <img
                src={story.content.Image}
                alt={`Image for ${story.content.Title}`}
                className="w-full h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)",
                }}
              />
            </div>
            <div className="p-4 md:p-6 flex flex-col justify-center">
              <div className="grid grid-cols-2 mb-4 items-center">
                <p className="text-gray-200 font-poppins text-base">
                  {formatDate(story.content.Published)}
                </p>
                <div className="flex items-center justify-end">
                  <span className="text-white mr-1 text-3xl font-poppins">•</span>
                  <span className="text-base text-gray-200 font-poppins">
                    {story.content.Type}
                  </span>
                </div>
              </div>
              <h1 className="text-2xl text-start md:text-3xl tracking-wide font-poppins font-semibold mb-4 text-gray-100">
                <span className="text-3xl md:text-4xl text-blue-500 font-anton mr-2">&ldquo;</span>
                {story.content.Title}
                <span className="text-3xl md:text-4xl text-blue-500 font-anton ml-2">&rdquo;</span>
              </h1>
              <div className="flex items-center mb-4 group">
                <img
                  src={story.content.AuthorImage}
                  alt={`Image for ${story.content.Title}`}
                  className="md:w-12 md:h-12 w-10 h-10 rounded-full mr-2 grayscale group-hover:grayscale-0"
                  style={{
                    clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)",
                  }}
                />
                <p className="text-gray-300 font-play group-hover:text-white">
                  {story.content.Author}
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
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl border-2 border-amber-500/80 mx-auto bg-white/50 backdrop-blur-md rounded-lg shadow-md overflow-hidden mt-6 p-6"
          >
            <div className="prose prose-lg font-poppins dark:prose-invert">
              {formatted}
            </div>
          </motion.div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
