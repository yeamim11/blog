import React from 'react'
import { blogData } from '../assets/assets'
import BlogCard from './BlogCard'


const LatestBlog = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center sm:text-start'>
                Latest Blog
            </h1>

            <div className="">
                {blogData.map((blog, index) => (
                    <BlogCard
                        key={index}
                        id={blog._id}
                        title={blog.title}
                        image={blog.image}
                        category={blog.category}
                        author_name={blog.author.name}
                        author_image={blog.author.image}
                        date={blog.date}
                    />
                ))}
            </div>

        </div>
    )
}

export default LatestBlog