import "./Results.css";

import { useNavigate } from "react-router-dom";

import { ResultsContext } from "../Context/StateProvider";
import { useContext, useState } from "react";

import { addResultToDatabase } from "../services/services";

export function Results({ result, setReultReady }) {
  const navigate = useNavigate();
  const [docRemarks, setDocRemarks] = useState("");

  const { items, addItem } = useContext(ResultsContext);

  const handleSave = () => {
    addItem(result);
    setReultReady((prev) => !prev);

    // add results together with remarks

    addResultToDatabase(result, docRemarks);
  };

  const encodePrefix = "data:image/jpeg;base64,";
  let encodedImage = "";

  if (result === null) {
    alert("Error, no response from backend");
  } else {
    encodedImage = encodePrefix + result.image_base64;
  }

  return (
    <>
      <div className="results_mainBody">
        <div className="results_header">
          <h1>Results</h1>
        </div>
        <div className="results_detail">
          <div className="results_img">
            <img src={encodedImage} alt="cancer image"></img>

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

              <div id="detail_top">
                <span>{result.patient_id}</span>
                <span>{result.patient_name}</span>
                <span>{result.gender}</span>
                <span>
                  {result.prediction === "Malignant" ? "Positive" : "Negative"}
                </span>
                <span>{result.prediction}</span>
              </div>
            </div>

            <div className="results_input">
              <h3>Remarks</h3>
              <textarea
                value={docRemarks}
                onChange={(event) => setDocRemarks(event.target.value)}
                name="remarks"
              ></textarea>
            </div>
            <div className="results_buttons">
              <button id="1" onClick={handleSave}>
                Save
              </button>
              <button id="2">Print Results</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
