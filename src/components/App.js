import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar/Navbar";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </div>
  
  );
}

export default App;
