/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { Activity } from "@/components/Activity";
import { useState } from "react";
import { useStoryblokRichText, convertAttributesInElement } from "@storyblok/react";

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

  // Storyblok-provided rich text rendering logic with prop filtering
  const { render } = useStoryblokRichText({});
  const jsx = story.content.Content ? render(story.content.Content as any) : null;
  let formatted: React.ReactNode = <p>No content available.</p>;

  // Function to filter out only problematic DOM props
  const filterInvalidProps = (element: any) => {
    if (typeof element === "object" && element !== null && "props" in element) {
      const { props } = element;
      const filteredProps: any = {};
      
      // List of problematic props to remove
      const invalidProps = ['textAlign', 'text-align'];
      
      // Copy all props except the problematic ones
      Object.keys(props).forEach(key => {
        if (!invalidProps.includes(key)) {
          filteredProps[key] = props[key];
        }
      });
      
      return {
        ...element,
        props: filteredProps
      };
    }
    return element;
  };

  if (jsx) {
    if (Array.isArray(jsx)) {
      formatted = jsx.map((el, i) => {
        const converted = typeof el === "object" && el !== null && "type" in el
          ? convertAttributesInElement(el)
          : el;
        return filterInvalidProps(converted);
      });
    } else if (typeof jsx === "object" && jsx !== null && "type" in jsx) {
      const converted = convertAttributesInElement(jsx);
      formatted = filterInvalidProps(converted);
    } else if (typeof jsx === "string") {
      formatted = jsx;
    }
  }

  return (
    <div className="relative z-10">
        <main className="flex-grow container mx-auto px-4 py-8 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 grid grid-cols-1 lg:grid-cols-2"
          >
            <div className="relative w-full h-full border-1 border-white/60">
              {story.content.Image && (
                <img
                  src={story.content.Image}
                  alt={`Image for ${story.content.Title}`}
                  className="w-full h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                  style={{
                    clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)",
                  }}
                />
              )}
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
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
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
                {story.content.Title}
              </h1>
              <div className="flex items-center mb-6 group">
                {story.content.AuthorImage && (
                  <img
                    src={story.content.AuthorImage}
                    alt={`Author: ${story.content.Author}`}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-white/30 group-hover:border-white/60 transition-all duration-300 grayscale group-hover:grayscale-0"
                    style={{
                      clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)",
                    }}
                  />
                )}
                <div>
                  <p className="text-white/90 font-poppins font-medium">
                    {story.content.Author}
                  </p>
                  <p className="text-white/60 text-sm">Author</p>
                </div>
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
            className="max-w-6xl mx-auto mt-8"
          >
            <article className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 p-8 lg:p-12">
              <div className="prose prose-xl prose-gray max-w-none">
                <style jsx global>{`
                  .prose {
                    color: #374151;
                    line-height: 1.2;
                  }
                  .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
                    color: #1f2937;
                    font-weight: 700;
                    margin-top: 2.5rem;
                    margin-bottom: 1.5rem;
                    line-height: 1.3;
                  }
                  .prose h1 {
                    font-size: 2.5rem;
                    margin-top: 0;
                  }
                  .prose h2 {
                    font-size: 2rem;
                    border-bottom: 2px solid #e5e7eb;
                    padding-bottom: 0.5rem;
                  }
                  .prose h3 {
                    font-size: 1.5rem;
                  }
                  .prose p {
                    color: #374151;
                    line-height: 1.8;
                    margin-bottom: 1.5rem;
                    font-size: 1.125rem;
                  }
                  .prose ul, .prose ol {
                    color: #374151;
                    margin-bottom: 1.2rem;
                    padding-left: 1.2rem;
                  }
                  .prose li {
                    margin-bottom: 0.75rem;
                    line-height: 1.07;
                    font-size: 1.125rem;
                  }
                  .prose ul li {
                    list-style-type: disc;
                    list-style-position: outside;
                  }
                  .prose ol li {
                    list-style-type: decimal;
                    list-style-position: outside;
                  }
                  .prose ul li::marker {
                    color: #8b5cf6;
                    font-size: 1.2em;
                  }
                  .prose ol li::marker {
                    color: #8b5cf6;
                    font-weight: 600;
                  }
                  .prose blockquote {
                    border-left: 4px solid #8b5cf6;
                    background: #f8fafc;
                    padding: 1.5rem 2rem;
                    margin: 2rem 0;
                    border-radius: 0.5rem;
                    font-style: italic;
                    font-size: 1.125rem;
                    color: #4b5563;
                  }
                  .prose a {
                    color: #8b5cf6;
                    text-decoration: none;
                    font-weight: 500;
                    border-bottom: 1px solid transparent;
                    transition: all 0.2s ease;
                  }
                  .prose a:hover {
                    border-bottom-color: #8b5cf6;
                  }
                  .prose strong {
                    color: #1f2937;
                    font-weight: 600;
                  }
                  .prose em {
                    color: #4b5563;
                    font-style: italic;
                  }
                  .prose code {
                    background: #f1f5f9;
                    padding: 0.25rem 0.5rem;
                    border-radius: 0.375rem;
                    font-size: 0.9em;
                    color: #e11d48;
                    font-weight: 500;
                  }
                  .prose pre {
                    background: #1e293b;
                    color: #e2e8f0;
                    padding: 2rem;
                    border-radius: 1rem;
                    overflow-x: auto;
                    margin: 2rem 0;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                  }
                  .prose pre code {
                    background: transparent;
                    color: inherit;
                    padding: 0;
                    font-weight: normal;
                  }
                  .prose img {
                    border-radius: 1rem;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                    margin: 2.5rem 0;
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                  }
                  .prose hr {
                    border: none;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
                    margin: 3rem 0;
                  }
                  .prose table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 2rem 0;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                    border-radius: 0.5rem;
                    overflow: hidden;
                  }
                  .prose th, .prose td {
                    padding: 1rem;
                    text-align: left;
                    border-bottom: 1px solid #e5e7eb;
                  }
                  .prose th {
                    background: #f8fafc;
                    font-weight: 600;
                    color: #1f2937;
                  }
                  .prose tr:hover {
                    background: #f8fafc;
                  }
                `}</style>
                {formatted}
              </div>
            </article>
          </motion.div>
      </main>
    </div>
  );
}
