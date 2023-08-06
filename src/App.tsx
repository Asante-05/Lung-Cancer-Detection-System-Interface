import "./App.css";
import Login from "./components/Login";
import Main from './components/Main';
import './App.css'
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
function App() {
  return (
    <div className="app">

      
        <Routes>
          <Route path="/" element={<Login/>}/> 
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/Main" element ={<Main />}/>
          <Route path="/Main/List" element ={<Main />}/>
          <Route path="/Main/Results" element ={<Main />}/>
        </Routes>
        </div>

  );
}

export default App;
 