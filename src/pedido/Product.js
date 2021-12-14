import { useState, useEffect } from "react";

import api from "../apis/api";

function Product() {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/product`);

        setProductDetails([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProduct();
    
  }, []);

  
  return (
    <div>
      {productDetails.map((currentProduct) => ( 
         
        <div key={currentProduct.id}>
        <p>Nome <span>{currentProduct.name}</span></p>
        <p>Descrição <span>{currentProduct.description}</span></p>
        <p>Preço <span>{currentProduct.prince}</span></p>
        
      </div>
      
        
      ))}
    </div>
  );
}

export default Product;
