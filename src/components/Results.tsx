import "./Results.css";

import cImage from "../assets/lungImage.jpg";
import { useNavigate } from "react-router-dom";

import { ResultsContext } from "../Context/StateProvider";
import { useContext } from "react";

export function Results({ result, setReultReady }) {
  const navigate = useNavigate();

  const { items, addItem } = useContext(ResultsContext);

  const handleSave = () => {
    addItem(result);
    setReultReady((prev) => !prev);
  };

  return (
    <>
      <div className="results_mainBody">
        <div className="results_header">
          <h1>Results</h1>
        </div>
        <div className="results_detail">
          <div className="results_img">
            <img src={result.image_path} alt="cancer image"></img>
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
              <textarea name="remarks"></textarea>
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
