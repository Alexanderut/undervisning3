import React,{useState, useEffect} from 'react'
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';


export default function Products() {

    const [products, setProducts] = useState([])

    useEffect(()=>{

        const fetchData = async () =>{
            try{
                const response = await fetch('./data.json')
                const data = await response.json()
                setProducts(data.produkter)
            }
         catch (error){
            console.log(error)
        }
    }
fetchData()

    },[])



    return (
    <StyledDiv>
    <div className='container'>
    <div className='row justify-content-center'>
              {products.map((product)=>(
            <ProductCard produkt={product} />
        ))}
    </div>

    </div>
      

    </StyledDiv>
  )
}


const StyledDiv = styled.div`
margin-top:65px ;

`
