import "./Main.css";
import Upload from "./Upload";
import "reactjs-popup/dist/index.css";

import profile from "../assets/aaa.jpeg";
import { TfiSettings } from "react-icons/tfi";
import { TfiDashboard } from "react-icons/tfi";
import lungnetLogowhite from "/logo/lungnetlogo white.png"
import { FaClipboardList } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi2";
import { CgLogOut } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { LoadingComponent } from "./LoadingCompoenet";
import { Results } from "./Results";
import { List } from "./List";
import { uploadFile } from "../services/services";
import lungnet1black from "/logo/lungnet1black.png"

function Main() {
  let headings = ["id", "name", "date", "RESULTS", "action"];

  // _________________________________________________________________________

  const [popupbtn, setpopupbtn] = useState(false);
  const [logoutbtn, setlogoutbtn] = useState(false);
  const [resultReady, setResultReady] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [patient_id, setPatient_id] = useState("");
  const [loading, setLoading] = useState<boolean>(false); 
  


  const [r, setR] = useState(null);

  // _________________________________________________________________________


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    setpopupbtn(false)
    setLoading(true);
    try {
      const response = await uploadFile(patient_id, selectedFile);
       console.log(response)
      setR(response); 
      console.log(r)
    } catch (error) {
      console.error('Error uploading file:', error);
    }
    setLoading(false);
    setResultReady(true)
  };

  





  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="main">
        <div className=" el sideBar">

          <div className="lungnet">
            <img src={lungnetLogowhite} alt="lungnet"></img>
          </div>

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
          {
            <>
              {!resultReady && (
                <>
                  <div className="mainList">
                    <ul>
                      {headings.map((heading, index) => (
                        <li id="heading" key={index}>{heading}</li>
                        ))}
                    </ul>
                  </div>
                </>
              )}
              {loading && (<div className="loading-component"><LoadingComponent /></div>)}
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
                          <img src={lungnet1black} alt="Up" />
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
