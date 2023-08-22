import { useEffect, useState } from 'react';
import {View} from './View'
import './List.css'

export function List() {

  const [data, setData] = useState([]);
  const [viewdata, setViewData] = useState();
  
  const [viewParticular,setViewParticular] = useState(false);



  useEffect(() => {
    // This function will run after the component renders
    // Simulate fetching data from an API
    fetch('http://127.0.0.1:8000/patient/scanresults/')
      .then(response => response.json())
      .then(data => setData(data));
    // Cleanup function (optional)
    return () => {
      // This function will run before the component is unmounted
      // It's used to clean up any resources or subscriptions
    };
  }, []);

 


async function getScanInformation (scan_id: string) {

  const view_formData = new FormData();
  view_formData.append('scan_id', scan_id);

  try {
    const response = await fetch('http://127.0.0.1:8000/patient/viewdetails/', {
      method: 'POST', 
      body: view_formData,
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending form data:', error);
    throw error;
  }
}



const setView = () => {
  setViewParticular(previewParticular => !previewParticular);
};

async function handleItemClick(item) {
  try {
    const viewResponse = await getScanInformation(item.scan_id);
    setViewData(viewResponse)
    setView()
  } catch (error) {
    throw new Error("An error was encountered", error)
  }
}

console.log(viewdata)
  return (
    <>
    { !viewParticular && data.map((res, index) => {
      return(
      <div key={index} >
        <div className="list_body">
          <div><span>{res.scan_id}</span></div>
          <div><span>{res.patient_name}</span></div>
          <div><span>{res.date}</span></div>
          <div id='list_status'><span>{res.result}</span></div>
          <div id='list_action' onClick={() => handleItemClick(res)}><span>view</span></div>
        </div>
      </div>
      )
    })}
    {
       viewParticular && <View response={viewdata} setView = {setView}/>
    }
      
    
    </>
  );
}