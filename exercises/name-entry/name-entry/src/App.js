import React from 'react';



class App extends React.Component{
  constructor(){
    super()
    this.state = {
    }
  }
  render(){
    return (
      <div className="App">
            <form>
              <input type="text" name="names" id="fullName"/>
            <h1>{}</h1>
            <button className='submit'>Submit</button>
            </form>
            <ol></ol>
      </div>
    );
  }
}
  

export default App;
