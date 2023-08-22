// import "./Results.css";


export function View({response, setView}) {

  const encodePrefix = "data:image/jpeg;base64,";
  let encodedImage = "";

  if (response === null) {
    alert("Error, no response from backend");
  } else {
    encodedImage = encodePrefix + response.image_base64;
  }

  
  return (
    <>
  <div className="results_mainBody">
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
                  {response.prediction === "Malignant" ? "Positive" : "Negative"}
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
              <button id="2">Print Results</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
