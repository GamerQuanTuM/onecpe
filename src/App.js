import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

// components

import Footer from "./components/Footer";
// pages
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import About from "./pages/About";
import Footer2 from "./components/Footer2";
import AppCard from "./components/AppCard.jsx";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/privacy" element={<PrivacyAndPolicy />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <AppCard/>

      <Footer2 />
    </BrowserRouter>
  );
};

export default App;
