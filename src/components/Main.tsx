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

          <ul className="listItems">
            <div id="em">
              <TfiDashboard id="svg" />
              <li>Dashboard</li>
            </div>

            <div id="em">
              <FaClipboardList id="svg" />
              <li>Patient's List</li>
            </div>

            <div id="em">
              <TfiSettings id="svg" />
              <li>Manage</li>
            </div>

            <Link onClick={() => setlogoutbtn(true)}>
              <div id="em">
                <CgLogOut id="logout" />
                <li id="logout">Log Out</li>
              </div>
            </Link>

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
          
          <nav className="header">
            <div>
              <label className="userName">Welcome, Dr. Rashid</label>
              <ul>
                <li>

                  <button onClick={() => setpopupbtn(true)}>
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

          <div>
            <h1><h1>Reslts</h1></h1>
          </div>


        </div>
      </div>
    </>
  );
}
export default Main;
