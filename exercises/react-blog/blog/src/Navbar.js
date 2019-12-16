import React from 'react'


function Navbar(){
    return (
        <nav className='navbar'>
            <div className='container'>
                <h1 className='navtitle'>Start Boootstrap</h1>
                <div className='navContainer'>
                <ul>
                    <li className='navitems'>Home</li>
                    <li className='navitems'>About</li>
                    <li className='navitems'>Sample Post</li>
                    <li className='navitems'>Contact</li>
                </ul>
                
                </div>
            </div>
        </nav>
       
    )
}

export default Navbar