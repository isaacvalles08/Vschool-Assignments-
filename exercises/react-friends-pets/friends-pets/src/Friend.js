import React from 'react'
import Pet from './Pet'

function Friend(props){
    const pets = props.pets.map(pet => <Pet name={pet.name} breed={pet.breed} />)
return <div className='friends'>
    <h1>{props.name} - {props.age}</h1>
    <h4>{pets}</h4>
    </div>

}



export default Friend