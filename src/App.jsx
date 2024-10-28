import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage"; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Routes>
        {/* Root route displays the HomePage component */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
