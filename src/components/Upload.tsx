import { useRef, useState } from "react";
import "./Upload.css";
function Upload() {
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

  if (files)
    return (
      <div className="uplaods">
        <ul>
          {Array.from(files).map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
        <div className="actions">
          <button onClick={() => setFiles(null)}>Cancel</button>
          <button onClick={handleUpload}>Upload </button>
        </div>
      </div>
    );

  return (
    <>
      <div className="mainBody">
        <h2>Upload Scan</h2>
        <div className="header">
          <h3>Enter Patient ID</h3>
          <input id="id" type="text" placeholder="FAD21222"></input>
        </div>

        {!files && (
          <div
            className="dropZone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div>
              <h1>Upload Scan</h1>
              <h1> or </h1>
              <input
                hidden
                type="file"
                ref={inputRef}
                onChange={(event) => setFiles(event.target.files)}
              />
              <button onClick={() => inputRef.current.click()}>
                Select Files{" "}
              </button>
            </div>

          </div>
        )}
            <div className="button">
              <button id="1">Cancel</button>
              <button id="2">Start</button>
            </div>
      </div>
    </>
  );
}

export default Upload;
