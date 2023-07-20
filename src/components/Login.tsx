import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="overlay  overlay_0">
        <div className="signIn">
          <div className="signIn_text">
            <h1>Sign Up</h1>
          </div>

          <div className="signIn_info">
           

            <div className="signIn_userName">
              <h5 id="header">User Name</h5>
              <div className="input">
                <input id="signIn_userName_Input" placeholder=""></input>
              </div>
            </div>

            <div className="signIn_password">
              <h5 id="header">Password</h5>
              <div className="input">
                <input
                  type="text"
                  id="signIn_password_input"
                  placeholder="Password123@"
                ></input>
              </div>
            </div>

            
            

            <div className="remember">
              <input type="checkbox" id="check"></input>
              <label>Remember me on this page</label>
            </div>

            <div className="register_button">
              <button id="r_button" onClick={() => navigate("/Main")}>
                {" "}
                Log In{" "}
              </button>
            </div>
          </div>

          <div className="footer">

          <div className="forgot_password">
            <h5>forgot password?</h5>
          </div>

            <Link to='/signup'>
          <div className="signUp_link">
            <h5>Don't have an account? <strong>Sign up</strong></h5>
          </div>
            </Link>
          </div>

        </div>
      </div>
    </>
        // <div className="bottom_question">
        //   <h5>forgot password?</h5>
        //   <Link to='/signup'>Don't have an account? <b>Sign Up</b></Link>
        // </div>
     
  );
}
export default Login;
