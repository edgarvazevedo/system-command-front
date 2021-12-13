import React from "react";
import { Link } from "react-router-dom";
import Img from "../assets/logo.png";
import videoIntro from "../assets/videoplayback.mp4";

function Home() {
  return (
    <div>
      <div>
        <video
          playsinline
          loop
          autoplay
          muted
          id="video"
          width="1665"
          height="937"
          src={videoIntro}
          type="video/mp4"
        ></video>
      </div>
      <div className="text-center">
        <img src={Img} alt="logo" />
        <h1>System Command</h1>
        <p>Home</p>
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
