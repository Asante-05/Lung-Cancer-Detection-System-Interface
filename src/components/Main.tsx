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
import { Results } from "./Results";
import { List } from "./List";

function Main() {
  let headings = ["id", "name", "date", "scan ID", "RESULTS", "action"];

  // _________________________________________________________________________

  const [popupbtn, setpopupbtn] = useState(false);
  const [logoutbtn, setlogoutbtn] = useState(false);

  const [files, setFiles] = useState(null);

  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event?.preventDefault();
    setFiles(event.dataTransfer.files);
    console.log(files);
  };

  const handleUpload = () => {};

  // _________________________________________________________________________

  return (
    <>
      <div className="main">
        <div className=" el sideBar">
          <div className="ads"></div>


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
          <nav className="mainHeader">
            <div>
              <label className="userName">Welcome, Dr. Rashid</label>
              <ul>
                <li>
                  <button id="upload_button" onClick={() => setpopupbtn(true)}>
                    New Analysis
                  </button>

                  <Upload trigger={popupbtn} setTrigger={setpopupbtn}>
                    <div className="mainBody">
                      <h2>Upload Scan</h2>
                      <div className="header">
                        <h3>Enter Patient ID</h3>
                        <input
                          id="id"
                          type="text"
                          placeholder="FAD21222"
                        ></input>
                      </div>

                      {!files && (
                        <div
                          className="dropZone"
                          onDragOver={handleDragOver}
                          onDrop={handleDrop}
                        >
                          <h1 id="dropzonetxt">Drop File here</h1>
                          <h1 id="dropzonetxt"> or </h1>
                          <input
                            hidden
                            type="file "
                            ref={inputRef}
                            onChange={(event) => setFiles(event.target.files)}
                          />
                          <div className="uploadBtn">
                            <AiOutlineUpload
                              onClick={() => inputRef.current.click()}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </Upload>

                  <div id="popup-root" />
                </li>
                <li>
                  <img src={profile} id="profileImage" alt="profile"></img>
                </li>
                <li id="dropDownArrow">
                  <HiArrowDown />
                </li>
              </ul>
            </div>
          </nav>

          <div className="mainList">
            <ul>
              {headings.map((heading) => (
                <li id="heading">{heading}</li>
              ))}
            </ul>
          </div>





          <div className="list">
            <div className="list-inner">
              <>

              {/* <Results/> */}
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              <List/>
              
              </>
            </div>
          </div>




        </div>
      </div>
    </>
  );
}
export default Main;
