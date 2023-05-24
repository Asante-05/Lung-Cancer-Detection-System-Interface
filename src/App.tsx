import "./App.css";
import Login from "./components/Login";
import Main from './components/Main';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element ={<Login />}/>
          <Route path="/Main" element ={<Main />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
