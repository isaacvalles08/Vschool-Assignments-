import React from 'react'
import Pet from './Pet'

function Friend(props){
    const pets = props.pets.map(pet => <Pet name={pet.name} breed={pet.breed} />)
return <div>
    <h1>{props.name}</h1>
    <p>{props.age}</p>
    <h4>{pets}</h4>
    </div>

}



export default Friend