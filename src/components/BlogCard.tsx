import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowCircleRight } from "react-icons/fa";


interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  type: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, description, image, type }) => {

  return (
    <div className="rounded-lg shadow-lg overflow-hidden group custom-hover-effect relative h-full bg-white/50 group-hover:bg-white/0">
      <div className="relative">
        <img src={image} alt={`Image for ${title}`} className="w-full h-48 object-cover transition-all duration-300 grayscale group-hover:grayscale-0" />
        <span className=" font-poppins absolute top-2 left-2 bg-transparent border bg-white/50 text-black group-hover:bg-white/80 text-xs font-bold tracking-wider px-2 py-0.5 rounded-full">
          • {type}
        </span>
      </div>
      <div className="p-4">
        <h2 className="relative md:h-24 h-16 z-10 md:text-2xl text-md tracking-wide font-anton mb-2 text-black/90">{title}</h2>
        <p className="text-gray-700 mb-4 md:h-16 h-20 text-sm font-poppins">{description}</p>
        <Link href={`/blog/${id}`} passHref>
          <div className="text-black text-lg hover:underline flex items-center justify-between cursor-pointer">
            Read More
            <div className="ml-2 transform transition-transform duration-300 group-hover:-rotate-45">
              <FaArrowCircleRight className="text-3xl md:text-6xl text-purple-600" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;