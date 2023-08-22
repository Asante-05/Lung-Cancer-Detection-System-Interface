// import "./Results.css";

import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
const  View = React.forwardRef(({response, setView}, ref) => {


  const encodePrefix = "data:image/jpeg;base64,";
  let encodedImage = "";

  if (response === null) {
    alert("Error, no response from backend");
  } else {
    encodedImage = encodePrefix + response.image_base64;
  }


   
  return (
    <>
  <div className="results_mainBody" ref={ref}>
        <div className="results_header">
          <h1>Scan Information</h1>
        </div>
        <div className="results_detail">
          <div className="results_img">
          <img src={encodedImage} alt="cancer image"></img>
          </div>

          <div className="results_info">
            <div className="results_patientInfo">
              <div id="detail_top">
                <strong>Patient ID</strong>
                <strong>Name</strong>
                <strong>Sex</strong>
                <strong>State</strong>
                <strong>Class</strong>
              </div>

              <div id="detail_top">
                <span>{response.patient_id}</span>
                <span>{response.patient_name}</span>
                <span>{response.gender}</span>
                <span>
                  {response.status}
                </span>
                <span>{response.patient_class}</span>
              </div>
            </div>

            <div className="results_input">
              <h3>Remarks</h3>
              <p>{response.remarks}</p>
            </div>

            <div className="results_buttons">
              <button id="1" onClick={setView}>
                Return
              </button>
          

             
            </div>
            
          </div>
        </div>
      </div>

    </>
  );
})

const PrintComponent = ({response, setView}) => {
  const componentRef = useRef(null);

  return (
    <div>
      <View ref={componentRef} response={response} setView = {setView} />

      <PrintButton componentRef={componentRef} />
    </div>
  );
};

const PrintButton = ({ componentRef }) => (
  <ReactToPrint
    trigger={() => <button>Print Results</button>}
    content={() => componentRef.current}
  />
);


export default PrintComponent