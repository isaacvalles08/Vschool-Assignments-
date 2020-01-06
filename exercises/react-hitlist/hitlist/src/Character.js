import React from 'react'
import styled from 'styled-components'

class Character extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        return(
            <CharacterStyles>
            {this.props.characters.map(item => {
                return(
                    <div>
                        <div>
                        <h1>{item.name}</h1>
                        <img src={item.image} className='img' /> 
                        </div>
                    </div>
                   
                    
                )
            })}
            </CharacterStyles>
           
        )
    }
}
const CharacterStyles = styled.div`
background-color: aliceblue
display:flex
flex-wrap: wrap;
align-content: space-between;
padding: 10px;
margin: 50px

`



export default Character 