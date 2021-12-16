import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../apis/api";

import Navbar from "./Navbar";
import logoSignup from "../assets/logo-signup.png";

function Signup(props) {
  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await api.post("/signup", state);
      setErrors({ name: "", password: "", email: "" });
      navigate("/login");
    } catch (err) {
      if (err.response) {
        console.error(err.response);
        return setErrors({ ...err.response.data.errors });
      }

      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Navbar />
      <h1>Signup!</h1>
      <img src={logoSignup} alt="Signup" />

      <div className="ms-5 pb-3">
        <label htmlFor="signupFormName"></label>
        <input
          placeholder="Nome"
          type="text"
          name="name"
          id="signupFormName"
          value={state.name}
          error={errors.name}
          onChange={handleChange}
        />
      </div>

      <div className="ms-5 pb-3">
        <label htmlFor="signupFormEmail"></label>
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          id="signupFormEmail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}
        />
      </div>

      <div className="ms-5 pb-3">
        <label htmlFor="signupFormPassword"></label>
        <input
          placeholder="Password"
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />
      </div>

      <div className="botao pt-5">
        <button type="submit" className="btn btn-primary">
          Cadastre-se!
        </button>
        <div>
          <Link to="/login">Já tem conta? Clique aqui para fazer login!</Link>
        </div>
      </div>
    </form>
  );
}

export default Signup;
