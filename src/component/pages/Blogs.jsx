import React from 'react'
import Hero from '../Hero'
import { blogData } from '../../assets/assets'
import BlogCard from '../BlogCard'

const Blogs = () => {
  return (
    <div>
      <Hero/>
      <h1 className='text-3xl font-bold my-3 text-center sm:text-start px-4 '>
        All Blogs 
      </h1>
      <p className='sm:text-base px-4 lg:text-base mx-auto leading-6 max-w-2xl'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam necessitatibus, id impedit tempore accusamus delectus tempora minima praesentium saepe natus facilis quaerat eligendi odit aliquam dolor temporibus totam rem doloribus!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 sm:px-4 my-6">
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

export default Blogs