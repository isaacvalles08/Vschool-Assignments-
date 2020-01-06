import React from 'react'



class Badge extends React.Component{
    render(){
        return (
            
                <div className='container2'>
                        <div className='header'>
                            <h1 className='name'>Name:{}</h1>
                            <h1 className='birth'>Place of Birth:</h1>
                            <h1 className='email'>Email:</h1>
                            <h1 className='phone'>Phone:</h1>
                            <h1 className='favFood'>Favorite Food:</h1>
                            <textarea className='area'></textarea>
                        </div>
                </div>
        )
    }
} 


export default Badge