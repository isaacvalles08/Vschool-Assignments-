import React from 'react'
import Navbar from './Navbar'

function Header(){
    return (
        <div> 
             <Navbar />
             <div className='header'>
                 <h1 className='headerTitle'>Clean Blog</h1>
                <p className='headerSub'>A Blog Theme by Start Up</p>
             </div>
           
        </div>
    )
}



export default Header