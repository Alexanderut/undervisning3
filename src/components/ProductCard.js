import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"

function ProductCard({ produkt }) {
  return (
    <StyledDiv className="col-3">
    <div className="product-card">
      <h2>{produkt.navn}</h2>
      <p><strong>{produkt.pris}</strong> kr</p>
      <img src={produkt.bilde} alt={`Bilde av ${produkt.navn}`} />
      <p>{produkt.info}</p>

     <Link to={`/products/${produkt.id}`}> <button className='btn btn-outline-dark'>Se mer</button> </Link>   

        <br/>
      </div>
    </StyledDiv>
  );
}

export default ProductCard;


const StyledDiv = styled.div`

.product-card{
    display:grid;
    justify-content:center;
    border: 1px solid gray;
    margin:10px ;
    border-radius:10px ;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
   
.product-card:hover{
        scale:1.01;
        background-color: rgb(0 0 0 / 0.1);
    }



`