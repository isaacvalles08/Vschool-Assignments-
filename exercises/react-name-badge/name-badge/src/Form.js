import React from 'react'

class Form extends React.Component{
    constructor(){
      super()
      this.state = {
          firstName:'',
          lastName:'',
          email:'',
          placeOfBirth:'',
          phoneNumber:'',
          favFood: '',
          about:'',  
        }
    }
    handleChange = (e) =>{

        this.setState({
          [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
      e.preventDefault()

    }
   
    render(){
        return (
            <div className="form">
              <div className='container'>
                <form className="nameBadge" onSubmit={this.handleSubmit}>
                  <input type='text' name='firstName' placeholder='First Name' value={this.state.firstName} onChange={this.handleChange}/>
                  <input type='text' name='lastName' placeholder='Last Name' value={this.state.lastName} onChange={this.handleChange}/>
                  <input type='email' name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/>
                  <input type='text' name='placeOfBirth' placeholder='Place of Birth' value={this.state.placeOfBirth} onChange={this.handleChange}/>
                  <input type='phone' name='phoneNumber' placeholder='Phone #' value={this.state.phoneNumber} onChange={this.handleChange}/>
                  <input type='text' name='favFood' placeholder='Favorite Food' value={this.state.favFood} onChange={this.handleChange}/>
                  <textarea name="about" cols="40" rows="10" className='textArea' placeholder='Tell Us Something About Yourself' value={this.state.about} onChange={this.handleChange}></textarea>
                  <button className='submit'>Submit</button>
                </form>
              </div>
              
            </div>
          )
        }
      }

export default Form