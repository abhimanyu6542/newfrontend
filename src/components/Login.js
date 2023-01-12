import React ,{useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navmenubar from './Navmenubar'
import Footer from './Footer'

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
    const [state, setState] = useState(initialState);
    const { email, password } = state;
    const navigate = useNavigate();
  
    const handleInputChange = (e) => {
      let { name, value } = e.target;
      setState({ ...state, [name]: value });
    };
    const handleLogin = async (e) => {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:3200/auth/login",
        state
      );
  
      if (response.status === 200) {
        const authToken = response.data.token;
        // console.log(response.data.user);
        await localStorage.setItem("authToken", authToken);
        navigate("/profile", { state: { user: response.data.user } });
      }
    };
  return (
    <>
       <Navmenubar />
   
    <div className="mainContainerForsignup">
      <div className="submainContainer">
       
        <div >
          <p className="createaccountTxt">Login Account</p>
          <form onSubmit={handleLogin}>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleInputChange}
              className="inputText m-2"
            />
           <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              id="password"
              className="inputText m-2"
            />
            <br />
            <input type="submit" className="btnforsignup btn btn-outline-success m-3" value="Login" />
          </form>
          <Link className='text-center' to={"/signup"}>
            <p>
              Create New Account
            </p>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Login