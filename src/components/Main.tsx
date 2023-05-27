import "./Main.css";
import uStryle from "./Upload.css"
import Upload from "./Upload";
import "reactjs-popup/dist/index.css";

import profile from "../assets/aaa.jpeg";
import { TfiSettings } from "react-icons/tfi";
import { TfiDashboard } from "react-icons/tfi";
import { FaClipboardList } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import Popup from "reactjs-popup";

function Main() {
  let headings = ["id", "name", "date", "scan ID", "RESULTS", "action"];
  return (
    <>
      <div className="main">
        <div className=" el sideBar">
          <div className="ads"></div>
          <ul className="listItems">
            <div id="em">
              <TfiDashboard />
              <li>Dashboard</li>
            </div>
            <div id="em">
              <FaClipboardList />
              <li>Patient's List</li>
            </div>
            <div id="em">
              <TfiSettings />
              <li>Manage</li>
            </div>
            <div id="em">
              <CgLogOut className="logOut" />
              <li className="logOut">Log Out</li>
            </div>
          </ul>
        </div>
        <div className="el mainArea">
          <nav className="header">
            <label className="userName">Welcome, Dr. Rashid</label>
            <ul>
              <li>
                <img src={profile} id="profileImage" alt="profile"></img>
              </li>
              <li>



                

                <Popup trigger={<button>New Analysis</button>}>
                  {
                    <div className="popup">
                      <Upload/>
                    </div>
                  }
                </Popup>





                <div id="popup-root" />
              </li>
            </ul>
          </nav>

          <div className="mainList">
            <ul>
              {headings.map((heading) => (
                <li id="heading">{heading}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
