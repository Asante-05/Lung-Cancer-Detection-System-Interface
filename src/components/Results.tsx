import "./Results.css";
import cImage from '../assets/d.png'
export function Results() {
  return (
    <>
      <div className="results_mainBody">
        <div className="results_header">
          <h1>Results</h1>
        </div>
        <div className="results_detail">
          <div className="results_img">
            <img src={cImage} alt="cancer image"></img>
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
                <span>MA1231</span>
                <span>Michael Bale</span>
                <span>M</span>
                <span>Positive</span>
                <span>Benign</span>
              </div>
            </div>

            <div className="results_input">
              <h3>Remarks</h3>
              <textarea name="remarks"></textarea>
            </div>
            <div className="results_buttons">
              <button id="1">Save</button>
              <button id="2">Print Results</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
