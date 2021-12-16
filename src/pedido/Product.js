import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

import Navbar from "../components/Navbar";
import NavbarAdm from "../components/Admin/NavbarAdm";
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
      {loggedInUser.token && loggedInUser.user.role === "USER" ? (
        <Navbar />
      ) : (
        <NavbarAdm />
      )}

      {productDetails.map((currentProduct) => (
        <div key={currentProduct.id} className="pt-5">
          <div className="card">
            <img
              src={currentProduct.pictureUrl}
              className="card-img-top"
              alt="..."
            />
            <div class="card-body ">
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
              <div className="editar">
                {loggedInUser.user.role === "ADMIN" ? (
                  <Link to={`/deletar-produto/${currentProduct._id}`}>
                    <i class="fas fa-trash-alt"></i>
                  </Link>
                ) : null}
                {loggedInUser.user.role === "ADMIN" ? (
                  <Link to={`/editar-produto/${currentProduct._id}`}>
                    <i className="fas fa-edit"></i>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
