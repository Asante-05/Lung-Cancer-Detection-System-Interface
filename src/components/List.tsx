import { useContext, useState } from 'react';
import './List.css'
import { ResultsContext } from '../Context/StateProvider';
export function List() {

  const {items, addItem} = useContext(ResultsContext)
  

  return (
    <>
    {items.map((res, index) => {
      return(

      <div key={index}>
        <div className="list_body">
          <div><span>233</span></div>
          <div><span>Maryan Julia</span></div>
          <div><span>01-Jul-2023</span></div>
          <div id='list_scanID'><span>F3121211</span></div>
          <div id='list_status'><span>Positive</span></div>
          <div id='list_action'><span>view</span></div>
        </div>
      </div>
      )
    })}
      
    
    </>
  );
}