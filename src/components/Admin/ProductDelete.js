import { useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";

import api from "../../apis/api";

function ProductDelete() {
  const { id } = useParams();
  const navigate = useNavigate ();

  useEffect(() => {
    async function deleteProduct() {
      try {
        const response = await api.delete(`/product/${id}`);

        console.log("erro", response.data);
        navigate("/product");
      } catch (err) {
        console.error(err);
      }
    }
    deleteProduct();
  }, [id, navigate ]);

  return <div>Deletando...</div>;
}

export default ProductDelete;