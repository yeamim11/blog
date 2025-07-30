// import React from 'react'
// import { Link } from 'react-router-dom'


// const BlogCard = (
//     id,
//     title,
//     category,
//     image,
//     author_name,
//     author_image,
//     date,
// ) => {
//     return (
//         <div className="border-1 border-gray-300 shadow-md p-3 rounded-md">
//             <Link to={`/blog/${id}`}>
//             <img src={image} alt="img" />
//             </Link>
//             <p>{category}</p>
//             <h1>{title}</h1>

//             <div className="">
//                 <img src={author_image} alt="" />
//                 <p>{author_name}</p> 
//                 <p>{date}</p>
//             </div>
//         </div>
//     )
// }

// export default BlogCard








import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, category, image, author_name, author_image, date }) => {
  return (
    <div className="border border-gray-300 shadow-md p-3 rounded-md">
      <Link to={`/blog/${id}`}>
        <img src={image} alt="Blog cover" className="w-full h-48 object-cover rounded" />
      </Link>

      <p className="text-sm text-gray-500 mt-2">{category}</p>
      <h1 className="text-lg font-semibold mt-1">{title}</h1>

      <div className="flex items-center gap-3 mt-4">
        <img
          src={author_image}
          alt="Author"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium">{author_name}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
