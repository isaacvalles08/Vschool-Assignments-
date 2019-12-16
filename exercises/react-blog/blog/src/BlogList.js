import React from 'react'
import BlogPost from './BlogPost'
import BlogData from './BlogData'

function BlogList(){
    const blogItems = BlogData.map((blog) => {
       return  <BlogPost title= {blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date} />})
    
    return  <div>
                {blogItems}
                
         </div>
    
}

export default BlogList