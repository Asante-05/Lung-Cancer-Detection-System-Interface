import { useRef, useState } from "react";
import "./Upload.css";
function Upload(props) {
  return props.trigger ? (
    <>
      <div className="Upload">
        <div className="Upload-inner">
          {props.children}
          
        </div>
      </div>
    </>
  ) : (
    <div></div>
  );
}

export default Upload;
