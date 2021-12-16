import {React} from "react";
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
      <div className="texto-home">
        <h1>System Command</h1>
        <p>Pode fazer seu pedido e retirar no nosso restaurante!</p>
        <div className="d-flex flex-column align-items-center pt-5">
          <Link className="btn btn-lg btn-primary" to="/signup">
            Cadastre-se aqui!
          </Link>
        </div>
      </div>
      <Carrinho/>
    </div>
    );
}

export default Home;
