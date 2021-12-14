import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import videoIntro from "../assets/videoplayback.mp4";

function Home() {
  return (
    <div id="home">
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
      <div className="d-flex flex-column align-items-center">
        <Link className="btn btn-lg btn-primary" to="/auth/signup">
          Signup here!
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Home;