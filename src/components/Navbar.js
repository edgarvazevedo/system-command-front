import { useContext } from "react";
import { NavLink } from "react-router-dom";


import { AuthContext } from "../contexts/authContext";

function Navbar() {
  const { loggedInUser, logout } = useContext(AuthContext);
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-between align-items-center text-light">
      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/product"
              >
                Pedido
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/sobre"
              >
                Sobre
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          {loggedInUser.user._id ? (
            <>
              <span>Bem-vindo, {loggedInUser.user.name}</span>

              <button onClick={()=> logout()} className="btn btn-link">
                Sair
              </button>
            </>
          ) : (
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/login"
            >
              Entrar
            </NavLink>
            
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;