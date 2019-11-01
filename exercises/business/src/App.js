import React from 'react'

// My components 
import Nav from 'Nav'
import Info from 'info'
import List from 'List'
import Img from 'Img'
import Footer from 'Footer'
import '/.style.css'


const App = () => {
    return (
        <div className= 'container'>
        <Nav /> 
        <Info />
        <List />
        <Img />
        <Footer />

        </div>
    )
}

export default App