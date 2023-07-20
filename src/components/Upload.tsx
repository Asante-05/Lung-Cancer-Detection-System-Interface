import { useRef, useState } from "react";
import "./Upload.css";
function Upload(props) {
  return props.trigger ? (
    <>
      <div className="Upload">
        <div className="Upload-inner">
          {props.children}
          <div className="button">
            <button onClick={() => props.setTrigger(false)} id="1">
              Cancel
            </button>
            <button id="2">Start</button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div></div>
  );
}

export default Upload;
