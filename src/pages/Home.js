import React, {useState} from 'react'
import styled from 'styled-components';
import Test from './Test';

export default function Home() {


    const [open, setOpen] = useState(false)
    const [displayDør, setDisplayDør] = useState("Lukket")
        
    const handleOpen = ()=>{
        setOpen(!open)
        if(open == false){
            setDisplayDør("Lukket")
        } else{
            setDisplayDør("Åpen")
        }
    }


  return (
    <NavStyle>
    <h1>    Hello there from Home page</h1>
    <div className='boksSomHolderTest'>
    <Test navn={"alexander"} alder={34} />
    </div>

<button onClick={handleOpen} className='btn btn-primary'>Lukk/åpne dør</button>

<h1>Døra er: {displayDør}</h1>


    </NavStyle>
  )
}


const NavStyle = styled.div`
margin-top: 65px;


.boksSomHolderTest{
    margin:50px ;
    padding:50px;
    border:1px solid black;

}
`