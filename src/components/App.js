import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../components/Home";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Navbar from "./Navbar";

import ProductCreate from "../pedido/ProductCreate";
import ProductDetail from "../pedido/ProductDetail";
import ProductDelete from "../pedido/ProductDelete";

import ProtectedRoute from "../components/ProtectedRoute";
import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <AuthContextComponent>
    <Navbar />
        <div className="container mt-5"></div>
      <Routes>
        <Route path="/" element={<ProtectedRoute component={Home} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
              path="/product/create"
              element={<ProtectedRoute component={ProductCreate} />}
            />
        <Route
              path="/product/:id"
              element={<ProtectedRoute component={ProductDetail} />}
            />
            <Route
              path="/product/delete/:id"
              element={<ProtectedRoute component={ProductDelete} />}
            />
      </Routes>
    </AuthContextComponent>
  );
}

export default App;