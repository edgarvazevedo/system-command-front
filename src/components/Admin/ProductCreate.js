import { useState } from "react";
import FormField from "../forms/FormField";

import NavbarAdm from "../Admin/NavbarAdm"
import api from "../../apis/api";

import { useNavigate } from "react-router-dom";

function ProductCreate() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0, 
    inStock: 0,
    pictureUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    if (e.target.files) {
      return setProductData({
        ...productData,
        [e.target.name]: e.target.files[0],
      });
    }

    setProductData({ ...productData, [e.target.name]: e.target.value });
  }

   async function handleFileUpload(file) {
    try {
      const uploadData = new FormData();

      uploadData.append("picture", file);

      const response = await api.post("/upload", uploadData);

      console.log(response);

      return response.data.url;
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const pictureUrl = await handleFileUpload(productData.pictureUrl);

      const response = await api.post("/product", {
        ...productData,
        pictureUrl,
        
      });

      console.log(response);
      setLoading(false);
      navigate("/home-admin")
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
          <button onClick={handleSubmit} type="submit" className="btn btn-primary">
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>{" "}
                <span>Carregando...</span>{" "}
              </>
            ) : (
              "Enviar"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductCreate;