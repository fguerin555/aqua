import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePageFile/HomePage";
import Programma from "./pages/ProgrammaFile/Programma";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/programma" element={<Programma />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
