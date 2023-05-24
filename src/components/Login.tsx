import './Login.css'
import {useNavigate} from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="logIn">
        <h1>Log In</h1>

        <div className="userName">
          <h5 id='title'>User Name</h5>
          <input id="text_area" placeholder="hannah.green@gmail.com"></input>
        </div>

        <div className="password">
          <h5 id='title'>Password</h5>
          <input type="text" id="text_area" placeholder="Password123@"></input>
        </div>
        <div className="checkBox">
          <input type="checkbox" id='checkbox'></input>Remeber me on this computer
        </div>
        <div className="logInButton">
          <button onClick={() => navigate("/Main")}> LOG IN </button>
        </div>

        <div className='bottom'>
          <h5>forgot password?</h5>
        </div>
      </div>
    </>
  );
}
export default Login;
