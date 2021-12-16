import { useState, useEffect } from "react";
import FormField from "../forms/FormField";

import NavbarAdm from "../Admin/NavbarAdm";
import api from "../../apis/api";

import { useNavigate, useParams } from "react-router-dom";

function ProductEdit() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    inStock: 0,
    pictureUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/product/${id}`);

        setProductData({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchProduct();
  }, [id]);

  function handleChange(e) {
    if (e.target.files) {
      return setProductData({
        ...productData,
        [e.target.name]: e.target.files[0],
      });
    }

    setProductData({ ...productData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.patch(`/product/${id}`,productData);

      console.log(response);
      setLoading(false);
      navigate("/home-admin");
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <div>
      <NavbarAdm />
      <h1>Novo Produto</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome do Produto"
          id="productFormName"
          name="name"
          onChange={handleChange}
          value={productData.name}
          required
          readOnly={loading}
        />

        <FormField
          label="Descrição"
          id="productFormManufacturer"
          name="description"
          onChange={handleChange}
          value={productData.description}
          required
          readOnly={loading}
        />

        <FormField
          type="number"
          label="Preço do produto"
          id="productFormPrice"
          name="price"
          onChange={handleChange}
          value={productData.price}
          required
          min="0"
          readOnly={loading}
        />

        <FormField
          type="number"
          label="Quantidade em estoque"
          id="productFormInStock"
          name="inStock"
          onChange={handleChange}
          value={productData.inStock}
          required
          min="0"
          readOnly={loading}
        />

        <FormField
          type="file"
          label="Imagem"
          id="productFormPicture"
          name="pictureUrl"
          onChange={handleChange}
          readOnly={loading}
        />

        <div className="mb-3 text-right">
          <button
            className="btn-Submit btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Salvar Alteração!
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductEdit;
