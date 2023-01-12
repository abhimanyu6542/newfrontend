import React, { useState, useEffect } from "react";
import "./App.css";
import Afterlogin from "./components/AfterLogin";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Register";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) setIsLoggedIn(true);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route
            path="/Afterlogin"
            element={<Afterlogin isLoggedIn={isLoggedIn} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;