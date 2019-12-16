import React from 'react'

function Spot(props){
    let dollars;
    if(props.price < 100){
         dollars = "$"
    }else if(props.price < 1000){
        dollars = "$$"
    }else{
        dollars = "$$$"
    }
   
    return  <div className= 'vacation'>
                <h1 >{props.place}</h1>
                <p>{props.time}</p>
                <h2>{dollars}{props.price}.00</h2>
            </div>

}




export default Spot