import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

import Navbar from "../components/Navbar"

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

      const authContext = useContext(AuthContext);
      const { loggedInUser } = authContext;
 

  return (
    <div>
      {loggedInUser.token && loggedInUser.user.role === "USER"
      ? <Navbar /> 
      : null}
  
      {productDetails.map((currentProduct) => (
        <div key={currentProduct.id}>
          <div className="card">
            <img
              src={currentProduct.pictureUrl}
              className="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{currentProduct.name}</h5>

              <p class="card-text"> {currentProduct.description}</p>
              <p>
                {currentProduct.price.toLocaleString("pt-BR", {
                  currency: "BRL",
                  style: "currency",
                })}
              </p>
              <Link to="#" class="btn btn-primary">
                Adicionar ao pedido!
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
