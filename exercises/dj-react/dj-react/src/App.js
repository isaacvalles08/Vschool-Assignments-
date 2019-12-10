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
        </div>
    }
}

   


export default App