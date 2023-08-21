// import "./Results.css";

import { getScanInformation } from "../services/services";


export function View({scan_id, setView}) {

  const handleInfoRetrieve = async () => {
    try {
      const response = await getScanInformation(scan_id);
       console.log(response)
  
    } catch (error) {
      console.error('Error uploading file:', error);
    }

  };





  
  return (
    <>
      <div className="results_mainBody">
        <div className="results_header">
          <h1>Scan Information</h1>
        </div>
        <div className="results_detail">
          <div className="results_img">
            {/* <img src={} alt="cancer image"></img> */}
            
            {/* <img src={`data:image/jpeg;base64,${result.image_path}`} alt="Cancer Image" /> */}
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

              {/* <div id="detail_top">
                <span>{result.patient_id}</span>
                <span>{result.patient_name}</span>
                <span>{result.gender}</span>
                <span>
                  {result.prediction === "Malignant" ? "Positive" : "Negative"}
                </span>
                <span>{result.prediction}</span>
              </div> */}
            </div>

            <div className="results_input">
              <h3>Remarks</h3>
              <textarea ></textarea>
            </div>
            <div className="results_buttons">
              <button id="1" onClick={setView}>
                Return
              </button>
              <button id="2">Print Results</button>
            </div>
          </div>
        </div>
      </div>




















    </>
  );
}
