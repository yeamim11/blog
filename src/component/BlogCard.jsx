import React from 'react'
import { Link } from 'react-router-dom'


const BlogCard = (
  {
    id,
    title,
    category,
    image,
    author_name,
    author_image,
    date,
  }
) => {
  return (
    <div className="border-1 border-gray-300 shadow-md p-3 rounded-md">
      <Link to={`/blog/${id}`}>
        <img src={image} alt="img"
          className="flex items-center justify-center w-full mx-auto cursor-pointer transform duration-300 hover:scale-105" />
      </Link>
      <p className="text-[#4B6BFB] font-semibold my-3" >{category}</p>
      <h1 className="text-xl font-bold">{title}</h1>

      {/* ================================== */}

      <div className="">
        <img src={author_image} alt=""
        className="w-8 h-8 rounded-full"
         />
        <p className="text-lg font-bold text-gray-600">{author_name}</p>
        <p className="text-lg font-bold text-gray-600">
          {new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  )
}

export default BlogCard