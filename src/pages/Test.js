import React,{useState} from 'react'
import styled from 'styled-components';

export default function Test(props) {
    const [color, setColor] = useState('black');  // Initial color is black
  
    // Function to change color
    const changeColor = () => {

        if(color === "black"){
            setColor("#5E06AC") //dere kan også bruke rgb og hex farger feks. #FFC0CB
        } else{
            setColor("black")   
        }
    };
  
    return (
      <NavStyle color={color} onClick={changeColor}>
        <h1>Test komponent har et navn med seg, dette navnet er: {props.navn}. Alder er: {props.alder}</h1>
      </NavStyle>
    )
  }

  const NavStyle = styled.div`
  margin-top: 60px;
  h1 {
    color: ${props => props.color};  // Use color prop for text color
    cursor: pointer;                 // Change cursor to pointer to indicate clickability
  }

  h1:hover{
   color: red
  }
`;
