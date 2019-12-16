import React from 'react'
import Square from './Square'
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            colors: ['white', 'white', 'white', 'white']
        }
    }

    colorChange = () => {
        this.setState(() =>{
           return {colors: ['black', 'black', 'black', 'black']}
        })  
    }
    
        changeColorBack = () => {
            this.setState(() => {
                return {colors: ['purple', 'purple', 'white', 'white']}
            })
       
    }
    render(){
        const colors = this.state.colors.map(color =>  <Square colors={color} />)
        return <div className='place'>
            {colors}
            <button className='button1' onClick={this.colorChange}>Change Color</button>
            <button className='button2' onClick={this.changeColorBack}>Change Back</button>
            <button className="button3">Change to random color</button> 
            
            <br></br>

            <br> </br>

        </div>
    }
}



   


export default App



//wher are we going with this? 
//where can we go??