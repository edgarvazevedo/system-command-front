import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../components/Home";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Navbar from "./Navbar";

import ProductCreate from "../pedido/ProductCreate";
import Product from "../pedido/Product";
import ProductDelete from "../pedido/ProductDelete";

import Sobre from "./Sobre";

import ProtectedRoute from "../components/ProtectedRoute";
import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <AuthContextComponent>
      <Navbar />
      <div className="container mt-5"></div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/product/create"
          element={<ProtectedRoute component={ProductCreate} />}
        />
        <Route path="/product" element={<ProtectedRoute component={Product} />} />
        <Route
          path="/product/delete/:id"
          element={<ProtectedRoute component={ProductDelete} />}
        />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </AuthContextComponent>
  );
}

export default App;
