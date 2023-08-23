import React from "react";
import { deleteFromDataBase } from "../services/services";
import "./Logout.css";


function Confirmation({ isOpen, onClose, res }) {

  async function handleDeleteClick(item) {
    try {
      const deleteResponse = await deleteFromDataBase(item.scan_id);
      if (deleteResponse.message) {
        alert(deleteResponse.message);
      } else {
        alert(deleteResponse.detail);
      }
    } catch (error) {
      throw new Error(
        "An error was encountered while deleting from the database",
        error
      );
    }
  }

  if (!isOpen) return null;

  return (
    <>
      <div className="Logout">
        <div className="Logout-inner">
          <p>Are you sure you want to perform this action?</p>
          <div className="button">
            <button onClick={onClose} id="1">
              Cancel
            </button>
            <button id="2" onClick={() => handleDeleteClick(res)}>Delete record</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
