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
            <img src={image} alt="img" />
            </Link>
            <p>{category}</p>
            <h1>{title}</h1>

            <div className="">
                <img src={author_image} alt="" />
                <p>{author_name}</p> 
                <p>{date}</p>
            </div>
        </div>
    )
}

export default BlogCard