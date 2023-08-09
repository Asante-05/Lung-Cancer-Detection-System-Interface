
import { useState } from "react";
import "./SignUp.css";
import { signupUser } from "../services/services";
import lungLogo from "../../public/logo/lungnetcenterwhite.png";


function SignUp() {
  const [userName , setUserName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setpassword] = useState('')


  const [error, setError] = useState('')
  const [signUpState, setSignUpState] = useState(false)


const handleSignUpClick = async (event) => {
  event.preventDefault()
  try{
  const data = await signupUser(email, userName, password,);
    setSignUpState(true)
    window.location.href = '/'
  
  } 
  catch (error) {

  }

}







  return (
    <>
      <div className="overlay  overlay_0">
        <div className="img_div">
          <img src={lungLogo}></img>
        </div>
        <div className="signIn_div">
        <div className="signIn">
          <div className="signIn_text">
            <h1>Sign Up</h1>
          </div>

          <div className="signIn_info">
            <div className="signIn_email">
              <h5 id="signIn_email_head">Email</h5>
              <div className="input">
                <input
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                  id="signIn_email_input"
                  placeholder="hannah.green@gmail.com"
                ></input>
              </div>
            </div>

            <div className="signIn_userName">
              <h5 id="header">Username</h5>
              <div className="input">
                <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                id="signIn_userName_Input"
                 placeholder=""></input>
              </div>
            </div>

            <div className="signIn_password">
              <h5 id="header">Password</h5>
              <div className="input">
                <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                  type="text"
                  id="signIn_password_input"
                  placeholder="Password123@"
                ></input>
              </div>
            </div>

            
            <div className="signIn_password">
              <h5 id="header">Confirm Password</h5>
              <div className="input">
                <input
                  type="text"
                  id="signIn_password_input"
                  placeholder="Password123@"
                ></input>
              </div>
            </div>

         

            <div className="register_button">
              <button 
              onClick={handleSignUpClick}
              id="r_button" >
                {" "}
                Register{" "}
              </button>
            </div>
          </div>
        </div>

        </div>
      </div>
    </>
  );
}
export default SignUp;
