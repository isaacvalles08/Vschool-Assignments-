import React from 'react'


function Pet(props){
    return(
        <div>
          <h1>{props.name}</h1>
          <h2>{props.breed}</h2>
        </div>

    )
    // return <div>
    //     <h4>{props.name}</h4>
    //     <h5>{props.type}</h5>
    // </div>
}
export default Pet
