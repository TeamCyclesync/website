"use client";
import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";
import { formatUrlForSEO } from "@/lib/utils";

interface BlogListClientProps {
  blogPosts: Array<{
    _uid: string;
    title: string;
    description: string;
    image: string;
    type: string;
    author?: string;
    authorImage?: string;
    date?: string;
    content?: string;
    Url?: string;
  }>;
}

export default function BlogListClient({ blogPosts }: BlogListClientProps) {
  return (
    <main className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-24">
      {blogPosts.map((blog, index) => (
        <motion.div
          key={blog._uid}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.4 }}
        >
          <BlogCard
            id={blog._uid}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            type={blog.type}
            Url={formatUrlForSEO(blog.Url || "")}
          />
        </motion.div>
      ))}
    </main>
  );
} 