import { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {  loginUser } from "../services/services";


function Login() {
  const navigate = useNavigate();

  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [logInState, setLogInState] = useState(false)

  const handleLoginClick = async (event) => {
    event.preventDefault();
    try {
      const data = await loginUser(email, password);
      console.log('Login response:', data);
      setLogInState(true)
      window.location.href = '/Main'
    } catch (error) {
      
    }
  };

console.log(logInState)


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

              Log In{" "}
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


// import { useState } from "react";
// import "./Login.css";
// import { Link, useNavigate } from "react-router-dom";
// import { handleLogin } from "../services/services";


// function Login() {
//   const navigate = useNavigate();

//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');


//   const handleLoginClick = async () => {
//     setError(''); 
//     const { success, message, data } = await handleLogin(userName, password);
//     if (success) {
//       console.log('Login successful!');
//     } else {
//       setError(message);
//     }
//   };

//   console.log(userName)
//   console.log(password)


//   return (
//     <>
//       <div className="overlay  overlay_0">
//         <div className="logIn">
//           <div className="logIn_text">
//             <h1>Log In</h1>
//           </div>

//           <div className="logIn_info">
//             <div className="logIn_userName">
//               <h5 id="header">User Name</h5>
//               <div className="input">
//                 <input id="logIn_userName_Input" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder=""></input>
//               </div>
//             </div>

//             <div className="logIn_password">
//               <h5 id="header">Password</h5>
//               <div className="input">
//                 <input
//                 value={password}
//                   type="password"
//                   onChange={(e) => setPassword(e.target.value)}
//                   id="logIn_password_input"
//                   placeholder="Password123@"
//                 ></input>
//               </div>
//             </div>

//             <div className="remember">
//               <input type="checkbox" id="check"></input>
//               <label>Remember me on this page</label>
//             </div>
//           </div>
//           <div className="logIN_button">
//             <button id="l_button" onClick={handleLoginClick}>

//               Log In{" "}
//             </button>
//               {(success) && (() => navigate("/Main"))}
//           </div>

//           <div className="footer">
//             <div className="forgot_password">
//               <h5>forgot password?</h5>
//             </div>

//             <Link to="/signup">
//               <div className="signUp_link">
//                 <h5 className="l_button">
//                   Don't have an account? <strong>Sign up</strong>
//                 </h5>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>

//   );
// }
// export default Login;
