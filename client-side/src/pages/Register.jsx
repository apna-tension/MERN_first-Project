// _________________________________________________
// -------------------------------------------------
// REGISTER PAGES --------------------------------
// -------------------------------------------------
// _________________________________________________

// Register.jsx

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/register.css"; // Import the CSS file
import { useAuth } from "../store/auth";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  
  
  const userEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: e.target.value,
    });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        
        console.log("Registration Successful : ");
        
        // store the registration token in local storage
        const res_data = await res.json();
        storeTokenInLS(res_data.token);

        console.log("response = ", res_data);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      } else {
        console.log("Registration Failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="registerMain">
        <div className="register-container">
          <h1>Register</h1>
          <div className="register-form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">UserName</label>
                <br />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="username"
                  required
                  autoComplete="off"
                  value={user.username}
                  onChange={userEvent}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={userEvent}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <br />
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="phone"
                  required
                  autoComplete="off"
                  value={user.phone}
                  onChange={userEvent}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={userEvent}
                />
              </div>
              <div className="form-group">
                <button type="submit" name="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
