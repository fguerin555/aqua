import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePageFile/HomePage";
import NewProgramma from "./pages/NewProgrammaFile/NewProgramma";

import LinksPage from "./pages/LinksPageFile/LinksPage";
// import Stampa from "./pages/StampaFile/Stampa";
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
          <Route path="/newprogramma" element={<NewProgramma />} />

          <Route path="/linkspage" element={<LinksPage />} />
          {/* <Route path="/stampa" element={<Stampa />} /> */}
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
