import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"

import Carrinho from "./Carrinho/carrinho"

import "./Home.css";
import videoIntro from "../assets/videoplayback.mp4";

function Home() {
  return (
    
    <div>
      <Navbar />
      <div>
        <div id="videoContainer"/>
        <video
          loop
          autoPlay
          muted
          id="video"
          src={videoIntro}
          type="video/mp4"
        ></video>
      </div>
      <div className="text-center">
        <h1>System Command</h1>
        <p>Home</p>
        <div className="d-flex flex-column align-items-center">
          <Link className="btn btn-lg btn-primary" to="/signup">
            Signup here!
          </Link>
        </div>
      </div>
      <Carrinho/>
    </div>
    );
}

export default Home;
