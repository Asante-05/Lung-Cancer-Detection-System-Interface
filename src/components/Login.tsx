import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import {  loginUser } from "../services/services";


function Login() {


  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [logInState, setLogInState] = useState(false)
  const [error, setError] = useState('');


  const handleLoginClick = async (event) => {
    event.preventDefault();
    try {
      const response_data = await loginUser(email, password);
      
      if (response_data.email || response_data.password){
        
        if (response_data.email) {alert(response_data.email[0])}
        if (response_data.password){alert(response_data.password[0])}
        
      } else {
        // console.log(response.detail)
        // setLogInState(true)
        // window.location.href = '/Main'
      }
      if (!response_data.ok){
        console.log(response_data.non_field_errors[0])
      }

    } catch (error) {
      
    }
  };




  return (
    <>
      <div className="overlay  overlay_0">

        <div className="logIn">
          <div className="logIn_text">
            <h1>Log In</h1>
          </div>

          <div className="logIn_info">
            <div className="logIn_userName">
              <h5 id="header">Email</h5>
              <div className="input">
                <input id="logIn_userName_Input" type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder=""></input>
              </div>
            </div>

            <div className="logIn_password">
              <h5 id="header">Password</h5>
              <div className="input">
                <input
                value={password}
                hidden={false}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="logIn_password_input"
                  placeholder="Password123@"
                ></input>
              </div>
            </div>

            <div className="remember">
              <input type="checkbox" id="check"></input>
              <label>Remember me on this page</label>
            </div>
          </div>
          <div className="logIN_button">
            <button id="l_button" onClick={handleLoginClick}>

              Log In
            </button>
          </div>

          <div className="footer">
            <div className="forgot_password">
              <h5>forgot password?</h5>
            </div>
       

            <Link to="/signup">
              <div className="signUp_link">
                <h5 className="l_button">
                  Don't have an account? <strong>Sign up</strong>
                </h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>

  );
}
export default Login;

