import React from 'react'
import Spot from './Spot'
import vacationSpots from './vacationData';


function App(){
 const spotComponents = vacationSpots.map(location => {
     return <Spot key={location.id} place={location.place} price={location.price} time={location.timeToGo}  />
 })
    return <div>
             {spotComponents}
         </div>
    
}



export default App