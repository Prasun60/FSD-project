import { useState,useEffect } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Todolistmain from "./components/Todolistmain";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (

    <>
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/todolistmain" element={<Todolistmain/>} />
      </Routes>
    </Router>
    
    {/* <Register/> */}
    {/* <Login /> */}
    {/* <Todolistmain /> */}
    
    </>

    
    
  );
}

export default App;
