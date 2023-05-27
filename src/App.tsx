import "./App.css";

import Upload from './components/Upload';
import Login from "./components/Login";
import Main from './components/Main';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="app">

        <Routes>
          {/* <Route path="/" element={<Upload/>}/>  */}
          
          <Route path="/" element ={<Login />}/>
          <Route path="/Main" element ={<Main />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
 