import { useEffect, useState } from 'react';
import {View} from './View'
import './List.css'

export function List() {

  const [data, setData] = useState([]);
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


  console.log(data)

  const [selectedItem, setSelectedItem] = useState();

  const handleItemClick = (item) => {
    setSelectedItem(item)
    setView()
    console.log(selectedItem)
  }
  const setView = () => {
    setViewParticular(previewParticular => !previewParticular);
  };
  

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
       viewParticular && <View scan_id={selectedItem.scan_id} setView = {setView}/>
    }
      
    
    </>
  );
}