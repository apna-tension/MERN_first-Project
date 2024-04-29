import React from "react";
import { useAuth } from "../store/auth";
import img from "../image/img1.png";
import { useState } from "react";

const Service = () => {
  const { service } = useAuth();

  const [count, setCount] = useState(0);

  const data = service.response;

  const cardStyle = {
    border: "1px solid red",
    padding: "10px",
    margin: "10px",
    width: "225px",
    height: "400px",

    display: "inline-block",
  };

  const imgStyle = {
    width: "200px",
    height: "200px",
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  return (
    <div className="service-container">
      <h1 className="heading">Our Services</h1>
      {/* map to print all the data card */}
      <div className="content" style={contentStyle}>
        {data &&
          data.map((item) => (
            <div key={item.id} style={cardStyle}>
              <img style={imgStyle} src={img} alt="Service 1" />
              <h2>{item.service_name}</h2>
              <p>{item.description}</p>
              <h3>{item.price}</h3>
              <p>{item.provider}</p>
            </div>
          ))}
      </div>

      {/* Hardcoded data */}

      </div>
  );
};

export default Service;
