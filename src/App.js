import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePageFile/HomePage";
import ProgSeptember from "./pages/ProgSeptember/ProgSeptember";
import ProgOctober from "./pages/ProgOctober/ProgOctober";
import ProgNovember from "./pages/ProgNovember/ProgNovember";
import Test from "./pages/test";
import LinksPage from "./pages/LinksPageFile/LinksPage";
import Stampa from "./pages/StampaFile/Stampa";
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
          <Route path="//Progseptember" element={<ProgSeptember />} />
          <Route path="/progoctober" element={<ProgOctober />} />
          <Route path="/prognovember" element={<ProgNovember />} />
          <Route path="/linkspage" element={<LinksPage />} />
          <Route path="/stampa" element={<Stampa />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
