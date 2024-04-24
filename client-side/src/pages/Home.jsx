// Home.jsx

import React from "react";
import "../style/home.css";
// ? import the image from the image folder
import img1 from "../image/img1.png";
const Home = () => {
  return (
    <div className="home-container">
      <h1 className="heading">Welcome to Our Beautiful Website</h1>
      <p className="paragraph">
        Discover amazing content and more on our platform. Explore the wonders
        of the internet with us.
      </p>

      <div className="image-container">
        {/* <img src="../image/img1.png" alt="Beautiful Landscape" /> */}
        {/* ? use the imported image */}
        <img src={img1} alt="Beautiful Landscape" />
      </div>
    </div>
  );
};

export default Home;
