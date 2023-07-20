import "./SignUp.css";

function SignUp() {
  return (
    <>
      <div className="overlay  overlay_0">
        <div className="signIn">
          <div className="signIn_text">
            <h1>Sign Up</h1>
          </div>

          <div className="signIn_info">
            <div className="signIn_email">
              <h5 id="signIn_email_head">Email</h5>
              <div className="input">
                <input
                  id="signIn_email_input"
                  placeholder="hannah.green@gmail.com"
                ></input>
              </div>
            </div>

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

            <div className="remember">
              <input type="checkbox" id="check"></input>
              <label>Remember me on this page</label>
            </div>

            <div className="register_button">
              <button id="r_button" onClick={() => navigate("/Main")}>
                {" "}
                Register{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
