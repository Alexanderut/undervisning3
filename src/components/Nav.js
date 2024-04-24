import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <StyledNav>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
      <a href='/' className='lenke'><MenuItem>Home</MenuItem></a>
        <Link to="/kalkis" className='lenke'><MenuItem>Kalkulator</MenuItem></Link>
        <Link to="/products" className='lenke'><MenuItem>Produkter</MenuItem></Link>

      </Menu>
    </StyledNav>
  );
}


const StyledNav = styled.nav`
  background-color: #4CAF50; /* Vibrant green background */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 5px;
    border-radius: 5px;
    transition: all 0.3s linear;
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #4CAF50;
  }


.lenke{
    text-decoration:none ;
    color: black;
}

.lenke:hover{
    color:whitesmoke ;
}
`;

const MenuItem = styled.div`
  padding: 10px 20px;
  font-size:18px;
  font-weight:600;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #367c39; /* Darker shade of green for hover effect */
  }
`;
