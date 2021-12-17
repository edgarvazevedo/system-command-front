import Navbar from "./Navbar";

import "./Sobre.css";
import partner from "../assets/noun-partner-3201804.png";

function Sobre() {
  return (
    <div>
      <Navbar />
      <div className="image-login mt-5">
        <img src={partner} alt="Sobre" />
      </div>

      <div className="text-center ms-3 me-3 mt-3">
        <p>
          Projeto desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/elizeu-santos-048730bb"
            target="_blank"
          >
            Elizeu Santos{" "}
          </a>{" "}
          e{" "}
          <a href="https://www.linkedin.com/in/edgarvazevedo" target="_blank">
            Edgar Azevedo
          </a> durante a ultima semana de Bootcamp da Ironhack. A ideia incial era
          ser criada um sistema de comandas de restaurantes onde o cliente faz o
          pedido pelo aplicativo e em seguida o pedido é enviado para a cozinha
          em tempo real.
        </p>
      </div>
    </div>
  );
}


export default Sobre;
