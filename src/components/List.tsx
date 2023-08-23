import { useEffect, useState } from "react";

import PrintComponent, { View } from "./View";
import "./List.css";
import { deleteFromDataBase } from "../services/services";
import Confirmation from  './confirmation'

export function List() {
  const [data, setData] = useState([]);
  const [viewdata, setViewData] = useState();

  const [ldelete, setLDelete] = useState(false);
  const [viewParticular, setViewParticular] = useState(false);

  // useEffect(() => {
  //   // This function will run after the component renders
  //   // Simulate fetching data from an API
  //   fetch("http://127.0.0.1:8000/patient/scanresults/")
  //     .then((response) => response.json())
  //     .then((data) => setData(data.results));
  //   // Cleanup function (optional)
  //   return () => {
  //     // This function will run before the component is unmounted
  //     // It's used to clean up any resources or subscriptions
  //   };

  // }, []);




  
    const [shouldFetch, setShouldFetch] = useState(true);
  
    useEffect(() => {
      // Initialize WebSocket connection when component mounts
      const socket = new WebSocket('ws://your-backend-websocket-url');
  
      socket.onmessage = (event) => {
        // Handle messages received from the backend
        const message = JSON.parse(event.data);
        if (message.type === 'dataChanged') {
          // Trigger a data fetch when a change is detected
          setShouldFetch(true);
        }
      };
  
      return () => {
        socket.close();
      };
    }, []);
  
    useEffect(() => {
      if (shouldFetch) {
        // Fetch data from the database
        fetch("http://127.0.0.1:8000/patient/scanresults/")
          .then((response) => response.json())
          .then((data) => {
            setData(data.results);
            // Reset the trigger after fetching
            setShouldFetch(false);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            // Reset the trigger even if there's an error
            setShouldFetch(false);
          });
      }
    }, [shouldFetch]);
  
  

  

  async function getScanInformation(scan_id: string) {
    const view_formData = new FormData();
    view_formData.append("scan_id", scan_id);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/patient/viewdetails/",
        {
          method: "POST",
          body: view_formData,
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error sending form data:", error);
      throw error;
    }
  }

  const setView = () => {
    setViewParticular((previewParticular) => !previewParticular);
  };

  async function handleItemClick(item) {
    try {
      const viewResponse = await getScanInformation(item.scan_id);
      setViewData(viewResponse);
      setView();
    } catch (error) {
      throw new Error("An error was encountered", error);
    }
  }


  const handleDeleteModalClose = () => {setLDelete(false)}


  function handleDeleteModalOpen () {
    setLDelete(true)

  }



  return (
    <>
      {/* <div className='scrollable_container'> */}

      {!viewParticular &&
        data.map((res, index) => {
          return (
            <div key={index}>
              <div className="list_body">
                <div>
                  <span>{res.scan_id}</span>
                </div>
                <div>
                  <span>{res.patient_name}</span>
                </div>
                <div>
                  <span>{res.date}</span>
                </div>
                <div id="list_status">
                  <span>{res.result}</span>
                </div>
                <div className="list_action">

                  <div>
                    <span onClick={() => handleItemClick(res)}>view</span>{" "}
                  </div>

                  <div >

                  <Confirmation  onClose={handleDeleteModalClose} isOpen={ldelete} res = {res} onConfirm = {handleDeleteModalClose}
                  >
                    
                  </Confirmation>

                    <svg
                      onClick={handleDeleteModalOpen}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      width="20px"
                      height="20px"
                      fill="#000"
                    >
                      <path
                        fill="#000"
                        d="M25,30l3.645,47.383C28.845,79.988,31.017,82,33.63,82h32.74c2.613,0,4.785-2.012,4.985-4.617L75,30"
                      />
                      <path
                        fill="#000"
                        d="M65 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S65 36.35 65 38zM53 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S53 36.35 53 38zM41 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S41 36.35 41 38zM77 24h-4l-1.835-3.058C70.442 19.737 69.14 19 67.735 19h-35.47c-1.405 0-2.707.737-3.43 1.942L27 24h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h54c1.657 0 3-1.343 3-3S78.657 24 77 24z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {/* </div> */}
      {viewParticular && (
        <PrintComponent response={viewdata} setView={setView} />
      )}
    </>
  );
}
