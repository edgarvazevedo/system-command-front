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

console.log("teste",productDetails)    

return (
  <div>
    <h1>Menu</h1>
   
    {product.map((currentProduct) => { 
      return(
      key={currentProduct._id} 
      )
  })}     
  
  </div> 
)
  
  
};
export default Product;