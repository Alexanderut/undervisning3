import React, {useState} from 'react'
import styled from 'styled-components';

export default function Kalkulator() {

    const [teller, setTeller] = useState("")
    const [count, setCount] = useState(0)
    const [character, setCharacter] = useState("")
    const [charCoutnt, setCharCount] = useState(0)


const handleInput = (event) =>{
    setTeller(event.target.value)
}

const handleFormInput = (e)=>{
    e.preventDefault()
    setCount(teller.length)
}


const handleInputCharacter = (event) =>{
    setCharacter(event.target.value)
}

const handleCharacter = (e) =>{
    e.preventDefault()

    let  charSum = 0
    for(let i = 0; i < teller.length; i++){
        if(teller[i] === character){
            charSum ++
        } 
        setCharCount(charSum)
    }
}

    return (
    <StyledDiv>
   <div className='topInputWrapper'>
   <label>Skriv bokstav du ønsker å teller her</label>
    <form onSubmit={handleCharacter}>
    <input onChange={handleInputCharacter} placeholder="Skriv en bokstav..."/>
    <button type='submit' className='btn btn-primary mx-2'>Registrer bokstav</button>
    </form>
    {character === "" ? <h3>Du har ikke valgt bokstav enda...</h3> :     <h3>Bokstaven du har valgt er: {character}</h3>
}
</div>

    
<div className='my-5'>
<label>Skriv inn teksten du ønsker å telle her</label>

    <form onSubmit={handleFormInput}>
    <textarea className='texarea' onChange={handleInput} rows="10"/>
    <div>
            <button type='submit' className='btn btn-success'>Tell ting</button>

    </div>
    </form>
</div>
    
<div>
    Det er <strong>{count}</strong> bokstaver i teksten over!
</div>
    
    <div>
        <h3>Teksten har <strong>{charCoutnt}</strong> <strong>{character} </strong>i setningen</h3>
    </div>
    </StyledDiv>
  )
}


const StyledDiv = styled.div`
margin-top: 65px;

.topInputWrapper{
    margin-top:100px ;
}

.texarea{
    width:60%;
}
`