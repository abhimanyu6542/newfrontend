import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navmenubar from './Navmenubar'
import Footer from './Footer'
import '../App.css'

import axios from "axios";

const initialState = {
  fname: "",
  phoneNumber: "",
  email: "",
  password: "",
};


const Register = () => {
    const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { fname, phoneNumber, email, password } = state;

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      navigate("/profile");
    }
  }, []);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3200/auth/signup",
      state
    );
    console.log(response);
    if(response.status===200){
      navigate("/login");
    }
  };
  return (
    <>
      <Navmenubar />
      <div style={{ flex: 3 }}>
          <p className="createaccountTxt">Create New Account</p>
          <form onSubmit={handleSignUp}>
          
            <input
              id="fname"
              name="fname"
              value={fname}
              type="text"
              placeholder="Full Name"
              onChange={handleInputChange}
              className="inputText m-2"
              required
            />
            <br />
            <input
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              type="text"
              placeholder="Phone Number"
              onChange={handleInputChange}
              className="inputText m-2"
              required
            />
            <br />
            <input
              id="email"
              name="email"
              value={email}
              type="email"
              placeholder="youremail@email.com"
              onChange={handleInputChange}
              className="inputText m-2"
              required
            />
            <br />
            <input
              id="password"
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
              className="inputText m-2"
              required
            />
            <br />
            <input type="submit" className="btnforsignup btn btn-success m-3" value="Sign Up" />
          </form>
          <Link className='text-center' to={"/login"}>
            <p >
              Already have a account
            </p>
          </Link>
        </div>
      <Footer />
    </>
  )
}

export default Register