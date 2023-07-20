import { useRef, useState } from "react";
import "./Logout.css";
import { Link } from "react-router-dom";


function Logout(props) {
  return props.trigger ? (
    <>
      <div className="Logout">
        <div className="Logout-inner">
          {props.children}
          <div className="button">
            
            <button onClick={() => props.setTrigger(false)} id="1">
              Cancel
            </button>
            <Link to={'/'}>
            <button  id="2">Log Out</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div></div>
  );
}

export default Logout;
