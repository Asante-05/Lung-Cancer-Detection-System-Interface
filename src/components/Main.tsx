import "./Main.css";
import Upload from "./Upload";
import "reactjs-popup/dist/index.css";

import profile from "../assets/aaa.jpeg";
import { TfiSettings } from "react-icons/tfi";
import { TfiDashboard } from "react-icons/tfi";
import { AiOutlineUpload } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi2";
import { CgLogOut } from "react-icons/cg";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { LoadingComponent } from "./LoadingCompoenet";
import { Results } from "./Results";
import { List } from "./List";
import { uploadFile } from "../services/services";

function Main() {
  let headings = ["id", "name", "date", "RESULTS", "action"];

  // _________________________________________________________________________

  const [popupbtn, setpopupbtn] = useState(false);
  const [logoutbtn, setlogoutbtn] = useState(false);
  const [resultReady, setResultReady] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [patient_id, setPatient_id] = useState("");
  const [r, setR] = useState(null);
  const [loading, setLoading] = useState(false);

  // _________________________________________________________________________
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      uploadFile(patient_id, selectedFile)
        .then((data) => {
          
          setR(data);
          setResultReady(true);
        })
        .catch((error) => {
          alert(error);
        });
    }
    setpopupbtn(false);
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="main">
        <div className=" el sideBar">
          <div className="ads">LUNGNET</div>

          <div className="options">
            <div className="options-top">
              <div id="em">
                <TfiDashboard id="svg" />
                <span>Dashboard</span>
              </div>

              <div id="em">
                <FaClipboardList id="svg" />
                <span>Patient's List</span>
              </div>

              <div id="em">
                <TfiSettings id="svg" />
                <span>Manage</span>
              </div>
            </div>

            <Link to="" onClick={() => setlogoutbtn(true)}>
              <div id="em">
                <CgLogOut id="svg" />
                <span id="logout">Log Out</span>
              </div>
            </Link>
          </div>

          <ul className="listItems">
            <div>
              <Logout trigger={logoutbtn} setTrigger={setlogoutbtn}>
                <div className="logout-message">
                  <h1>Are your sure?</h1>
                </div>
              </Logout>
            </div>
          </ul>
        </div>

        <div className="el mainArea">
          <div className="mainHeader">
            <div>
              <label className="userName">Welcome, Dr. Rashid</label>
            </div>

            <div className="mainHeader-left">
              <button id="upload_button" onClick={() => setpopupbtn(true)}>
                New Analysis
              </button>

              <img src={profile} id="profileImage" alt="profile"></img>

              <HiArrowDown id="dropDownArrow" />
            </div>
          </div>
          {<div className="loading-component"><LoadingComponent /></div>}
          {
            <>
              {!resultReady && (
                <>
                  <div className="mainList">
                    <ul>
                      {headings.map((heading) => (
                        <li id="heading">{heading}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {
                <>
                  <div className="list">
                    <div className="list-inner">
                      <>
                        {resultReady && (
                          <Results result={r} setReultReady={setResultReady} />
                        )}

                        {!resultReady && (
                          <>
                            <List />
                          </>
                        )}
                      </>
                    </div>
                  </div>
                </>
              }
            </>
          }
          <Upload trigger={popupbtn} setTrigger={setpopupbtn}>
            <div className="mainBody">
              {popupbtn && (
                <>
                  <h2>Upload Scan</h2>
                  <div className="header">
                    <h3>Enter Patient ID</h3>
                    <input
                      value={patient_id}
                      onChange={(event) => setPatient_id(event.target.value)}
                      id="id"
                      type="text"
                      placeholder="FA-2128-22"
                    ></input>
                  </div>

                  <div>
                    <div className="dropZone">
                      <h1 id="dropzonetxt">Drop File here</h1>
                      <h1 id="dropzonetxt"> or </h1>
                      <div>
                        <input
                          type="file"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                        <button className="uploadBtn" onClick={openFileDialog}>
                          {/* Replace 'your-custom-icon.svg' with your custom icon */}
                          <img src="use an svg" alt="Up" />
                        </button>
                      </div>
                    </div>
                    <div className="button">
                      <button id="1" onClick={() => setpopupbtn(false)}>
                        Cancel
                      </button>
                      <button id="2" onClick={() => handleFileUpload()}>
                        Start
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Upload>
          
        </div>
      </div>
    </>
  );
}
export default Main;
