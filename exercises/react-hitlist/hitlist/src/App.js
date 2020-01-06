import React from 'react';
import Character from './Character'
import Header from './Header'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      character: []
    }
  }
  componentDidMount(){
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
     .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          character: data
        })
      })
    }
    
    
  render(){


      return (
        <div>
        <Header />
        <Character characters={this.state.character}/>
        </div>
      )
        
      
  }
}

export default App;
