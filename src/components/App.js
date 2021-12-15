import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../components/Home";
import Signup from "../components/Signup";
import Login from "../components/Login";


import HomeAdm from "./Admin/HomeAdm";
import Product from "../pedido/Product";

import Sobre from "./Sobre";


import { AuthContextComponent } from "../contexts/authContext";
import ProductCreate from "./Admin/ProductCreate";
 
function App() {
  return (
    <AuthContextComponent>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/admin" element={<HomeAdm />} />
        <Route path="/criar-produto" element={<ProductCreate />} />
      </Routes>
    </AuthContextComponent>
  );
}

export default App;
