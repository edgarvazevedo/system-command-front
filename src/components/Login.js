import React, { useState, useContext, useEffect  } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../apis/api";


import { AuthContext } from "../contexts/authContext"

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const navigate = useNavigate();

const {loggedInUser, setLoggedInUser} = authContext

console.log("loggedInUser", loggedInUser)

useEffect(() => {
  if (loggedInUser.token && loggedInUser.user.role === "ADMIN") {
    navigate("/admin");
  } else if (loggedInUser.token && loggedInUser.user.role === "USER") {
    navigate("/");
  }

},[])








  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/login", state);
      console.log("erro", response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
        
       
      );
      if (setLoggedInUser.token && setLoggedInUser.data.user.role === "ADMIN") {
        navigate("/admin");
      } else if (setLoggedInUser.token && setLoggedInUser.data.user.role === "USER") {
        navigate("/");
      }

      setErrors({ password: "", email: "" });
      navigate("/");
    } catch (err) {
      console.error(err);
      console.log(1234)
     
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <div>
        <label htmlFor="signupFormEmail">E-mail</label>
        <input
          type="email"
          name="email"
          id="signupFormEmail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormPassword">Password</label>
        <input
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit">Login!</button>

        <Link to="/signup">Register</Link>
      </div>
    </form>
  );
}

export default Login;