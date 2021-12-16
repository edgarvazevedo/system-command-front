import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../components/Home";
import Signup from "../components/Signup";
import Login from "../components/Login";

import HomeAdm from "./Admin/HomeAdm";
import Product from "../pedido/Product";

import Sobre from "./Sobre";

import ProductDelete from "./Admin/ProductDelete";

import ProductEdit from "./Admin/ProductEdit";

import { AuthContextComponent } from "../contexts/authContext";
import ProductCreate from "./Admin/ProductCreate";

function App() {
  return (
    <AuthContextComponent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/product"
          element={<ProtectedRoute component={Product} />}
        />
        <Route path="/sobre" element={<Sobre />} />
        <Route
          path="/home-admin"
          element={<ProtectedRoute component={HomeAdm} />}
        />
        <Route
          path="/criar-produto"
          element={<ProtectedRoute component={ProductCreate} />}
        />
        <Route
          path="/deletar-produto/:id"
          element={<ProtectedRoute component={ProductDelete} />}
        />

        <Route
          path="/editar-produto/:id"
          element={<ProtectedRoute component={ProductEdit} />}
        />
      </Routes>
    </AuthContextComponent>
  );
}

export default App;
