import React from "react";
import { Link } from "react-router-dom";
import Img from "../assets/logo.png";

function Home() {
  return (
    <div className="text-center">
      <img
        src={Img}
        alt="logo"
      />
      <h1>System Command</h1>
      <p>Home</p>
      <div className="d-flex flex-column align-items-center">
        <Link className=  "btn btn-lg btn-primary" to="/auth/signup">
          Signup here!
        </Link>
      </div>
    </div>
  );
}

export default Home;