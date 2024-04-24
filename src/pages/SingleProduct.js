import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showParts, setShowParts] = useState(false);  // State to toggle parts visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        const singleProd = data.produkter.find(prod => prod.id === id);
        setProduct(singleProd);
        console.log(singleProd)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]); // Add id to dependency array to re-fetch when id changes

  return (
    <StyledDiv className='container'>
      {product ? (
        <div className="product-card">
          <h2>{product.navn}</h2>
          <p><strong>{product.pris}</strong> kr</p>
          <img src={product.bilde} alt={`Bilde av ${product.navn}`} />
          <p>{product.info}</p>
          <button onClick={() => setShowParts(!showParts)}>
            {showParts ? 'Skjul Deler' : 'Vis Deler'}
          </button>
          {showParts && (
            <div>
              <h3>Deler:</h3>
              <ul>
                {product.deler.map((del) => (
                  <li key={del.id}>
                    {del.navn} - {del.pris} kr
                    <img src={del.bilde} alt={`Bilde av del: ${del.navn}`} style={{width: '100px', height: '100px'}} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin-top: 65px;
  .product-card {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-top: 10px;
  }
`;
