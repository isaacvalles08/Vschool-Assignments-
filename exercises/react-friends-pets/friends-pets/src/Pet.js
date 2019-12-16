import React from 'react'


function Pet(props){
    return(
        <div className='pets'>
           <ul>
              <h1>{props.name}, {props.breed}</h1>
          </ul>
        </div>

    )
    // return <div>
    //     <h4>{props.name}</h4>
    //     <h5>{props.type}</h5>
    // </div>
}
export default Pet
