import "./HomePage.css"
import burger from "../imgs/hamburger_53876-25481.jpg"

function HomePage(props) {
  return (
    <div>
        <div>
          <img src={burger} alt="hamburguer" />
        </div>
        <div>
              <h1>hadaihas</h1>
              <button type="button" className="btn btn-primary btn-lg">Começar</button>
        </div>
    </div>
  );
}

export default HomePage;
