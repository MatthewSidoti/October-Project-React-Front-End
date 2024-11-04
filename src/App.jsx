import React from "react";
import {Route, Routes } from "react-router-dom";
import HomePage from "./components/Home.jsx"; 
import Preview from "./components/Preview"; 


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </>
  );
}

export default App;
