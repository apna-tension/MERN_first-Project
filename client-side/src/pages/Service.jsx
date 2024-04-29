import React from "react";
import { useAuth } from "../store/auth";

const Service = () => {
  const { service } = useAuth();
  const fun = () => {
    console.log("The service is : ", service);
  }
  return (
    <div className="service-container">
      <h1 className="heading">Our Services</h1>
      <p className="paragraph">Aminul</p>
      <button onClick={fun}>Click</button>
      {/* map to print all the data card */}
      
      
      <div className="service-card">
        <div className="card">
          <img src="https://placekitten.com/200/200" alt="Service 1" />
          <h2>Service 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            felis non nisi scelerisque euismod ut et sapien.
          </p>
        </div>

        <div className="card">
          <img src="https://placekitten.com/200/200" alt="Service 2" />
          <h2>Service 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            felis non nisi scelerisque euismod ut et sapien.
          </p>
        </div>

        <div className="card">
          <img src="https://placekitten.com/200/200" alt="Service 3" />
          <h2>Service 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            felis non nisi scelerisque euismod ut et sapien.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
