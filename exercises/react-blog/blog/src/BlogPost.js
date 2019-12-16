import React from 'react'

function BlogPost(props){
  
    return (

        <div className='post'>
            <h1>Title: {props.title}</h1>
            <p>Subtitle: {props.subTitle}</p>
            <p>Posted By: {props.author} on {props.date}</p>
        </div>
    )
}


export default BlogPost