import React from 'react';



class App extends React.Component{
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      names: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitNames = this.submitNames.bind(this)
  }
  handleChange(event){
    const {name, value} = event.target
    this.setState({[name] : value})}

  submitNames(e){
    e.preventDefault()
    let name = this.state.firstName + " " + this.state.lastName
    this.state.names.push(name)
    this.setState({
      firstName: '',
      lastName: ''
    })
  }
    render(){
     const namesMapped = this.state.names.map(name => <li>{name}</li>)
    return (
      <div className="App">
            <form onSubmit={this.submitNames}>
              <input 
                type="text" 
                name="firstName" 
                onChange={this.handleChange}
                value={this.state.firstName} 
                placeholder='First Name'/>
              <input 
                type='text' 
                name='lastName' 
                onChange={this.handleChange}
                value={this.state.lastName} 
                placeholder='Last Name' />
            <button className='submit' onChange={this.handleChange}>Submit</button>
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
            <ol>{namesMapped}</ol>
      </div>
    );
  }
}
  

export default App;
